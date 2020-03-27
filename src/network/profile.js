import { request } from "./request";

export function getLeftData(){
  return request({
    url:'/category'
  })
}
export function getProRight(maitKey){
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}
export function getProRight2(miniWallkey,type){
  return request({
    url:'/subcategory/detail',
    params:{
      miniWallkey,
      type
    }
  })
}