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

Ubuntu 22.04
````
puppeteer Chromium 启动失败
````

可尝试在Miao-Yunzai根目录下输入

````
apt-get install ca-certificates fonts-liberation libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils libxkbcommon0 -y
````
:::


::: details 字体乱码
````
apt-get install fonts-wqy-zenhei
````
:::
::::