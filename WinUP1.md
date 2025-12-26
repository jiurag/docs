# <center>🚫 Windows操作系统小知识<1></center>



---

## 🛠️ 系统更新禁用指南

> [!WARNING] 重要提示
> 禁用系统更新可能导致安全漏洞和功能缺失。
> 
> 仅建议在受控环境或特殊需求下使用。
> 
> 使用此方法后，微软应用商店也将无法联网。若介意，请勿使用此方法。

### 🔧 禁用系统更新

* 按住Win+R输入 ``` gpedit.msc ```打开策略组
* ```计算机配置``` &rArr; ```Windows组件``` &rArr; ```Windows更新``` &rArr; ```管理 Windows ServerUpdate Service 提供的更新```
* ```配置 Intranet Microsoft 更新服务位置```

![](https://image.hexokina.cn/file/AgACAgUAAyEGAATGRzL8AAMFaTXQQk0V1gmJaReUc86v9I5ofHUAAmoLaxuz5rBVhAmtAAFbwMHGAQADAgADdwADNgQ.png)

* 按照以下配置：
* ```已启用``` &rArr; ```设置检测更新的 Intranet 更新服务``` 和 ```设置 Intranet 统计服务器``` 都配置为: ```127.0.0.1 ``` &rArr; ```应用```

![](https://image.hexokina.cn/file/AgACAgUAAyEGAATGRzL8AAMHaTXTTJJMQL_KM1qrAturLVTvbo0AAnILaxuz5rBVWr0tuSqFjlMBAAMCAAN3AAM2BA.png)

* 如此，你就会得到以下效果：
  
  ![](https://image.hexokina.cn/file/AgACAgUAAyEGAATGRzL8AAMIaTXUVP8O6IKlB7s9xpfzMD30vwcAAnMLaxuz5rBVpZwv6L0D-F8BAAMCAAN3AAM2BA.png)

### 🔧 恢复系统更新
* 如需恢复正常，更改为 ```未配置```并应用即可正常接收更新


  ![](https://image.hexokina.cn/file/AgACAgUAAyEGAATGRzL8AAMJaTXVOFLKWd2NRs5BoDXhFUy6mq0AAnQLaxuz5rBV7zRESiL_0hcBAAMCAAN3AAM2BA.png)