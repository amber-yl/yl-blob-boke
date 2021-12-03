export default [
  { path: '/', redirect: '/login' },
  { path: '/login', component: '@/Login' },
  { path: '/home', component: '@/pages/Home' },
  { path: '/home', component: '@/pages/Article' },
  { path: '/home', component: '@/pages/ArticleList' },
]