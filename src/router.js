
import {PageName}  from './constant'



export default [
    {
      path: '/',
      name: PageName.Home,
      component: () => import('./views/Home'),
      redirect:'/blogs/1',
      children:[
        {
          path: '/blogs/:page',
          component: () => import('./views/Blogs'),
        },
        {
          path:'/detail/:id',
          component:()=> import('./views/BlogDetail')
        },
        {
          path:'/category',
          component:()=> import('./views/Category')
        },
        {
          path:'/friends',
          component:()=> import('./views/Friend')
        },
        {
          path:'/pictures/:page',
          component:()=> import('./views/Pictures')
        },
        {
          path:'/about',
          component:()=> import('./views/About')
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
