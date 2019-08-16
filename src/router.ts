export default [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      redirect:'/blogs/1',
      children:[
        {
          path: '/blogs/:page',
          component: () => import('./views/Blogs.vue'),
        },
        {
          path:'/detail/:id',
          component:()=> import('./views/BlogDetail.vue')
        },
        {
          path:'/category',
          component:()=> import('./views/Category.vue')
        },
        {
          path:'/friends',
          component:()=> import('./views/Friend.vue')
        },
        {
          path:'/pictures/:page',
          component:()=> import('./views/Pictures.vue')
        },
        {
          path:'/about',
          component:()=> import('./views/About.vue')
        }
      ]
      
    },
    {
      name: '404',
      path: '/404',
      component: () => import('./views/404.vue')
    },
    {
      path: '*',    // 此处需特别注意至于最底部
      redirect: '/404'
    }
 
  ]
