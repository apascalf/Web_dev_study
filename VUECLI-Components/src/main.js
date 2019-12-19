import Vue from 'vue'
import App from './App.vue'
import demo from './components/demo.vue'

Vue.config.productionTip = false
Vue.component('students',demo);

new Vue({
  render: h => h(App),
}).$mount('#app')
