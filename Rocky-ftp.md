# Rocky Linux 8 上安装 vsftpd

## 1. 安装 vsftpd

首先安装非常安全的 FTP 守护进程，该守护进程在默认的 Rocky Linux 8 存储库中可用：

```bash
sudo yum update
sudo yum install vsftpd -y
```

安装成功后，验证已安装的 Vsftpd 版本：

```bash
sudo rpm -qi vsftpd
```

返回结果示例：
```text
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

启动并启用 Very Secure FTP Daemon 在系统启动时自动运行：

```bash
sudo systemctl enable vsftpd --now
```

检查服务状态：

```bash
systemctl status vsftpd
```

返回结果示例：
```text
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

---

## 2. 创建 FTP 用户和用户目录

创建专用用户并授予对 FTP 服务器的访问权限：

```bash
sudo adduser vsftpduser
sudo passwd vsftpduser
```

创建具有必要权限的 FTP 目录：

```bash
sudo mkdir -p /home/vsftpduser/ftp_folder
sudo chmod -R 750 /home/vsftpduser/ftp_folder
sudo chown vsftpduser: /home/vsftpduser/ftp_folder
```

将用户添加到允许访问列表：

```bash
sudo bash -c 'echo vsftpduser >> /etc/vsftpd/user_list'
```

---

## 3. 配置 vsftpd

编辑配置文件进行以下调整：

```bash
sudo vi /etc/vsftpd/vsftpd.conf
```

在配置文件中添加/修改以下设置：

```ini
# 允许本地用户访问，阻止匿名用户
anonymous_enable = NO
local_enable = YES

# 授予用户运行 FTP 命令的权限
write_enable = YES

# 限制用户访问主目录并授予写入权限
chroot_local_user=YES
allow_writeable_chroot=YES

# 设置被动 FTP 连接端口范围
pasv_min_port=30000
pasv_max_port=31000

# 允许 user_list 文件中的用户访问
userlist_file=/etc/vsftpd/user_list
userlist_enable=YES
userlist_deny=NO
```

保存退出后重启服务：

```bash
sudo systemctl restart vsftpd
```

---

## 4. 配置防火墙

允许 FTP 相关端口通过防火墙：

```bash
# 允许 FTP 控制端口
sudo firewall-cmd --permanent --add-port=20-21/tcp

# 允许被动模式端口范围
sudo firewall-cmd --permanent --add-port=30000-31000/tcp

# 应用防火墙配置
sudo firewall-cmd --reload
```

测试 FTP 连接：

```bash
ftp serverIP
```

---

## 5. SSL/TLS 配置

安装 OpenSSL：

```bash
sudo yum install openssl -y
```

生成自签名证书：

```bash
sudo openssl req -x509 -nodes -days 3650 -newkey rsa:2048 \
-keyout /etc/vsftpd.pem -out /etc/vsftpd/vsftpd.pem
```

> **注意**：根据提示填写证书信息，可随意填写演示用值

编辑配置文件添加 SSL 设置：

```bash
sudo vi /etc/vsftpd/vsftpd.conf
```

添加以下配置：

```ini
# SSL 证书配置
rsa_cert_file=/etc/vsftpd/vsftpd.pem
rsa_private_key_file=/etc/vsftpd.pem

# 启用 SSL
ssl_enable=YES
allow_anon_ssl=NO
force_local_data_ssl=YES
force_local_logins_ssl=YES
ssl_tlsv1=YES
ssl_sslv2=NO
```

保存退出后重启服务：

```bash
sudo systemctl restart vsftpd
```

---

## 6. 完成安装

FTP 服务器已成功搭建！Windows 用户可使用 [FileZilla FTP 客户端](https://filezilla-project.org/) 进行测试。
