import main from '@/views/main'
// import Layout from '@/components/Layout'
import temp from '@/views/temp'
const routes = [
  {
    path: '/',
    component: main,
  },
  {
    path: '/css',
    name: 'css',
    component: main,
    meta: {
      title: 'CSS',
      breadcrumb: false, //是否使用面包屑
    },
    children: [
      {
        path: 'layout',
        name: 'layout',
        component: () => import(/* webpackChunkName: "css" */ '@/views/aceViewSample'),//'@/views/iframeViewSample'), //'@/views/htmlViewSample'), //'@/views/css/layout/index'), //'@/views/aceViewSample'),
        meta: {
          title: 'Layout 布局',
        },
      },
    ],
  },
  {
    path: '/menu',
    name: 'menu',
    component: main,
    meta: {
      title: 'menu',
    },
    children: [
      {
        path: 'sub',
        name: 'sub',
        component: temp,
        meta: {
          title: 'menu-sub',
        },
      },
    ],
  },
  {
    path: '*',
    component: () => import('@/views/404.vue'),
  },
]

export default routes
