import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import * as mdbvue from 'mdbvue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // vuetify,
  render: h => h(App)
}).$mount('#app')
