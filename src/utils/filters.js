import Vue from 'vue';

Vue.filter('percent', function (value) {
    // 返回处理后的值
    if (!value) {
        return "";
    }
    return value.toFixed(2) + '%';
})
