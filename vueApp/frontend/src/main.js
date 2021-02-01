import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFibmVyIFdlc2xleSBSaWJlaXJvIiwiZW1haWwiOiJBYm5lcldfQGhvdG1haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYxMjIwNDQ5MCwiZXhwIjoxNjEyNDYzNjkwfQ.wzNeMKFyTvQhJh1kj7ZPba15Q8n11V7cb8sCVI0W2xc'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')