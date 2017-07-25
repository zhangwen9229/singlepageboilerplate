import store from '@/store';
import Vue from 'vue';

let loadingInstance = null;
export const beforeEach = (to, from, next) => {
    if ((from.matched.length > 0
        ? from.matched[0].path
        : from.path) !== (to.matched.length > 0
        ? to.matched[0].path
        : to.path)) {
        // loadingInstance = ElementUI     .Loading     .service({customClass:
        // 'loadingclass', text: '拼命加载中'});
    }
    if (to.matched.some(res => res.meta.showtab)) {
        if (!store.getters.showTabBar) {
            store.dispatch('ShowTabBar', {show: true});
        }
    } else {
        store.dispatch('ShowTabBar', {show: false});
    }
    if (to.matched.some(res => res.meta.requireAuth)) {
        // 判断是否需要登录权限 models     .CommonController     .AuthRequest({}, (err,result) =>
        // {         if (result) { // 判断是否登录             next();         } else { //
        // 没登录则跳转到登录界面             next({                 path: '/', query: {
        //          redirect: to.fullPath,                     time: Date.now()
        // //为防止不进入router.afterEach                 }             }); }     }); return;
    }
    next();
}

export const afterEach = route => {
    if (route.matched.some(record => record.meta.root)) { //
        // setTimeout(() => {     // store.dispatch('ShowOrHideLoading', {show: false});
        //     if (loadingInstance)         loadingInstance.close();     } , 1000)
    }
}