import BackTop from 'components/content/backtop/BackTop'
export const backTopMixin = {
  components:{
    BackTop
  },
  data: function () {
    return {
      isshow: false
    }
  },
  methods: {
    backTop: function () {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    listenShow(position){
      this.isshow = -position.y > 800
    }
  }
}
