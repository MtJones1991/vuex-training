import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import "./assets/sass/oplo-journey.scss";

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


import AOS from 'aos'
import 'aos/dist/aos.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  created() {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
