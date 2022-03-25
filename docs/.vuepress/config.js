const headConf = require('./config/headConf')
const pluginsConf = require('./config/pluginsConf')
const navConf = require('./config/navConfig')
// const { config } = require('vuepress-theme-hope')
// VuePress 的配置文件

module.exports = {
  title: '狐七的面试题库', // meta中的title
  description: '整理，永远在路上~', // meta中的description
  head: headConf,
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    author: '狐七',
    authorAvatar: '/assets/img/logo.jpg',
    lastUpdated: '更新时间', // string | boolean
    logo: '/assets/img/logo.jpg',
    nav: navConf,
    smoothScroll: true,
    subSidebar: 'auto',
    noFoundPageByTencent: false,
    keyPage: {
      keys: ['54062baaf27b01782a272fe202cdeac1'],
    },
    startYear: '2022'
    // sidebar: [
    //   '/',
    //   ['/javascript/es6/','JavaScript'],
    //   ['/page-b','hahaha']
    // ]
  },
  plugins: pluginsConf,
  configureWebpack: {
    resolve: {
      alias: {
        '@public': '/docs/.vuepress/public',
        '@components': '/docs/.vuepress/components',
      }
    }
  },
  markdown: {
    lineNumbers: true
  }
}