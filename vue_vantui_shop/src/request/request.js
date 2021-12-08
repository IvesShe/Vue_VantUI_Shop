import axios from 'axios'

// 創建一個單例
const instance = axios.create({
  baseURL: 'http://kumanxuan1.f3322.net:8001',
  timeout: 5000
})

// 請求攔截
instance.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

// 響應攔截
instance.interceptors.response.use(res => {
  return res.data
}, err => {
  return Promise.reject(err)
})

export default instance