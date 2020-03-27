<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name:'',
  data() {
    return {
      message:"",
      isShow:false
    }
  },
  //注册组件
  components:{},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  //计算属性
  computed:{},
  //方法
   methods:{
     show(mess,s=1500){
       this.isShow=true
       this.message=mess
       setTimeout(()=>{
         this.isShow=false
         this.message=""
       },s)
     }
   }
}
</script>
<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 8px 10px;
  z-index: 999;
  color: #fff;
  background: rgba(0,0,0,.75);
  border-radius: 5px;
}
</style>