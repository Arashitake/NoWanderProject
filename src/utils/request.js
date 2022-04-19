// axios 封装
import axios from 'axios';
// import router from '@/router';
// import store from '@/store';

const service = axios.create({
  baseURL: 'http://119.23.214.198:8080',
  // baseURL: 'https://service-dxtrccme-1302998929.gz.apigw.tencentcs.com',
  timeout: 1000
});

const request = (options) => {
  options.method = options.method || 'get';
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data;
  }
  return service(options);
};

['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
  request[item] = (url, data, options) => {
    return request({
      url,
      data,
      method: item,
      ...options
    });
  };
});

export default request;
