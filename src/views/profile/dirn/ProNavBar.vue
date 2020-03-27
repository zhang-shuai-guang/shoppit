<template>
  <nav-bar class="nav-bar">
    <div slot="center">商品分类</div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name:'ProNavBar',
  data() {
    return {}
  },
  //注册组件
  components:{
    NavBar
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  //计算属性
  computed:{},
  //方法
   methods:{}
}
</script>
<style scoped>
.nav-bar{
  background: var(--color-tint);
  color: #fff;
}
</style>