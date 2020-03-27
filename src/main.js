import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import 'normalize.css'//标签初始化
import  FastClick  from  'fastclick'
import VueLazyload from 'vue-lazyload'
//解决移动端300ms延迟问题
FastClick.attach(document.body);

// 使用VueLazyload并传入相应的配置
Vue.use(VueLazyload, {
  error: require('assets/img/log/error.png'),
  loading: require('assets/img/log/loading.png'),// 懒加载使用的图片
})

Vue.use(toast)
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
