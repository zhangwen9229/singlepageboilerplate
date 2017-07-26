import Vue from 'vue';
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

export default {
  data() {
    return {showsearch: false,selected:''}
  },
  methods : {
    showSearchDialog() {
      // this.showsearch = true;
      this
        .$router
        .push({path: '/search'});
      
    },
    btntest() {
      this
        .$router
        .push({path: '/demo'});
    },
    btngoods() {},
    gosearch() {
      this
        .$router
        .push({path: '/goods'});
    },
    category() {
      //分类
      this
        .$router
        .push({path: '/category'});
    }
  },
  components : {
    // vHeader: resolve => require(['@/components/common/header/index.vue'],
    // resolve)
  }
};
