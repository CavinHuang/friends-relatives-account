import request from '../request/request'
import API from '../request/api'

const friendApi = {
  // 获取列表
  lists(data: any) {
    return request.get(API.friendList, data)
  },
  add(data: {} | undefined) {
    return request.post(API.addfriend, data)
  }
};

export default friendApi;