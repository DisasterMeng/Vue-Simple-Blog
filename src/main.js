import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'


import routers from './router'
import base from './base'



import './assets/styles/index.styl'

Vue.config.productionTip = false


Vue.use(Router)
Vue.use(base)



const router = new Router({
  mode: 'history',
  base: '/',
  routes: routers})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
