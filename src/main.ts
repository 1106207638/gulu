import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
 import Buttom from '/src/views/hj_utton.vue'
 import Icon from '/src/views/hj-icon.vue'

Vue.component('hj-button', Buttom)
Vue.component('hj-icon', Icon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
