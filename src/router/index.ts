import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: 'Mocheng.shuai-我的摄影作品集',
      isHomePage: true,
    },
    component: () => import('@/views/index/index.vue'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    meta: {
      title: 'contacts',
    },
    component: () => import('@/views/contacts/index.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'about',
    },
    component: () => import('@/views/about/index.vue'),
  },
  {
    path: '/blogsingle',
    name: 'blogsingle',
    meta: {
      title: 'blog-single',
    },
    component: () => import('@/views/blogSingle/index.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    meta: {
      title: 'blog',
    },
    component: () => import('@/views/blog/index.vue'),
  },
  {
    path: '/portfoliosingle',
    name: 'portfoliosingle',
    meta: {
      title: 'portfolio-single',
    },
    component: () => import('@/views/portfolioSingle/index.vue'),
  },
  {
    path: '/401',
    name: '401',
    meta: {
      title: '需要登录',
    },
    component: () => import('@/views/exception/401.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '非常抱歉,页面走丢了',
    },
    component: () => import('@/views/exception/404.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    meta: {},
    redirect: '/404',
  },
]

const router: Router = createRouter({
  // 新的vue-router4 使用 history路由模式 和 base前缀
  history: createWebHistory(import.meta.env.VITE_BASE),
  routes,
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 页签标题
  document.title = (to.meta.title as string) || import.meta.env.VITE_APP_TITLE
  if (!NProgress.isStarted()) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
