// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './assets/css/reset.css'
import 'animate.css'

import common from '@/assets/js/utils.js'

Vue.use(common)

Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
