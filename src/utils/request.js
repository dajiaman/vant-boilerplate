import axios from './axios'

const service = axios.create({
  baseURL: '',
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    // 可以配置公共header等信息
    return config;
  },
  error => {
    // eslint-disable-next-line no-console
    console.log(error, 'err')
    return Promise.reject(error)
  }
)


// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    // 根据返回数据的code 自定义处理
    return res
  },
  error => {
    // eslint-disable-next-line no-console
    console.log('err' + error)

    return Promise.reject(error)
  }
)



export default service;