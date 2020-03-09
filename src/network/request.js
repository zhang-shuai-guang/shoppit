import axios from 'axios'
export function request(config){

    //创建axios实例
    const inst=axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000,
    })

    //请求拦截
    inst.interceptors.request.use(config => {//成功
        return config
    },err => {//失败
    })

    //响应拦截
    inst.interceptors.response.use(res => {//成功响应
        return res.data
    },err => {//失败拦截

    })

    //返回结果
    return inst(config)
}