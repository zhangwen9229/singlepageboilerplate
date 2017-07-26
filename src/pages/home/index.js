import {MessageBox} from 'mint-ui';

import Vue from 'vue';
import { Cell } from 'mint-ui';

Vue.component(Cell.name, Cell);
export default {
  data() {
    return {showsearch: false, pickerValue: null}
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
    openPicker() {
      this
        .$refs
        .picker
        .open();
    }
  },
  mounted() {
    MessageBox({title: '提示', message: '确定执行此操作?', showCancelButton: true});
  },
  components : {
    vFooter: resolve => require(['@/components/common/footer/index.vue'], resolve)
  }
};
