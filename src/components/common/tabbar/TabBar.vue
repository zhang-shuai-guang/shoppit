<template>
  <div id="table">
    <slot ></slot>
  </div>
</template>
<script>
export default {
  name: "TabBar",

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
#table {
  height: 49px;
  display: flex;
  background-color: #dadada;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>