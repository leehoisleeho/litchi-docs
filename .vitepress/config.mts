import { defineConfig } from "vitepress";

export default defineConfig({
  ignoreDeadLinks: true,
  title: "litchi",
  description: "前后端分离的后台管理系统",
  head: [
    ["link", { rel: "icon", href: "/images/logo.png" }], // 如果使用的是 .ico 文件，则 href 为 '/favicon.ico'
    ["link", { rel: "stylesheet", href: "/style.css" }], // 引用自定义 CSS 文件
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    ],
  ],
  themeConfig: {
    footer: {
      message: "基于 MIT 许可发布",
      copyright: "版权所有 © 2024-present leeho",
    },
    logo: "/images/logo.png",
    nav: [
      { text: "博客", link: "https://leeho.me" },
      { text: "微博", link: "https://weibo.com/u/7845208406" },
    ],
    sidebar: [
      {
        text: "简介",
        items: [
          { text: "什么是litchi?", link: "/docs/what-litchi" },
          { text: "快速开始", link: "/docs/quick-start" },
        ],
      },
      {
        text: "开始使用",
        items: [
          { text: "新建一个页面", link: "/docs/create-page" },
          { text: "系统的初始化", link: "/docs/init-system" },
          { text: "简单的CURD", link: "/docs/curd" },
          { text: "初始的API接口", link: "/docs/api" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/leehoisleeho" },
      { icon: "twitter", link: "https://x.com/leehovip" },
    ],
  },
});
