import axios from "axios";
//设置请求得基准地址
axios.defaults.baseURL = 'http://localhost:8888'
const $http = axios.create();
//设置请求头
$http.interceptors.request.use(config => {
    // 给请求头加上Authorization,authJWT的字段,值为token
    config.headers.Authorization = window.localStorage.getItem('token')
    // config.headers.authJWT = window.sessionStorage.getItem('token')
    return config
})
  
//导出
export default $http;