/**
 * @Author       : guth
 * @Date         : 2021-08-30 17:09:42
 * @LastEditors  : guth
 * @LastEditTime : 2021-08-30 17:09:43
 * @FilePath     : \nav-ui\src\res\api\ajax.js
 * @Description  :
 */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const $http = axios.create({
  timeout: 30000,
  baseURL: 'nav/api/v1',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
  },
});

// 添加请求拦截器
$http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在发送请求之前做些什么
    // if (config.method === 'get') {
    //   config.params
    // }
    return config;
  },
  function (error: AxiosError) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
$http.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error: AxiosError) => {
    // 对响应错误做点什么
    const response = error.response;
    return response ? Promise.reject(response) : Promise.reject(error); // 修改客户端引起的错误response为undefined导致报错问题
  }
);

export default $http;
