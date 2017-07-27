// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import '../dist/lib/hx.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
//import hx from '../dist/lib/hx.min.js'
// Vue.use(hx)
import LoadingBar from '@/components/loading-bar'
import Alert from '@/components/alert'

Vue.$loadingBar=LoadingBar
Vue.prototype.$loadingBar=LoadingBar
Vue.component(Alert.name,Alert)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
