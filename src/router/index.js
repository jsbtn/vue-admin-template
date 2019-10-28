import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Layout from '@/components/layout'
// 同步路由
export const constantRoutes = []
// 异步路由
export const asyncRoutes = [
  { 
    path: '/',
    component: Layout,
    redirect: 'webSurvey',
    meta: { title: 'statistics', icon: 'statistics'},
    children: [
      {
        path: 'webSurvey',
        component: () => import('@/views/statistics/index'),
        name: 'webSurvey',
        meta: { title: 'webSurvey', icon: 'webSurvey'}
      },
      {
        path: 'channelStatics',
        component: () => import('@/views/statistics/channelStatics'),
        name: 'channelStatics',
        meta: { title: 'channelStatics', icon: 'channelStatics'}
      },
      {
        path: 'webStatics',
        component: () => import('@/views/statistics/statics'),
        name: 'webStatics',
        meta: { title: 'webStatics', icon: 'webStatics'}
      },
      {
        path: 'productStatics',
        component: () => import('@/views/statistics/statics'),
        name: 'productStatics',
        meta: { title: 'productStatics', icon: 'productStatics'}
      },
      {
        path: 'articleStatics',
        component: () => import('@/views/statistics/statics'),
        name: 'articleStatics',
        meta: { title: 'articleStatics', icon: 'articleStatics'}
      },
      {
        path: 'detail',
        component: () => import('@/views/statistics/index'),
        name: 'detail',
        meta: { title: 'detail', icon: 'detail',hidden:true}
      },
    ] 
  },
  {
    path: '/product',
    component: Layout,
    redirect: '/product/productAdd',
    meta: { title: 'product', icon: 'product'},
    children: [
      {
        path: 'productAdd',
        component: () => import('@/views/product/productAdd'),
        name: 'productAdd',
        meta: { title: 'productAdd'}
      },
      {
        path: 'productManage',
        component: () => import('@/views/product/productManage'),
        name: 'productManage',
        meta: { title: 'productManage'}
      },
      {
        path: 'evaluateManage-1',
        component: () => import('@/views/article/evaluateManage'),
        name: 'evaluateManage-1',
        meta: { title: 'evaluateManage'}
      },
      {
        path: 'productClassify',
        component: () => import('@/views/product/productClassify'),
        name: 'productClassify',
        meta: { title: 'productClassify'}
      },
      {
        path: 'productSetting',
        component: () => import('@/views/product/productSetting'),
        name: 'productSetting',
        meta: { title: 'productSetting'}
      },
    ]
  },
  {
    path: '/article',
    component: Layout,
    name:"article",
    redirect: '/article/articleAdd',
    meta: { title: 'article', icon: 'article'},
    children: [
      {
        path: 'articleAdd',
        component: () => import('@/views/article/articleAdd'),
        name: 'articleAdd',
        meta: { title: 'articleAdd', icon: 'articleAdd'}
      },
      {
        path: 'articleManage',
        component: () => import('@/views/article/articleManage'),
        name: 'articleManage',
        meta: { title: 'articleManage', icon: 'articleManage'}
      },
      {
        path: 'evaluateManage-2',
        component: () => import('@/views/article/evaluateManage'),
        name: 'evaluateManage-2',
        meta: { title: 'evaluateManage'}
      },
      {
        path: 'articleClassify',
        component: () => import('@/views/product/productClassify'),
        name: 'articleClassify',
        meta: { title: 'articleClassify'}
      },
      {
        path: 'articleTags',
        component: () => import('@/views/article/articleTags'),
        name: 'articleTags',
        meta: { title: 'articleTags', icon: 'articleTags'}
      },
      {
        path: 'articleSetting',
        component: () => import('@/views/article/articleSetting'),
        name: 'articleSetting',
        meta: { title: 'articleSetting', icon: 'articleSetting'}
      },
    ]
  },
  {
    path: '/vip',
    component: Layout,
    name:"vip",
    redirect: '/vip/vipAdd',
    meta: { title: 'vip', icon: 'vip'},
    children: [
      {
        path: 'vipAdd',
        component: () => import('@/views/vip/vipAdd'),
        name: 'vipAdd',
        meta: { title: 'vipAdd', icon: 'vipAdd'}
      },
      {
        path: 'vipManage',
        component: () => import('@/views/vip/vipManage'),
        name: 'vipManage',
        meta: { title: 'vipManage', icon: 'vipManage'}
      },
      {
        path: 'vipExamine',
        component: () => import('@/views/vip/vipExamine'),
        name: 'vipExamine',
        meta: { title: 'vipExamine', icon: 'vipExamine'}
      },
      {
        path: 'vipGrade',
        component: () => import('@/views/vip/vipGrade'),
        name: 'vipGrade',
        meta: { title: 'vipGrade', icon: 'vipGrade'}
      },
      {
        path: 'vipGroup',
        component: () => import('@/views/vip/vipGroup'),
        name: 'vipGroup',
        meta: { title: 'vipGroup', icon: 'vipGroup'}
      },
      {
        path: 'vipSetting',
        component: () => import('@/views/vip/vipSetting'),
        name: 'vipSetting',
        meta: { title: 'vipSetting', icon: 'vipSetting'}
      },
    ]
  },
  {
    path: '/setting',
    component: Layout,
    name:"setting",
    redirect: '/setting/domain',
    meta: { title: 'setting', icon: 'setting'},
    children: [
      {
        path: 'domain',
        component: () => import('@/views/setting/domain'),
        name: 'domain',
        meta: { title: 'domain', icon: 'domain'}
      },
      {
        path: 'SMSplatform',
        component: () => import('@/views/setting/SMSplatform'),
        name: 'SMSplatform',
        meta: { title: 'SMSplatform', icon: 'SMSplatform'}
      },
      {
        path: 'LangVersion',
        component: () => import('@/views/setting/LangVersion'),
        name: 'LangVersion',
        meta: { title: 'LangVersion', icon: 'LangVersion'}
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
router.addRoutes(asyncRoutes) 
export default router
