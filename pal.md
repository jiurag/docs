# 幻兽帕鲁开服教程·Ubuntu篇

教程演示版本为Ubuntu 22.04.3 TLS

## 创建用户

**创建并切换至Steam用户**

````
# 创建steam用户
sudo useradd -m steam
# 增加steam用户sudo权限
sudo usermod -aG sudo steam
# 修改steam用户密码
sudo passwd steam
# 切换至steam用户
sudo -u steam -s
# 进入steam用户家目录
cd /home/steam
````

## 安装SteamCMD

````
# 启用 Multiverse 存储库
sudo add-apt-repository multiverse
# 增加i386架构支持
sudo dpkg --add-architecture i386
# 更新软件包缓存
sudo apt update
# 安装steamcmd
sudo apt install steamcmd
````

## 安装Manually

````
# 安装lib32gcc-s1库
sudo apt-get install lib32gcc-s1
# 创建steam目录
mkdir ~/Steam
# 进入steam目录
cd ~/Steam
# 安装Manually
curl -sqL "https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz" | tar zxvf -
````

## 下载服务器

````
# 进入steam目录
cd ~/Steam
# 运行steamcmd
./steamcmd.sh
# 匿名模式登陆：
login anonymous
#  显示OK后就登陆成功了）
# 下载服务器
app_update 2394010
# 还需要下载一个服务器依赖的包
app_update 1007
# 下载可能有点慢，多等等
# 退出SteamCMD
quit
````

## 建立库连接

````
# 新建.steam文件夹
mkdir ~/.steam
# 新建sdk64文件夹
mkdir ~/.steam/sdk64
# 复制动态库
cp ~/Steam/steamapps/common/Steamworks\ SDK\ Redist/linux64/steamclient.so ~/.steam/sdk64/
````

## 修改配置文件

````
# 进入PalServer目录
cd /home/steam/Steam/steamapps/common/PalServer
# 启动PalServer
./PalServer.sh
# 使用ctrl+C退出
# 复制默认配置文件至配置文件目录
cp DefaultPalWorldSettings.ini Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
# 修改配置文件
vim Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
````

红框内为重要配置选项
![ecVGJ9NmXO.png](https://picshack.net/ib/ecVGJ9NmXO.png)

一般需要调整的设置有以下几项:

````json
ServerPlayerMaxNum=32  #服务器玩家数量上限
ServerName="Default Palworld Server"  #服务器名称
ServerDescription=""  #服务器描述
AdminPassword=""  #服务器管理员密码
ServerPassword=""  #服务器密码
PublicPort=8211  #服务器端口(udp协议)
PublicIP=""  #服务器IP(一般填127.0.0.1即可)
````
::: tip 提示
有防火墙记得在防火墙开放你设置的端口，协议为**udp**

直连地址为 **服务器公网IP:端口**
:::


::: details 配置文件中英文对照表

[难度] Difficulty=None

[白天时间流速] DayTimeSpeedRate=1.000000

[夜晚时间流速] NightTimeSpeedRate=1.000000

[经验值获取速度] ExpRate=2.000000

[生物捕捉率] PalCaptureRate=1.000000

[生物生成数量速度] PalSpawnNumRate=1.000000

[生物攻击伤害倍率] PalDamageRateAttack=1.000000

[生物防御伤害倍率] PalDamageRateDefense=1.000000

[玩家攻击伤害倍率] PlayerDamageRateAttack=1.000000

[玩家防御伤害倍率] PlayerDamageRateDefense=1.000000

[玩家饥饿减少速度] PlayerStomachDecreaceRate=1.000000

[玩家耐力减少速度] PlayerStaminaDecreaceRate=0.300000

[玩家自动回血速度] PlayerAutoHPRegeneRate=1.000000

[玩家睡眠时自动回血速度] PlayerAutoHpRegeneRateInSleep=1.000000

[伙伴饥饿减少速度] PalStomachDecreaceRate=1.000000

[伙伴耐力减少速度] PalStaminaDecreaceRate=0.500000

[伙伴自动回血速度] PalAutoHPRegeneRate=1.000000

[伙伴睡眠时自动回血速度] PalAutoHpRegeneRateInSleep=1.000000

[建筑物受损倍率] BuildObjectDamageRate=1.000000

[建筑物劣化受损倍率] BuildObjectDeteriorationDamageRate=1.000000

[收集物掉落倍率] CollectionDropRate=1.000000

[收集物体生命值倍率] CollectionObjectHpRate=1.000000

[收集物体重新生成速度倍率] CollectionObjectRespawnSpeedRate=1.000000

[敌人掉落物品倍率] EnemyDropItemRate=1.000000

[死亡惩罚] DeathPenalty=None

[启用玩家对玩家伤害] bEnablePlayerToPlayerDamage=False

[启用友方伤害] bEnableFriendlyFire=False

[据点入侵] bEnableInvaderEnemy=True

[激活UNKO] bActiveUNKO=False

[启用手柄瞄准辅助] bEnableAimAssistPad=True

[启用键盘瞄准辅助] bEnableAimAssistKeyboard=False

[掉落物最大数量] DropItemMaxNum=3000

[UNKO掉落物最大数量] DropItemMaxNum_UNKO=100

[基地最大数量] BaseCampMaxNum=128

[基地工人最大数量] BaseCampWorkerMaxNum=15

[掉落物存活最大时间] DropItemAliveMaxHours=1.000000

[自动重置公会无在线玩家] bAutoResetGuildNoOnlinePlayers=False

[无在线玩家自动重置公会时间] AutoResetGuildTimeNoOnlinePlayers=6.000000

[公会玩家最大数量] GuildPlayerMaxNum=20

[生物蛋默认孵化时间] PalEggDefaultHatchingTime=2.000000

[工作速度倍率] WorkSpeedRate=1.000000

[多人游戏] bIsMultiplay=False

[PvP模式] bIsPvP=False

[可拾取其他公会死亡惩罚掉落物] bCanPickupOtherGuildDeathPenaltyDrop=False

[启用非登录惩罚] bEnableNonLoginPenalty=True

[启用快速旅行] bEnableFastTravel=True

[启用地图选择初始位置] bIsStartLocationSelectByMap=True

[注销后存在玩家] bExistPlayerAfterLogout=True

[启用防御其他公会玩家] bEnableDefenseOtherGuildPlayer=True

[合作模式玩家最大数量] CoopPlayerMaxNum=4

[服务器玩家最大数量] ServerPlayerMaxNum=16

[服务器名称] ServerName=""

[服务器描述] ServerDescription=""

[管理员密码] AdminPassword=""

[服务器密码] ServerPassword=""

[服务器端口] PublicPort=8211

[服务器IP] PublicIP=""

[RCON启用] RCONEnabled=False

[RCON端口] RCONPort=25575

[地区] Region=""

[使用身份验证] bUseAuth=True

[封禁列表URL] BanListURL="https://api.palworldgame.com/api/banlist.txt"
:::

## 设置后台运行

:::: details 设置开机自启

::: details 提示无vim命令  自行安装vim

````
apt install vim -y
````
:::

编辑自启文件

````
sudo vim /etc/systemd/system/palserver.service

````

填入以下

````
[Unit]
Description=PalServer
After=network.target

[Service]
User=steam
ExecStart=/usr/bin/sudo -u steam /home/steam/Steam/steamapps/common/PalServer
Restart=always

[Install]
WantedBy=default.target

````

设置自动启动

````
# 设置开机自启
sudo systemctl enable palserver
# 启动
sudo systemctl start palserver
# 查看状态
sudo systemctl status palserver
````
::::

::::: details 使用Screen保持后台运行

安装Screen

````
apt install screen -y
````

设置后台运行

````
#创建Screen窗口，比如pal
screen -S pal
cd /home/steam/Steam/steamapps/common/PalServer
运行启动脚本
bash PalServer.sh

````
Ctrl+A+D将窗口切换到后台运行

````
#还原窗口
screen -r pal
或
screen -ls
screen -r id
````
:::::