export default {
  data() {
    return {showsearch: false}
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
    vFooter: resolve => require(['@/components/common/footer/index.vue'], resolve)
  }
};
