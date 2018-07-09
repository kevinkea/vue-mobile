import axios from 'axios'
let userAgentInfo = navigator.userAgent
let isiOS = !!userAgentInfo.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
let http = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 10000,
  headers: {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
	// 'Access-Control-Allow-Origin': '*',
	// 'Access-Control-Allow-Methods':'GET',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    // 'HOST': 'movie.miguvideo.com',
    // 'IsIos': isiOS
  }
})
export default {
  get (url) {
    return new Promise((resolve, reject) => {
      http.get(url).then(res => {
        resolve(res.data)
      }).catch(error => {
        if (error.response) {
          resolve(error.response.data)
        } else {
          reject(error)
        }
      })
    })
  },
  post (url, params) {
    return new Promise((resolve, reject) => {
      http.post(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        if (error.response) {
          resolve(error.response.data)
        } else {
          reject(error)
        }
      })
    })
  }
}
