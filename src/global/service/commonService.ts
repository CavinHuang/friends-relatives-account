import request from '../request/request'
import API from '../request/api'

const commonApi = {
	//保存会员信息
	saveUserInfo(data = {}) {
		return request.post(API.saveUser, data) ;
	}
}

export default commonApi

