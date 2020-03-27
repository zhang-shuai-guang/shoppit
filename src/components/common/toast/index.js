import Toast from './Toast.vue'
const component = {}
component.install= (Vue)=>{
  console.log("install执行了");
  const toastcont=Vue.extend(Toast)
  const toast =new toastcont()
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast=toast;
}
// 导出该组件
export default component