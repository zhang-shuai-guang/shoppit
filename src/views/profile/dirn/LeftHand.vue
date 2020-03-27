<template>
  <div class="height">
    <scroll class="scroll">
      <div class="lefthand">
        <div class="lefthanditem"
          v-for="(item,index) in titledata"
          :key="index"
          :class="{active:index===indexa}"
          @click="itemclick(item.maitKey,index,item.miniWallkey)">
            {{item.title}}
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import scroll from "components/common/scroll/Scroll";
export default {
  name: "LeftHand",
  props: {
    titledata: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      indexa:0
    };
  },
  //注册组件
  components: {
    scroll
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  //计算属性
  computed: {},
  //方法
  methods: {
    itemclick(maitKey,index,miniWallkey){
      this.indexa=index
      let lefthand={miniWallkey:miniWallkey,maitKey:maitKey}
      this.$emit("control",lefthand)
      this.$bus.$emit('itemcontro')
    }
  }
};
</script>
<style scoped>
.height{
  height: calc(100vh - 93px);
  width: 25%;     
}
.scroll{
  height: 100%;
  overflow: hidden;
}
/* .lefthand {
} */
.lefthanditem {
  background: #eee;
  padding: 12px 0px 12px 10px;
}
.active{
  color: var(--color-high-text);
  border-left:3px solid var(--color-high-text) ;
  background: #fff;
}
</style>