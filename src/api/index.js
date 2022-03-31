import request from '@/utils/request.js';

export default {
  async getList() {
    return request({
      url: '/release/accordin',
      method: 'GET'
    });
  }
};
