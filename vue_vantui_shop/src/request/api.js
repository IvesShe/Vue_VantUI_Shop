import request from './request'

// 請求首頁數據
export const GetHomeData = () => request.get('/index/index')