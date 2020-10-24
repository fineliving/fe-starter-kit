import Vue from 'vue'
import element from './plugins/element'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import service from './plugins/http'
import HtmlPanel from './components/HtmlPanel'
import IframePanel from './components/IframePanel'

Vue.use(element)
Vue.component('VHtmlPanel', HtmlPanel)
Vue.component('VIframePanel', IframePanel)
Vue.config.productionTip = false
Vue.prototype.$http = service

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
