# Qsign 

部署属于自己的签名API

## 安装jdk环境

::: code-group

``` [centos]
#检查yum中是否有jdk1.8的安装包
yum list java-1.8*
#安装
yum install java-1.8.0-openjdk* -y
```

``` [Ubuntu]
#任选一种版本安装
#安装jdk8
apt install openjdk-8-jdk
#安装jdk11
apt install openjdk-11-jdk
#安装jdk17
apt install openjdk-17-jdk
```

:::

**查询java版本**

```
java -version
```

## 拉取qsign文件

:::: details 安装git,已安装略过

::: code-group

``` [centos]
#添加 End Point Package Repository
sudo yum install https://packages.endpointdev.com/rhel/7/os/x86_64/endpoint-repo.x86_64.rpm -y
#安装Git
sudo yum install git -y
#查询版本
git -v
#退出
quit
```

``` [Ubuntu]
#安装
apt install git -y
```

:::

::::

```
#Github
git clone https://github.com/jiurag/qsignx

#Github拉取失败使用代理拉取

#mirror代理
git clone https://mirror.ghproxy.com/https://github.com/jiurag/qsignx
```

## 启动Qsign

```
cd qsignx && bash auto.sh
```

## 使用API

**本地**

```
http://127.0.0.1:8978?key=qsign
```

**公网**

````
http://公网IP:8978?key=qsign
````
::: tip 提示

正常运行状态下

如果在浏览器用无法访问http://IP:8978

请放行8978端口

:::

::::: details 使用Screen保持后台运行

**安装Screen**

::: code-group

``` [centos]
yum install screen -y
```

``` [Ubuntu]
apt install screen -y
```

:::

设置后台运行

````
#创建Screen窗口，比如qsign
screen -S qsign
cd ~
#运行启动脚本
cd qsignx && bash auto.sh

````
Ctrl+A+D将窗口切换到后台运行

**还原窗口**

````
screen -r qsign
或
screen -ls
screen -r id
````
:::::