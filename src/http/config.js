import axios from 'axios'
import Cookies from 'js-cookie'
const baseUrl = process.env.requestUrl

axios.defaults.timeout = 5000
axios.defaults.baseURL =''


// http request 拦截器
axios.interceptors.request.use(
  config => {
    const token = Cookies.get('tooken')
    config.data = JSON.stringify(config.data)
    config.headers = {
      'Content-Type':'application/x-www-form-urlencoded'
    }
    if(token){
      config.params = {'token':token}
    }
    return config
  },
  error => {
    return Promise.reject(err)
  }
)


// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params={}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params:params
    })
    .then(response => {
      resolve(response.data)
    })
    .catch(err => {
      reject(err)
    })
  })
}


/**
  * 封装post请求
  * @param url
  * @param data
  * @returns {Promise}
  */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
        .then(response => {
          resolve(response.data)
        },err => {
          reject(err)
        })
  })
 }

export default {
  fetch,
  post
}
