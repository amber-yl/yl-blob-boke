  export default [
  { path: '/', redirect: '/login' },
  { path: '/login', component: '@/Login' },
  {
    path: '/blog',
    component: '@/layouts',
    routes: [
      { 
        path: '/blog/home', 
        component: '@/pages/Home' 
      },
      { 
        path: '/blog/article', 
        component: '@/pages/Article' 
      },
      { 
        path: '/blog/articleList', 
        component: '@/pages/ArticleList' 
      },
      {
        path: '/blog/userinfo',
        component: '@/pages/UserInfo',
      },
    ]
  }
]