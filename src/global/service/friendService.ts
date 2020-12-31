import request from '../request/request'
import API from '../request/api'

const friendApi = {
	// 获取列表
	lists (uid) {
		return request.get(API.friendList, { uid })
	},
	add (data) {
		return request.post(API.addfriend, data)
	}
}

export default friendApi

