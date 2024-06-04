# <center>Rocky Linux 8 上安装 vsftpd</center><br /><br />

## **1.我们需要做的第一件事是安装非常安全的 FTP 守护进程，该守护进程在默认的 Rocky Linux 8 存储库中可用。**

```
sudo yum update
sudo yum install vsftpd -y
```

&emsp;&emsp;安装成功后，验证已安装的 Vsftpd 版本。

```
sudo rpm -qi vsftpd
```

&emsp;&emsp;返回以下结果:
```
Name        : vsftpd
Version     : 3.0.3
Release     : 34.el8
Architecture: x86_64
Install Date: Sat 12 Feb 2022 02:30:16 AM EST
Group       : System Environment/Daemons
Size        : 355732
License     : GPLv2 with exceptions
Signature   : RSA/SHA256, Tue 09 Nov 2021 10:07:58 AM EST, Key ID 15af5dac6d745a60
Source RPM  : vsftpd-3.0.3-34.el8.src.rpm
Build Date  : Tue 09 Nov 2021 09:27:17 AM EST
Build Host  : ord1-prod-x86build004.svc.aws.rockylinux.org
Relocations : (not relocatable)
Packager    : [email 
Vendor      : Rocky
URL         : https://security.appspot.com/vsftpd.html
Summary     : Very Secure Ftp Daemon
Description :
vsftpd is a Very Secure FTP daemon. It was written completely from
scratch.
```

&emsp;&emsp;启动并启用 Very Secure FTP Daemon 在系统启动时自动运行。

```
sudo systemctl enable vsftpd --now
```

&emsp;&emsp;检查服务的状态。

```
systemctl status vsftpd
```

&emsp;&emsp;返回以下结果:
```
vsftpd.service - Vsftpd ftp daemon
   Loaded: loaded (/usr/lib/systemd/system/vsftpd.service; enabled; vendor preset: disabled)
   Active: active (running) since Sat 2022-02-12 02:30:39 EST; 6s ago
  Process: 32110 ExecStart=/usr/sbin/vsftpd /etc/vsftpd/vsftpd.conf (code=exited, status=0/SUCCESS)
 Main PID: 32111 (vsftpd)
    Tasks: 1 (limit: 36438)
   Memory: 580.0K
   CGroup: /system.slice/vsftpd.service
           └─32111 /usr/sbin/vsftpd /etc/vsftpd/vsftpd.conf

Feb 12 02:30:38 localhost.localdomain systemd[1]: Starting Vsftpd ftp daemon...
Feb 12 02:30:39 localhost.localdomain systemd[1]: Started Vsftpd ftp daemon.
```

## **2.创建FTP用户和用户目录**

&emsp;&emsp;我们需要创建并授予专用用户对 FTP 服务器的访问权限。我们将如下创建用户。

```
sudo adduser vsftpduser  #创建用户名为vsftpduser
sudo passwd vsftpduser   #设置密码为vsftpduser
```

&emsp;&emsp;使用上面创建的用户和密码，继续创建具有必要权限的 FTP 目录。

```
sudo mkdir -p /home/vsftpduser/ftp_folder
sudo chmod -R 750 /home/vsftpduser/ftp_folder
sudo chown vsftpduser: /home/vsftpduser/ftp_folder
```

&emsp;&emsp;要授予用户访问 Vsftpd 服务器的权限，请将其添加到 /etc/vsftpd/user_list 文件中。
```
sudo bash -c 'echo vsftpduser >> /etc/vsftpd/user_list'
```

## **3.在 Rocky Linux 8上配置 vsftpd。**

&emsp;&emsp;我们需要对访问的 Vsftpd 配置文件进行一些调整，如下所示。

```
sudo vi /etc/vsftpd/vsftpd.conf
```

&emsp;&emsp;文件打开后，进行以下调整：

```
#允许本地用户远程访问，然后阻止匿名用户。
anonymous_enable = NO
local_enable = YES

#授予用户运行 ant FTP 命令的权限。
write_enable = YES

#仅限制用户对其主目录的访问并授予写入权限。
chroot_local_user=YES
allow_writeable_chroot=YES

#设置自定义端口以启用被动 FTP 连接。
pasv_min_port=30000
pasv_max_port=31000

#允许 user_list 文件中的专用 Vsftpd 用户访问 FTP 服务器。
userlist_file=/etc/vsftpd/user_list
userlist_enable=YES
userlist_deny=NO
```
&emsp;&emsp;按ESC+Shift+:之后输入wq保存退出，重启vsftpd。

```
sudo systemctl restart vsftpd
```

## **4. 在 Firewalld 上打开 FTP 端口**

&emsp;&emsp;基于上面的配置，我们将被动通信端口范围设置在30000-31000之间。我们现在需要允许这些端口通过防火墙。此外，我们需要允许 FTP 数据和流量使用端口范围 20-21。

```
sudo firewall-cmd --permanent --add-port=20-21/tcp  #放行tcp协议20-21端口
sudo firewall-cmd --permanent --add-port=30000-31000/tcp #放行tcp协议30000-31000端口

sudo firewall-cmd --reload  #重启防火墙
```

&emsp;&emsp;现在使用以下命令测试 FTP 连接
```
ftp serverIP  #server=服务器IP
```

## **5. Rocky Linux 8 上的 Vsftpd SSL/TLS 配置**

&emsp;&emsp;出于 FTP 服务器的安全和加密原因，我们将在此系统上生成 SSL 证书.在本指南中，我们使用使用 OpenSSL 生成的自签名证书，如下所示。

&emsp;&emsp;首先，确保安装了 OpenSSL

```
sudo yum install openssl -y  #安装openssl
```

&emsp;&emsp;然后生成自签名证书。

```
sudo openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout /etc/vsftpd.pem -out /etc/vsftpd/vsftpd.pem
```

&emsp;&emsp;根据返回结果中的提示填写所需的国家/地区名称、州/省详细信息等<u>（随意填写不做演示）</u>

&emsp;&emsp;完成后，编辑 Vsftpd 配置文件

```
sudo vi /etc/vsftpd/vsftpd.conf 
```

&emsp;&emsp;添加生成的证书路径。

```
#Add these lines###
rsa_cert_file=/etc/vsftpd/vsftpd.pem
rsa_private_key_file=/etc/vsftpd.pem

#Enable SSL##
ssl_enable=YES
allow_anon_ssl=NO
force_local_data_ssl=YES
force_local_logins_ssl=YES
ssl_tlsv1=YES
ssl_sslv2=NO
```

&emsp;&emsp;按ESC+Shift+:之后输入wq保存退出，重启vsftpd。

```
sudo systemctl restart vsftpd
```

## **6.到此，FTP服务器已经搭建完成！**

&emsp;&emsp;Windows用户可使用[Filezilla FTP](https://filezilla-project.org/)客户端来测试FTP服务器，就不详细演示了。