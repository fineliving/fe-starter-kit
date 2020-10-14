import Vue from 'vue'
import element from './plugins/element'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(element)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
