export default {
  countAdd(state,itemcar){
    itemcar.count+=1
  },
  caradd(state,obj){
    state.cartlist.push(obj)
  },
  gaichecked(state,item){
    let a=state.cartlist.find(i => i.iid === item.iid)
    a.checked=!a.checked
  },
  adder(state,item){
    let a=state.cartlist.find(i => i.iid === item.iid)
    a.count++
  },
  minuser(state,item){
    let a=state.cartlist.find(i => i.iid === item.iid)
    if (a.count <= 0) {
      a.count = 0;
    } else {
      a.count--;
    }
  }
  
}