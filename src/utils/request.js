/**
 * 基于axios封装的请求模块
 */

import axios from "axios"
import store from "@/store"

const request = axios.create({
    //设置请求的基础路径
    baseURL:"https://conduit.productionready.io"
})

// Add a request interceptor
request.interceptors.request.use(function (config) {

    const user = store.state.user

    //如果用户登录，统一往本次请求的请求头中添加用户token
    if(user){
        //格式以后端要求为主，注意Token右边的空格
        config.headers.Authorization = `Token ${user.token}`
    }
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
request.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default request