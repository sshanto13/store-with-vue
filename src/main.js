// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'

window.$ = window.jQuery = require('jquery')
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false
//vue router setup
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {routes} from './router/index'
//object institiate
const router = new VueRouter({
  routes
})

// vuex setup
import Vuex from 'vuex'
Vue.use(Vuex)
import {storage} from './vuex/index'
//object institiate
const store = new Vuex.Store(storage)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
