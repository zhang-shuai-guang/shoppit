<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad:this.pullUpLoad
    });
    // 监听位置
    if(this.probeType===2||this.probeType===3){
      this.scroll.on("scroll", prop => {
       this.$emit("scroll", prop);
      });
    }
    
    // 上拉加载
    this.scroll.on("pullingUp", () => {
      this.$emit('pulling')
    });
  },
  methods: {
    scrollTo(x, y, time = 400) {
      this.scroll.scrollTo(x, y, time);
    },
    finisPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    getscrolly(){
      return this.scroll ? this.scroll.y:0
    }
  }
};
</script>

<style>
</style>