import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto-sidebar.mjs"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['style', {}, `
      :root {
        --vp-sidebar-width: 260px; /* 进一步调窄左侧文档栏 */
        --vp-layout-max-width: 98%;
      }
      
      /* 修复重叠问题 */
      .VPLayout {
        display: grid;
        grid-template-areas: 
          "nav nav nav"
          "sidebar content outline";
        grid-template-columns: var(--vp-sidebar-width) 1fr auto;
        grid-template-rows: auto 1fr;
        gap: 1rem; /* 添加间距防止重叠 */
      }
      
      .VPNav {
        grid-area: nav;
        z-index: 10; /* 确保顶栏在最上层 */
      }
      
      .VPSidebar {
        grid-area: sidebar;
        width: var(--vp-sidebar-width);
      }
      
      .VPContent {
        grid-area: content;
        padding: 0 1rem;
        min-width: 0; /* 防止内容溢出 */
      }
      
      .VPDocAside {
        grid-area: outline;
        width: 220px; /* 保持目录栏原始宽度 */
      }
      
      /* 确保内容区域自适应 */
      .VPDoc.has-aside .container {
        max-width: 100% !important;
      }
    `]
  ],
  
  title: "HekinaのBlog",
  description: "为心中所想，闯当前迷途",
  themeConfig: {
    outlineTitle: "目录",
    outline: [1,6],
    nav: [
      { text: '主页', link:'/'},
      { text: '滑雪', items:[
        {text:'双板滑雪简概',link:'/SkiTutorial'}
      ] },
      { text: '游戏', items:[
        {text:'幻兽帕鲁开服',link:'/pal'},
        {text:'幻兽帕鲁如何安装MOD',link:'/PalMod'},
        {text:'幻兽帕鲁实用性模组',link:'/Modlist'}
      ] },
      { text: '系统知识', items:[
        {text:'禁用Win系统更新<1>',link:'/WinUP1'},
        {text:'禁用Win系统更新<2>',link:'/WinUP2'},
        {text:'Linux基础知识',link:'/linux'},
        {text:'Rocky Linux 8搭建vsftpd服务',link:'/Rocky-ftp'}
      ]
      },
      { text: '显卡驱动', items:[
        {text:'NVIDIA 驱动程序收集列表',link:'/nv'}
      ]
      },
      { text: '姬气人', items:[
        {text:'喵崽-原神查询机器人',link:'/gsbot'}
      ] }
    ],

    sidebar: [
      {
        text: '推荐',
        items: [
          {text:'禁用Win系统更新<1>',link:'/WinUP1'},
          {text:'禁用Win系统更新<2>',link:'/WinUP2'},
          {text:'幻兽帕鲁开服',link:'/pal'},
          {text:'幻兽帕鲁如何安装MOD',link:'/PalMod'},
          {text:'幻兽帕鲁实用性模组',link:'/Modlist'},
          {text:'喵崽-原神查询机器人',link:'/gsbot'},
          {text:'Rocky Linux 8搭建vsftpd服务',link:'/Rocky-ftp'}
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer:{
      copyright:"Copyright@ 2023 Jiurag"
    },
    // 修复搜索配置
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭" // 添加缺失的关闭按钮文本
                }
              }
            }
          }
        }
      }
    },
  }
})
