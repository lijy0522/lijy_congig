/*
 * @Author: lijy
 */
// 引入axios
import axios from 'axios'

// 创建一个 axios 实例
const requests = axios.create({
    // 基础路径，发请求的时候，路径当中会出现 api
    baseURL: '/api',
    // 设置响应时间
    timeout: 5000,
})

// 请求拦截器
requests.interceptors.request.use((config) => {
    // config：配置对象，对象里面有一个属性很重要，headers请求头
    return config
})

// 响应拦截器
requests.interceptors.response.use((res) => {
    // 成功的回调函数：服务器响应数据回来以后，可以在请求发出去之前做一下事情
    return res.data
}, (err) => {
    // 响应失败的回调函数
    return Promise.reject(new Error('err'))
})

// 对外暴露
export default requests