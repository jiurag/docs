# <center>Miao-Yunzai对接gsuid_core</center>

<center>服务器系统：Ubuntu 22.04</center>

### 配置所需环境

**Python ≥ 3.10（最好是3.10）、poetry ≥ 1.4.0或者pdm（建议使用pdm）**
::: tip 提示
poetry和pdm二选一即可
:::

#### 安装Python 3.10

```
#安装PPA需要的软件源
sudo apt install software-properties-common -y
#添加名为deadsnake的PPA源
sudo add-apt-repository ppa:deadsnakes/ppa
#安装python3.10
sudo apt install python3.10
```

#### 安装pdm
::: tip 提示
若想使用**poetry**需自行安装配置，本次演示使用**pdm**。
:::

```
#安装pip
sudo apt install python3-pip -y
#更新pip
pip install -U pip
#使用pip安装pdm
pip install pdm
#初始化pdm(若无其他需求一路回车即可)
pdm init
```

## 开始安装Gsuid_core

**拉取本体文件**

```
cd ~
git clone https://github.com/Genshin-bots/gsuid_core.git --depth=1 --single-branch
```

**安装依赖**
::: code-group

``` [pdm]
#进入suid_core目录
cd gsuid_core
#安装依赖
pdm install
```

``` [poetry]
#进入suid_core目录
cd gsuid_core
#安装依赖
poetry install
```

:::


**安装所需插件（可选）**

```
cd gsuid_core
cd plugins
# 安装v4 GenshinUID
git clone -b v4 https://github.com/KimigaiiWuyi/GenshinUID.git --depth=1 --single-branch
```

## 启动Gsuid_core

::: code-group

``` [pdm]
#进入suid_core目录
cd /root/gsuid_core/gsuid_core
#启动
pdm run core
```

``` [poetry]
#进入suid_core目录
cd /root/gsuid_core/gsuid_core
#启动
poetry run core
```
:::

::::: details 使用Screen保持后台运行

安装Screen

````
apt install screen -y
````

设置后台运行

````
#创建Screen窗口，比如gs
screen -S gs
#进入suid_core目录
cd /root/gsuid_core/gsuid_core
#启动
pdm run core

````
Ctrl+A+D将窗口切换到后台运行

**还原窗口**

````
screen -r gs
或
screen -ls
screen -r id
````
:::::

## 配置

::: warning 警告
config.json文件位于gsuid_core/gsuid_core/config.json

core_config.json文件位于gsuid_core/data/core_config.json

本文关注的是config.json，而core_config.json请尽量通过网页控制台去调整！

如想关注core_config.json，请检查GsCore 选项

首次安装GsCore时，两个文件均需要启动Core来进行生成
:::

::: tip 提醒
下面为详细配置，作为初次安装的萌新，只需要注意修改masters项为你自己的QQ号（或其他平台号码）即可，其他配置可以完全不用动
:::

```
{
  "HOST": "localhost", // 本机Host, 一般无需修改
  "PORT": "8765", // GsCore运行端口, 一般无需修改
  "masters": [
    "QQ账号" // master权限账号, 类型为List[string], 对应权限pm=0
  ],
  "superusers": [], // superuser权限账号, 类型为List[string], 对应权限pm=1
  "misfire_grace_time": 90, // 定时任务超时时间, 一般无需修改
  "log": {
    "level": "DEBUG" // 日志等级，一般为`INFO`且无需修改, 开发者和反馈Bug的时候开到`DEBUG`
  },
  "command_start": [
    "*" // 命令头, 类型为List[string], 默认为[], 填入此项后则所有命令必须带命令头触发
  ],
  "sv": { // 插件注册的全部服务列表, 均可通过网页控制台修改
    "Core管理": {
      "priority": 5, // 某个服务的优先级
      "enabled": true, // 某个服务是否启用
      "pm": 0, // 某个服务要求的权限等级
      "black_list": [], // 某个服务的黑名单, 类型为List[string]
      "area": "ALL", // 某个服务的响应范围, "ALL", "GROUP", "DIRECT"
      "white_list": [] // 某个服务的白名单, 类型为List[string]
    }
  }
}
```

## 云崽对接

[Miao-Yunzai](/gsbot.md)使用[ws-plugin](https://gitee.com/xiaoye12123/ws-plugin)进行对接Gsuid_core
::: tip 提醒
一定要使用英文半角的","
:::

![1](https://image.hexokina.cn/file/f95f06fe7615ec13202b7.png)

**可以在Miao-Yunzai后台看到连接成功**

![2](https://image.hexokina.cn/file/e45f56a7bda88f37fabae.png)


## 安装其他插件