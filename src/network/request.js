import axios from "axios"
export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 50000
  })
// /* 请求拦截器 */
//   instance.interceptors.request.use(config => {
//     console.log("请求拦截成功 -> config", config)
//     return config
//   }, err => { 
//     console.log("请求拦截失败 -> err", err)
//   })
// /* 响应拦截器 */
//   instance.interceptors.response.use(res => {
//     console.log("响应拦截成功 -> res", res)
//     return res
//   }, err => {
//     console.log("响应拦截失败 -> err", err)
//   })

  return instance(config)
}