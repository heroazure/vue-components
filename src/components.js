/**
 * Created by xuwei on 2017/6/20.
 */
import './assets/common.less'
import Alert from './components/alert'
import LoadingBar from './components/loading-bar'
const hlj={
  Alert
}
const install = function (Vue, opts = {}) {
  Object.keys(hlj).forEach((key) => {
    Vue.component(hlj[key].name, hlj[key])
  })

  Vue.$loadingBar=LoadingBar
  Vue.prototype.$loadingBar=LoadingBar
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(hlj, {install})
