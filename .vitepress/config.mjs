import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto-sidebar.mjs"

// https://vitepress.dev/reference/site-config
export default defineConfig({
//  base: "/docs/",
  title: "HekinaのBlog",
  description: "为心中所想，闯当前迷途",
  themeConfig: {
    outlineTitle: "目录",
    outline: [1,6],
    nav: [
      { text: '主页', link:'/'},
      { text: '文档', items:[
        {text:'幻兽帕鲁开服',link:'/pal'},
        {text:'幻兽帕鲁如何安装MOD',link:'/PalMod'},
        {text:'幻兽帕鲁实用性模组',link:'/Modlist'},
        {text:'喵崽-原神查询机器人',link:'/gsbot'},
        {text:'Rocky Linux 8搭建vsftpd服务',link:'/Rocky-ftp'}
      ] }
    ],

       sidebar: [
         {
           text: '文档',
           items: [
             {text:'幻兽帕鲁开服',link:'/pal'},
             {text:'幻兽帕鲁如何安装MOD',link:'/PalMod'},
             {text:'幻兽帕鲁实用性模组',link:'/Modlist'},
             {text:'Rocky Linux 8搭建vsftpd服务',link:'/Rocky-ftp'}
           ]
         }
       ],
    // sidebar: { 
    //   "/front-end/react": set_sidebar("/front-end/react") 
    // },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer:{
      copyright:"Copyright@ 2023 Jiurag"
    },
       // 设置搜索框的样式
       search: {
        provider: "local",
        options: {
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
              },
            },
          },
        },
      },
  }
})
