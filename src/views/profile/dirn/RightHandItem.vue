<template>
  <div class="item">
    <!--  -->
    <img :src="item.image" class="img"/>
    <div>{{item.title}}</div>
  </div>
</template>

<script>
import {debounce} from 'common/debounce' 
export default {
  name: "",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      counter:0,
      imglength:0
    };
  },
  //注册组件
  components: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // let refresh=debounce(this.$refs.scroll.refresh,60)
    // this.$bus.$on('itemImgLoad',()=>{
    //   refresh()
    // })
  },
  //计算属性
  computed: {},
  //方法
  methods: {
  },
};
</script>
<style scoped>
.item{
  width: 100%;
  text-align: center;
  padding: 8px;
}
.img{
  width: 80%;
  height: 80%;
}
</style>