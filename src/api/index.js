import request from '@/utils/request.js';

export default {
  async getArticle() {
    return request({
      url: '/articles/public/1',
      // url: '/release/accordin',
      method: 'GET'
    });
  }
};
