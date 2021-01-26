import request from '../request/request'
import API from '../request/api'

const billdApi = {
  // 获取列表
  lists(data: any) {
    return request.get(API.billCateList, data)
  },
  save(data: any) {
    return request.post(API.billSave, data);
  },
  add(data: {} | undefined) {
    return request.post(API.addBillCate, data)
  },
  update(data: {} | undefined) {
    return request.post(API.updateBillCate, data)
  },
  timeLine(data: {} | undefined) {
    return request.get(API.billList, data)
  }
};

export default billdApi;