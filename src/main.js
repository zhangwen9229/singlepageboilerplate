// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store';

Vue.config.productionTip = false

import {router} from './bootstrap';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})


//fastclick
var FastClick = require('fastclick');
FastClick.attach(document.body);