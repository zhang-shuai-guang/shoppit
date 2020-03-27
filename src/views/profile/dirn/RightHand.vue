<template>
  <div class="righthand">
    <tab-control :list='["流行","新款","精品"]' 
                  @controlItem="controlItem" 
                  ref="tabcontrol2"
                  class="control1"
                  v-show="iscontrol"/>
    <scroll class="scroll" 
            ref="scroll" 
            :probe-type="3"
            @scroll="scroll">
      <div>
        <div class="prorightflex">
          <div v-for="(item,index) in maitKey" :key="index">
            <a :href="item.link">
              <right-hand-item :item="item"/>
            </a>
          </div>
        </div>
        <tab-control ref="tabcontrol1" :list='["流行","新款","精品"]' @controlItem="controlItem" />
        <goods :list="miniWallkey" />
      </div>
    </scroll>
  </div>
</template>

<script>
import scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabcontrol/TabControl";
import Goods from "components/content/goods/Goods";
import RightHandItem from "./RightHandItem";
import {debounce} from 'common/debounce'
export default {
  name: "RightHand",
  props: {
    maitKey: {
      type: Array,
      default: []
    },
    miniWallkey: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      iscontrol:false,
      tabcontrol1height:0,
      ind:0
    };
  },
  //注册组件
  components: {
    scroll,
    TabControl,
    Goods,
    RightHandItem
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted(){
    let refresh=debounce(this.$refs.scroll.refresh,60)
    this.$bus.$on('itemImgLoad',()=>{
      refresh()
    })
  },
  //计算属性
  computed: {},
  beforeUpdate:function(){
    this.$bus.$on('itemcontro',()=>{
      this.$refs.scroll.scrollTo(0,0,50)
    })
  },
  //方法
  methods: {
    controlItem(index) {
      this.$emit("itemcon",index)
      this.$refs.tabcontrol1.indexa=index
      this.$refs.tabcontrol2.indexa=index
    },
    // rightimgload(){
    // },
    scroll(i){
      let b= this.$refs.tabcontrol1.$el.offsetTop
      this.iscontrol = -(i.y)>=b
    }
  }
};
</script>
<style scoped>
.righthand {
  width: 75%;
  /* background: chartreuse; */
  height: calc(100vh - 93px);
}
.scroll {
  height: 100%;
  overflow: hidden;
}
.prorightflex {
  display: flex;
  flex-wrap: wrap;
}
.prorightflex > div {
  width: 33.33%;
}
.control1{
  width: 75%;
  position: fixed;
  z-index: 9;
}
</style>