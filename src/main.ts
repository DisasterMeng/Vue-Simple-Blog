import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'


import routers from './router'
import common from './common'
import './assets/styles/index'

Vue.config.productionTip = false


Vue.use(Router)
Vue.use(common)


const router = new Router({
  mode: 'history',
  base: '/',
  routes: routers
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
