export default{
  addCart(content,obj){
    // let itemcar=null;
    // for(let item of content.state.carlist){
    //   if(obj.iid === item.iid){
    //     itemcar=item
    //   }
    // }
    return new Promise((resolve,reject)=>{
      let itemcar=content.state.cartlist.find(item => item.iid === obj.iid)
      if(itemcar){
        content.commit('countAdd',itemcar)
        resolve("已添加商品，当前商品+1")
      }else{
        obj.count=1
        obj.checked=false
        content.commit('caradd',obj)
        resolve("商品添加成功")
      }
    })
  }
}