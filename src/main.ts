import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
 import Buttom from '/src/views/button/hj_utton.vue'
 import Icon from '/src/views/hj-icon.vue'
import Hjbuttongroup from '/src/views/button/hj-button-group.vue'
Vue.component('hj-button', Buttom)
Vue.component('hj-icon', Icon)
Vue.component('hj-button-group', Hjbuttongroup)
Vue.config.productionTip = false
Vue.prototype.$appName = 'My App'
new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
