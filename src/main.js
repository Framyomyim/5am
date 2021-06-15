import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Auth from '@/js/Auth'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    Auth
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
