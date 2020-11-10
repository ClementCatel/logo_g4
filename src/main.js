import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import threeJs from 'vue-threejs'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  threeJs,
  render: h => h(App)
}).$mount('#app')
