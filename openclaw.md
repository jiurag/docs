# OpenClaw 安装与配置指南

## 🖥️ 硬件要求

- **设备**: 可使用任意X86 电脑
- **测试设备**: 零刻SER10 MAX 迷你主机 [查看详情](#)

## 🔗 相关资源

### 核心项目
- **OpenClaw 官网**: https://openclaw.ai
- **OpenClaw Skills Collection (GitHub)**: https://github.com/VoltAgent/awesome-openclaw-skills
- **OpenClaw-Wechat (GitHub)**: https://github.com/freestylefly/openclaw-wechat
- **OpenCode 官网**: https://opencode.ai

### 系统与工具
- **MINIMAX 官网**: https://www.minimaxi.com
- **Ubuntu 官网**: https://cn.ubuntu.com
- **BalenaEtcher 官网**: https://etcher.balena.io
- **MobaXterm 官网**: https://mobaxterm.mobatek.net

---

## 📦 Linux 系统安装命令

### 1. 基础环境配置

```bash
# 安装 SSH 服务
sudo apt install openssh-server

# 切换至 root用户
sudo -i

# 安装 Curl
apt install curl
```

### 2. 系统优化

```bash
# 一键换源
bash <(curl -sSL https://linuxmirrors.cn/main.sh)
```

### 3. 安装OpenCode

```bash
# 一键安装OpenCode（OpenCode可以分别为两种用户安装来获得不同的执行权限）
curl -fsSL https://opencode.ai/install | bash

# 将 OpenCode添加至Root用户运行环境
source /root/.bashrc

# 【扩展阅读】将OpenCode添加至普通用户运行环境
source /home/你的用户名/.bashrc
```

### 4. 安装OpenClaw

```bash
# 一键安装OpenClaw
curl -fsSL https://openclaw.ai/install.sh | bash
```

---

## 🔧 OpenCode 配置指令

### 修复Gateway崩溃问题

在 OpenCode中输入：

```
我安装了openclaw，但现在网页控制台无法打开，检查下是不是 gateway 崩了，如果崩了，帮我修复，并将 gateway 服务设置为开机自启，防止它每次启动时都崩溃
```

### 重设硬件 Token

在 OpenCode中输入（`newtoken12345678` 可替换为任意英文数字组合）：

```
将 openclaw 控制台的硬件 token 替换为以下这段：newtoken12345678
```

### 启用局域网访问

在 OpenCode中输入：

```
我安装了openclaw，现在配置 openclaw.json 文件，让其控制台可以被局域网中的其它设备访问，允许局域网访问命令（openclaw config set gateway.bind lan），允许 HTTP 访问命令（openclaw config set gateway.controlUi.allowInsecureAuth true）
```

---

## 🎯 Skills 安装与管理

### 安装 Skill

```bash
# 安装 Skills
npx clawhub@latest install <skill 的名字>
```

### 示例：安装文件处理和联网搜索功能

在 OpenCode中输入：

```
我要 openclaw 能够处理我的本地文件，还有进行联网搜索，帮我安装能实现这两个功能的 skills
```

---

## 🌐 浏览器插件安装

### 安装 Chrome 浏览器及插件

在 OpenCode中输入：

```
帮我安装 chrome 浏览器（不是 Chromium），再下载 openclaw 的浏览器插件，放到桌面，我手动安装
```

---

## 💬 OpenClawWeChat 插件配置

### 1. 安装插件

```bash
# 安装OpenClawWeChat 插件
openclaw plugins install openclawwechat
```

### 2. 配置插件

```bash
# 进入 OpenClawWeChat 插件目录
cd ~/.openclaw/extensions/openclawwechat

# 运行配置脚本
npm run config-init

# 重启 Gateway
openclaw gateway restart
```

---

## ⚙️ 其他常用命令

```bash
# 【扩展阅读】在终端运行 OpenClaw 配置菜单，可进行模型 API 等配置
openclaw config

# 【扩展阅读】手动启动 OpenClaw 控制台
openclaw dashboard
```

---

```
apt-get install -f
dpkg -i *.deb
```

## 📝 备注

- 所有命令请在确保有适当权限的情况下执行
- 建议在生产环境使用前先进行测试
- 保持系统和依赖的最新版本以获得最佳体验