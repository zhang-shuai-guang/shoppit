<template>
  <div class="tab-bar-item" @click="bian">
    <div v-if="!is">
      <slot name="item-img1"></slot>
    </div>
    <div v-else>
      <slot name="item-img2"></slot>
    </div>
    <div :style="acolor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props:{
      path:String,
      activeColor:{
        type:String,
        default:'#ff5777'
      }
  },
  data() {
    return {
      // is: false
    };
  },
  computed:{
    is(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    acolor(){
      return this.is?{color:this.activeColor}:{}
    }
  },
  methods:{
    bian(){
      console.log(this.path);
      this.$router.replace(this.path)
      // this.$router.replace("/home");
    }
  }
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
/* .color {
  color: red;
} */
</style>