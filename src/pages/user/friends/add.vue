<template>
  <view class="page-container">
    <view class="add-form">
      <u-form :model="formData" ref="uForm" :label-width="140">
        <u-form-item label="亲友姓名" prop="name"><u-input v-model="formData.name" placeholder="请输入亲友姓名" /></u-form-item>
        <u-form-item :label-position="labelPosition" label="所属亲友" prop="belong" label-width="150">
          <u-input type="select" :select-open="selectShow" v-model="selectBelongLabel" placeholder="请选择TA属于谁" @click="selectShow = true"></u-input>
        </u-form-item>
        <u-form-item :label-position="labelPosition" label="性别" prop="sex"  label-width="150">
					<u-input  type="select" :select-open="sexSelectState" v-model="selectSexLable" placeholder="请选择性别" @click="sexSelectState = true" />
				</u-form-item>
        <u-form-item label="关系备注"><u-input v-model="formData.remark" /></u-form-item>
        <u-button @click="submit" type="success">提交</u-button>
      </u-form>
    </view>
		<u-select mode="single-column" :list="friends" v-model="selectShow" @confirm="selectConfirm"></u-select>
		<u-select mode="single-column" :list="sexMap" v-model="sexSelectState" @confirm="selectSexConfirm"></u-select>
  </view>
</template>

<script lang="ts">
import { Component,Vue ,Watch} from "vue-property-decorator";
import friendApi from '@/global/service/friendService'

@Component({}) //必须
export default class Index extends Vue {
	selectShow = false
	sexSelectState = false
	selectSexLable = ''
	selectBelongLabel = ''
	formData = {
		name: '',
		belong: '',
		sex: '',
		remark: ''
	}
	sexMap = [
		{
			value: '1',
			label: '男'
		},
		{
			value: '2',
			label: '女'
		},
		{
			value: '3',
			label: '未知'
		}
	]
	friends = [
		{
			value: '0',
			label: '我'
		}
	]
	rules = {
		name: [
			{ 
				required: true, 
				message: '请输入姓名', 
				// 可以单个或者同时写两个触发验证方式 
				trigger: ['change','blur']
			}
		],
		belong: [
			{
				required: true,
				message: '请选择所属的亲友',
				trigger: ['change','blur']
			}
		],
		sex: [
			{
				required: true,
				message: '请选择性别',
				trigger: ['change','blur']
			}
		]
	}
	userInfo = null
	// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	}
	onShow () {
		this.userInfo = uni.getStorageSync('userInfo')
		friendApi.lists(this.userInfo.id).then((res:any):any => {
			res = res.map(item => {
				return {
					value: item.id + '',
					label: item.name
				}
			})
			this.friends.push(...res)
		})
	}
	selectConfirm (e) {
		this.formData.belong = e[0].value
		this.selectBelongLabel = e[0].label
	}
	selectSexConfirm (e) {
		this.formData.sex = e[0].value
		this.selectSexLable = e[0].label
	}
	submit () {
		this.$refs.uForm.validate((valid: any) => {
			if (valid) {
				console.log(valid)
				this.formData.uid = this.userInfo.id
				friendApi.add(this.formData).then(res => {
					console.log(res)
					if (res) {
						this.goTo('/pages/user/friends/index')
					}
				})
			} else {
				console.log('验证失败');
			}
		});
	}
}
</script>

<style lang="scss">
.add-form {
	padding: 32upx;
}
</style>