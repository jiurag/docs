# 搭建环境·Centos 7

这里是部署云崽所需的环境(已部署请跳过)

[点我跳转:前往部署Miao-Yunzai](./install)

## 安装Nodejs

Nodejs版本需大于 ≥ 16

**yum安装设置Nodejs v16版本**

````
curl --silent --location https://rpm.nodesource.com/setup_16.x | sudo bash
````

**用yum安装Nodejs v16**

````
sudo yum -y install nodejs
````

**测试查看版本**

````
[root@localhost 1]# node -v
v16.13.2
[root@localhost 1]# npm -v
8.1.2
````

## 安装Redis

推荐使用Redis6
这里使用编译的方式安装

**安装gcc**

安装gcc

````
yum -y install gcc tcl
````

查看 gcc 版本是否在 5.3 以上，centos7.6 默认安装 4.8.5

````
gcc -v
````

升级到 gcc 9.3

::: tip 提示
如果不升级gcc，大概率会编译失败
:::

````
yum -y install centos-release-scl
yum -y install devtoolset-9-gcc devtoolset-9-gcc-c++ devtoolset-9-binutils
````

以下二选一，推荐临时启用

:::: details 临时启用gcc 9.3

````
scl enable devtoolset-9 bash
````

::::

::: details 永久使用gcc 9.3

````
echo -e "\nsource /opt/rh/devtoolset-9/enable" >>/etc/profile
````

:::

**使用wget拉取redis**

:::: details 安装wget(已安装略过)
````
sudo yum install wget -y
````
::::

进入/usr/local/，拉取redis文件，进行解压，进入redis目录,进行编译

````
#进入/usr/local/目录
cd /usr/local/
#拉取redis压缩文件
wget http://download.redis.io/releases/redis-6.0.9.tar.gz
#使用tar解压tar -zxvf redis-6.0.9.tar.gz
tar -zxvf redis-6.0.9.tar.gz
#解压后进入redis目录
cd redis-6.0.9
#编译
make
````

编译安装到/usr/local/redis

````
make PREFIX=/usr/local/redis install
````

启动redis(机器重启需重新走这个步骤，或者写一个脚本替代，或者设置开机自启)
````
#返回根目录
cd
#进入redis安装目录
cd /usr/local/redis/bin
#启动rdis
./redis-server --save 900 1 --save 300 10 --daemonize yes
#返回根目录
cd
````

## 安装git v2

::: tip 提示
不升级可能会导致云崽及插件更新失败
:::

添加 End Point Package Repository

````
sudo yum install https://packages.endpointdev.com/rhel/7/os/x86_64/endpoint-repo.x86_64.rpm
````

使用yum安装git v2

````
sudo yum install git
````
