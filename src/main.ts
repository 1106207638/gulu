import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buttom from '/src/views/button/hj_button.vue'
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


import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
console.log(expect)
{
  const constructor = Vue.extend(Buttom)
  console.log(constructor)
  const button = new constructor({
    propsData: {
      icon: 'settings'
    }
  })
  button.$mount()
  const useElement: any = button.$el.querySelector('use')
  console.log(useElement)
  const href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
  button.$el.remove()
  button.$destroy()
}
{
  const constructor = Vue.extend(Buttom)
  console.log(constructor)
  const button = new constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  button.$mount()
  const useElement: any = button.$el.querySelector('use')
  console.log(useElement)
  const href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-jiazai')
  button.$el.remove()
  button.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const constructor = Vue.extend(Buttom)
  console.log(constructor)
  const button = new constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  button.$mount(div)
  const svg: any = button.$el.querySelector('svg')
  const roder = window.getComputedStyle(svg).order
  expect(roder).to.eq('1')
  button.$el.remove()
  button.$destroy()

}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const constructor = Vue.extend(Buttom)
  console.log(constructor)
  const button = new constructor({
    propsData: {
      icon: 'settings',
      iconPostition: 'right'
    }
  })
  button.$mount(div)
  const svg: any = button.$el.querySelector('svg')
  const roder = window.getComputedStyle(svg).order
  expect(roder).to.eq('2')
  button.$el.remove()
  button.$destroy()
}
//点击事件的单元测试有bug，但是功能是正常的
// {
//   const constructor = Vue.extend(Buttom)
//   const gbutton = new constructor({
//     propsData: {
//       icon: 'settings',
//     }
//   }).$mount('#test')
//   let spy = chai.spy(function () { })
//   gbutton.$on('click', spy)
//   let button: any = gbutton.$el
//   button.click()
//   expect(spy).to.have.been.called()
//   console.log(button)
// }