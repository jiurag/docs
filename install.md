# 部署云崽[Centos]

[点我跳转：部署所需环境](./centos) （TRSS脚本无需此步骤）

[点我跳转：自建签名API](./qsignx)

版本为8.9.78

正式开始搭建Yunzai_Bot

目前最常用的就是[kokomi](https://gitee.com/yoimiya-kokomi/Miao-Yunzai)维护的[Miao-Yunzai](https://gitee.com/yoimiya-kokomi/Miao-Yunzai)

还有就是比较适合懒人的[时雨◎星空](https://gitee.com/TimeRainStarSky/TRSS_Script)维护的一键部署脚本[TRSS](https://trss.me)

::: tip 安装提示
**问:Miao-Yunzai和TRSS-Yunzai有什么区别？**

答:大体上区别不大。如果只玩QQ群聊机器人，那么推荐Miao-Yunzai；如果追求其他的协议端，如频道、kook、米游社大别墅、微信等，更推荐TRSS-Yunzai，接口更足。
:::

> [!TIP]使用mirror代理github
>````
>https://mirror.ghproxy.com/
>````

如

``` ts{1-3}
#初始
git clone --depth=1 https://github.com/yoimiya-kokomi/Miao-Yunzai.git// [!code --]
#mirror代理
git clone --depth=1 https://mirror.ghproxy.com/https://github.com/yoimiya-kokomi/Miao-Yunzai.git// [!code ++]
```

## 安装Miao-Yunzai

这里只演示喵崽的安装教程

**拉取部署文件**

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

### 到这，喵崽已经部署完成了，第一次启动先node app再根据提示设置机器人账号等等操作，

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
