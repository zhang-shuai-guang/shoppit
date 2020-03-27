<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton @checkBtnClick="checkedChange" :checked="item.checked"></CheckButton>
    </div>
    <div class="item-img">
      <img v-lazy="item.imgURL" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{item.title}}</div>
      <div class="item-desc">商品描述: {{item.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{item.newPrice}}</div>
        <div class="item-count right">
          <ul class="counter">
            <li id="minus">
              <input type="button" v-on:click="minuser" :disabled="item.count <= 1" value="-" />
            </li>
            <li id="countnum">{{ item.count }}</li>
            <li id="plus">
              <input type="button" v-on:click="adder" value="+" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
export default {
  name: "cartItem",
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  //注册组件
  components: {
    CheckButton
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  //计算属性
  computed: {},
  //方法
  methods: {
    checkedChange: function() {
      // this.item.checked = !this.item.checked;
      this.$store.commit("gaichecked", this.item);
    },
    adder() {
      this.$store.commit("adder",this.item);
    },
    minuser() {
      this.$store.commit("minuser",this.item);
    }
  }
};
</script>
<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}

ul,
li {
  margin: 0;
  padding: 0;
}
.counter li {
  float: left;
  list-style-type: none;
  width: 22px;
  height: 22px;
  text-align: center;
  line-height: 22px;
  border: #999 thin solid;
  background-color: #fff;
}
.counter li input {
  width: 100%;
  height: 100%;
  outline: none;
  -webkit-appearance: none;
  background: none;
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 0;
}
#countnum {
  border-left: hidden;
  border-right: hidden;
  color: #666;
}
</style>