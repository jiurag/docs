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