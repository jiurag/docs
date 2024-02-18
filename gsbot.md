# <center>部署云崽·Ubuntu 22.04</center>

**环境**:nodejs ≥ 16、Redis

**QQ签名API**:[自建签名API](./qsignx) 或者使用公共签名API(自行查找)

## 安装环境

### 安装Node v16

```
cd ~
curl -sL https://deb.nodesource.com/setup_16.x | sudo bash - && apt -y install nodejs
```
**弹出如下提示等待60秒安装完成即可**
![1](https://image.hexokina.cn/file/47f8e80b91cd574626af1.png)

**查询版本**
```
root@bot:~# node -v
v16.20.2
```
### 安装redis

```
#使用apt直接安装
sudo apt install redis-server -y
```

**查询版本**
```
root@bot:~# redis-cli
127.0.0.1:6379> 
```

## 部署Miao-Yunzai
Miao-Yunzai是由[kokomi](https://gitee.com/yoimiya-kokomi/Miao-Yunzai)基于[原版Yunzai](https://github.com/Le-niao/Yunzai-Bot)做后续维护
::: details 安装git,已有略过
sudo apt install git -y
:::

````
#我一般喜欢在根目录(/root/)下安装,最好是先返回根目录
cd ~
#拉取喵崽本体
git clone --depth=1 https://gitee.com/yoimiya-kokomi/Miao-Yunzai.git
#进入喵崽本体根目录
cd Miao-Yunzai 
#拉取喵喵面板插件
git clone --depth=1 https://gitee.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/

````

**安装[pnpm](https://pnpm.io/zh/installation),已安装可跳过**

````
# 使用npmjs.org安装
npm install pnpm -g

# 指定国内源npmmirror.com安装
npm --registry=https://registry.npmmirror.com install pnpm -g
````

**安装依赖**

````
# 直接安装
pnpm install -P

# 如依赖安装缓慢或失败，可尝试更换国内npm源后再执行install命令
pnpm config set registry https://registry.npmmirror.com
pnpm install -P
````

**启动**

````
#直接启动
node app
# 后台启动
pnpm start
# 后台停止运行
pnpm stop
# 查看日志
pnpm run log
````

**喵崽已经部署完成了，第一次启动先node app再根据提示设置机器人账号等等操作**

:::: details 常见问题

::: details **puppeteer相关问题**

linux环境   
````
puppeteer Chromium 启动中...
Error: Failed to launch the browser process!
````

检查nodejs版本是否 ≥ V16

````
node -v
````

大于v14可能缺库，安装这些

````
yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 -y
````
:::


::: details 字体乱码
````
yum groupinstall fonts -y
````
:::
::::