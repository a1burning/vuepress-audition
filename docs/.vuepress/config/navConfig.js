const home = { text: 'Home', link: '/', icon: 'reco-home' }

const computer = { text: '计算机网络', link: '/src/computer/01.md' }

const frontend = { text: '前端基础', items: [
  { text: '前端基础', items: [
    { text: 'js', link: '/src/base/' }
  ]}
]}

const frame = { text: '前端工程化和框架', items: [
  { text: '前端工程化', items: [
    { text: 'webpack', link: '/src/advance/' }
  ]},
  { text: '前端框架', items: [
    { text: 'Vue', link: '/src/frame/vue/01.md' }
  ]}
]}

const programming = { text: '前端编程题', link: '/src/programming/01.md'}

const server = { text: '后端', items: [
  { text: 'php', link: '/src/server/php/01.md' },
  { text: 'Redis', link: '/src/server/redis/01.md' },
  { text: 'MySQL', link: '/src/server/mysql/01.md' },
  { text: 'Linux', link: '/src/server/linux/01.md' },
  { text: 'Nginx', link: '/src/server/nginx/01.md' },
]}

const algorithm = { text: '算法', link: '/src/algorithm/' }

const timeLine = { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }

module.exports = [
  home,
  computer,
  frontend,
  frame,
  programming,
  server,
  algorithm,
  timeLine,
]