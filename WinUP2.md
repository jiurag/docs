# <center>🚫 Windows操作系统小知识<2></center>



---

## 🛠️ 系统更新禁用指南

> [!WARNING] 重要提示
> 禁用系统更新可能导致安全漏洞和功能缺失。
> 
> 仅建议在受控环境或特殊需求下使用。
> 
> 使用此方法后，微软应用商店可正常联网。

### 🔧 禁用系统更新

* 使用Win+R输入```regedit```按回车```Enter```打开注册表编辑器
![](https://image.hexokina.cn/file/AgACAgUAAyEGAATGRzL8AAMLaU4mtmAweAE3AxbW7E0L1VLqb1AAAggMaxssvXBW6QVs2PP_aOIBAAMCAAN4AAM2BA.png)
* 定位到```HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings```的目录
* 或者直接输入```计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings```回车
```ps
计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings
```
![](https://image.hexokina.cn/file/AgACAgUAAyEGAATGRzL8AAMOaU4ohpU--ERb2TbmPvoRG5kp1jQAAg0MaxssvXBWslyyB5xpegIBAAMCAAN3AAM2BA.png)

* 右键 ```Setting``` 这个项目然后新建，创建一个 ```DWORD（32 位）```值，将其命名为 ```FlightSettingsMaxPauseDays```
```ps
FlightSettingsMaxPauseDays
```
![](https://image.hexokina.cn/file/AgACAgUAAyEGAATGRzL8AAMPaU4pqs7LGJHxxP2ghbB-lk-ddPsAAg8MaxssvXBWAAHEQb6pfC06AQADAgADdwADNgQ.png)

* 双击这个值，将基数改为十进制，然后输入需要暂停更新的天数即可,例如输入```100000```就是100000天
![](https://image.hexokina.cn/file/AgACAgUAAyEGAATGRzL8AAMQaU4qS6_sIXGIXzFfEsxKZobrgXgAAhAMaxssvXBW0Vhbd0z1nxwBAAMCAAN3AAM2BA.png)

* 打开```设置``` > ```Windoaws更新``` > ```暂停更新``` 点开列表会因为暂停天数过多会卡顿，耐心等待列表加载出来，鼠标长按滑块滑到底，选择最后一个选项
![](https://image.hexokina.cn/file/AgACAgUAAyEGAATGRzL8AAMTaU4s0FCWRH9c7R-YSHAPbF2g1UYAAhcMaxssvXBWi1eQUqgbl3kBAAMCAAN3AAM2BA.png)

* 最终效果如下
![](https://image.hexokina.cn/file/AgACAgUAAyEGAATGRzL8AAMUaU4tMr7OeOsnwjR_v3Z5myXQ-n4AAhgMaxssvXBWedZCm35eKt0BAAMCAAN3AAM2BA.png)