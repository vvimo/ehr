// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import happyScroll from 'vue-happy-scroll'
import 'vue-happy-scroll/docs/happy-scroll.css'

import i18n from './lang'
import './mock'
import './permission'
import './utils/flexible'

import * as filters from './filters' // global filters

import tlModel from '@/views/xqgl/kqcx/pages/model'

Vue.use(happyScroll)
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(Mint, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

let component = {
  tlModel
}

Object.keys(component).forEach(key => {
  Vue.component(key, component[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
