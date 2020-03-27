<template>
  <div class="control">
    <div 
      v-for="(item,index) in list" 
      :key="index"
      class="control-item"
      :class="{active:index===indexa}"
      @click="itemclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
    list:Array,
    default(){
      return []
    } 
  },
  data(){
    return{
      indexa:0
    }
  },
  methods:{
    itemclick(index){
      this.indexa=index
      this.$emit("controlItem",index)
    }
  }
}
</script>

<style scoped>
.control{
  display: flex;
  text-align: center;
  background: #ffffff;
  font-size: 16px;
}
.control-item{
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.control-item>span{
  padding: 5px;
}
.active{
  color: var(--color-high-text);
}
.active>span{
  border-bottom:3px solid var(--color-tint) ;
}
</style>