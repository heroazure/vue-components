import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let Hello=(resolve) => require(['@/views/Hello'], resolve)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  }
]

const router = new Router({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  Vue.$loadingBar.start()
  next()
});

router.afterEach((to, from, next) => {
  Vue.$loadingBar.finish()
  window.scrollTo(0, 0)
});

export default router
