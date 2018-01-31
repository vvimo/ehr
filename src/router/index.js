import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import layout from '../views/layouts'
import mlayout from '../views/layout/mobile'

/* 判断是否是PC */
import { IsPC } from '@/utils/min'

Vue.use(Router)

const _import = require('./_import_' + process.env.NODE_ENV)
const pcMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '/',
    component: layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  }
]

const mobileMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '/',
    component: mlayout
  }
]

export const constantRouterMap = IsPC() ? pcMap : mobileMap

export const asyncRouterMap = [
  {
    path: '/rlzy',
    component: layout,
    redirect: '/rlzy/jlgl',
    name: 'rlzy-demo',
    meta: {
      title: 'rlzy',
      icon: 'component'
    }, // you can set roles in root nav
    children: [
      { path: 'jlgl', component: _import('rlzy/jlgl/index'), name: 'jlgl-demo', meta: { title: 'jlgl' } },
      { path: 'zpxq', component: _import('rlzy/zpxq/index'), name: 'zpxq-demo', meta: { title: 'zpxq' } }
    ]
  },
  {
    path: '/xqgl',
    component: layout,
    redirect: '/xqgl/kqcx',
    name: 'xqgl-demo',
    meta: {
      title: 'xqgl',
      icon: 'component'
    }, // you can set roles in root nav
    children: [
      { path: 'kqcx', component: _import('xqgl/kqcx/index'), name: 'xqgl-demo', meta: { title: 'kqcx' } },
      { path: 'ywmk', component: _import('ywmk/bq/index'), name: 'qb-demo', meta: { title: 'qb' } },
      { path: 'zpxq', component: _import('rlzy/zpxq/index'), name: 'zpxq-demo', meta: { title: 'zpxq' } }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
