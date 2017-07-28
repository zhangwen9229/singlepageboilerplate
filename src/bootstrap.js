import Vue from 'vue';

import 'hotcss';

import 'normalize.css';

import '@/assets/css/style.css'
import '@/assets/css/main.postcss'

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// import '@/assets/css/style.css'

import App from './App.vue'

// Vue.use(MintUI)
// import '@/assets/css/main.css';

import routes from './router'
import Router from 'vue-router';
var moment = require('moment');
moment.locale('zh-cn');
var VueMoment = require('vue-moment');

Vue.use(Router);
Vue.use(VueMoment);

import VuexRouterSync from 'vuex-router-sync';
import store from './store';

export const router = new Router({
    // mode: 'history',
    routes
});

VuexRouterSync.sync(store, router);
Vue.router = router;
window.router = router;

import vueg from 'vueg'
import 'vueg/css/transition-min.css'
const options = {
    duration: '0.2', //转场动画时长，默认为0.3，单位秒
    firstEntryDisable: false, //值为true时禁用首次进入应用时的渐现动画，默认为false
    firstEntryDuration: '.6', //首次进入应用时的渐现动画时长，默认为.6
    // forwardAnim: 'slideInRight',   //前进动画，默认为fadeInRight backAnim: 'slideInLeft',
    //       //后退动画，默认为fedeInLeft
    sameDepthDisable: false, //url深度相同时禁用动画，默认为false
    tabs: [
        {
            name: 'home'
        }, {
            name: 'category'
        }
    ], //默认为[]，name对应路由的name,以实现类似app中点击tab页面水平转场效果，如tab[1]到tab[0]，会使用backAnim动画，tab[1]到tab[2]，会使用forwardAnim动画
    tabsDisable: false, //值为true时，tabs间的转场没有动画，默认为false
    disable: false, //禁用转场动画，默认为false，嵌套路由默认为true
}
Vue.use(vueg, router, options) //←注意这一句应该在router实例化(router = new VueRouter({})之后

//ProgressBar初始化
import ProgressBar from '@/components/common/progressBar/index.vue';
const bar = Vue.prototype.$bar = new Vue(ProgressBar).$mount();
document
    .body
    .appendChild(bar.$el);
window.vBar = bar;

Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

import '@/utils/directive';

// store.dispatch('share_SessionStorage'); 
//路由钩子函数操作
import {beforeEach, afterEach} from '@/router/hooks';
router.beforeEach(beforeEach);
router.afterEach(afterEach);

