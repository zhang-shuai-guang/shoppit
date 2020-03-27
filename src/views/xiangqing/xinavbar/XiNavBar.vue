<template>
  <div>
    <nav-bar>
      <div slot="left" class="left" @click="go"><img src="~assets/img/common/back.svg"/></div>
      <div slot="center" class="list">
        <div v-for="(item,index) in list" :key="index" 
          class="list-item" @click="dian(index)" :class="{active:isitem===index}">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
name:'XiNavBar',
data(){
  return {
    list:['商品','参数','评论','推荐'],
    isitem:0
  }
},
components:{
  NavBar
},
methods:{
  dian(index){
    this.isitem=index
    this.$emit('dian',this.isitem)
  },
  go(){
    this.$router.go(-1)
  }
}
}
</script>

<style scoped>
  .list{
    display: flex;
    font-size: 15px;
  }
  .list-item{
    flex: 1;
  }
  .active{
    color:var(--color-high-text)
  }
  .left img{
    margin-top: 12px;
  }
</style>