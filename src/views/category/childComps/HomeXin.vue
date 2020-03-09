<template>
  <div class="chil">
    <div v-for="(item,index) in recommends" :key="index" class="chil-item">
      <a :href="item.link">
        <img :src="item.image"/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"HomeXin",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }

}
</script>

<style scoped>
.chil{
  width: 100%;
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 8px 0px 20px;
  border-bottom:8px solid #eee;
}
.chil-item{
  flex: 1;
}
.chil-item img{
  height: 68px;
  width: 68px;
  margin-bottom: 3px;
}
</style>