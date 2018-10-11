// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './client/App'
import router from './router'
import axios from 'axios'

import vdialog from 'vue-toast-confirm'

// Vue.prototype.$dialog = dialog
Vue.use(vdialog)

Vue.prototype.$http = axios;

// Vue.prototype.calcTime = calcTime;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
