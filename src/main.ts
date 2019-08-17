import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'


import routers from './router'
import Common from './common'
import Loading from './components/loading'
import './assets/styles/index.styl'
// import xx from 'vue-easy-loading'


Vue.config.productionTip = false


Vue.use(Router)
Vue.use(Common)
Vue.use(Loading)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: routers
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
