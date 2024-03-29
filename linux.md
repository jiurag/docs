# <center>Linux相关</center>

## Ubuntu修改root登录

**1.SSH服务检查和安装过程**

```
# 查看是否安装了SSH服务
sudo ps -e | grep ssh
(如果显示为空则没安装，如果安装了省略后面步骤）
# 先更新下资源列表
sudo apt-get update
# 安装openssh-server
sudo apt-get install openssh-server
# 重新启动SSH服务
sudo systemctl restart sshd
# 查看ssh服务状态
sudo systemctl status sshd
```

**2.给root账户设置密码**

```
#切换到root
sudo -i
#设置root的密码
sudo passwd root
```

**3.修改sshd_config配置**

```
#编辑"sshd_config"文件
sudo vim /etc/ssh/sshd_config
```

按i或ins键进入编辑模式，找到#PermitRootLogin prohibit-password，默认是注释掉的。
![1](https://image.hexokina.cn/file/743a177d379154a37cf28.png)

修改#PermitRootLogin prohibit-password为PermitRootLogin yes

![2](https://image.hexokina.cn/file/15484dc220225c83189d3.png)

::: tip 修改后按esc，输入:wq保存并退出
:::
**4.重启ssh服务**

```
#重启ssh服务
sudo systemctl restart sshd
```

## puppeteer chromium启动失败

方法1
``` 
apt-get install ca-certificates fonts-liberation libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils libxkbcommon0 -y
```
方法2
``` 
pnpm uninstall puppeteer
pnpm install puppeteer@19.7.3 -w
node ./node_modules/puppeteer/install.js
```

## Ubuntu 22.04 关闭Ipv6

**临时修改**

```sh
sudo sysctl -w net.ipv6.conf.all.disable_ipv6=1
sudo sysctl -w net.ipv6.conf.default.disable_ipv6=1
sudo sysctl -w net.ipv6.conf.lo.disable_ipv6=1
```

**永久修改**

```sh
vim /etc/sysctl.conf
#将以下条目添加
net.ipv6.conf.all.disable_ipv6=1
net.ipv6.conf.default.disable_ipv6=1
net.ipv6.conf.lo.disable_ipv6=1
#应用设置
sudo sysctl -p
```

### 重启之后 IPv6 仍然被启用

**创建文件 /etc/rc.local 并加入以下内容**

```sh
#!/bin/bash
# /etc/rc.local
/etc/sysctl.d
/etc/init.d/procps restart
exit 0
#chmod 命令 来更改文件权限
sudo chmod 755 /etc/rc.local
```

## 安装1Panel

**安装部署**

::: code-group

``` [RedHat / CentOS]
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sh quick_start.sh
```

``` [ubuntu]
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sudo bash quick_start.sh
```

``` [Debian]
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && bash quick_start.sh
```

:::

::: tip 提醒
如果忘记安全入口,可使用以下命令重新获取
```
1pctl user-info
```
:::

## 安装MCSM

**安装脚本只支持 Ubuntu/Centos/Debian/Arch 等主流 x86_64/ARM 架构的操作系统。**
```
sudo wget -qO- https://gitee.com/mcsmanager/script/raw/master/setup_cn.sh | bash
```