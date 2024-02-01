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
      { text: '主页', items:[
        {text:'首页',link:'/'},
        {text:'云崽环境部署',link:'/centos'},
        {text:'部署云崽',link:'/install'},
      ] },
      { text: '文档', link: '/centos' }
    ],

       sidebar: [
         {
           text: '文档',
           items: [
             { text: '云崽所需环境', link: '/centos' },
             { text: '部署云崽', link: '/install' }
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
      copyright:"Copyright@ 2023 Hexokina"
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
