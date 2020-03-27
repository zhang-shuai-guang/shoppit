export default{
  cartlist(state){
    return state.cartlist
  },
  cartListLength(state){
    return state.cartlist.length
  },
  totalPrice(state){
    return state.cartlist.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count * item.newPrice
        }, 0).toFixed(2)
  },
  settlement(state){
    return state.cartlist.filter(item => item.checked).length
  }
}