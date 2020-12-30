<template>
  <view class="page-container">
    <view class="add-form">
      <u-form :model="form" ref="uForm" :label-width="140">
        <u-form-item label="亲友姓名"><u-input v-model="form.name" placeholder="请输入亲友姓名" /></u-form-item>
        <u-form-item :label-position="labelPosition" label="所属亲友" prop="goodsType" label-width="150">
          <u-input :border="border" type="select" :select-open="selectShow" v-model="model.goodsType" placeholder="请选择TA属于谁" @click="selectShow = true"></u-input>
        </u-form-item>
        <u-form-item label="性别"><u-input v-model="form.sex" type="select" placeholder="请选择性别" @click="sexSelectState = true" /></u-form-item>
        <u-form-item label="关系备注"><u-input v-model="form.name" /></u-form-item>
        <u-button @click="submit" type="success">提交</u-button>
      </u-form>
    </view>
		<u-select mode="single-column" :list="selectList" v-model="selectShow" @confirm="selectConfirm"></u-select>
		<u-select mode="single-column" :list="sexMap" v-model="sexSelectState" @confirm="selectConfirm"></u-select>
  </view>
</template>

<script lang="ts">
import { Component,Vue ,Watch} from "vue-property-decorator";
import friendApi from '@/global/service/commonService'

@Component({}) //必须
export default class Index extends Vue {
	selectShow = false
	sexSelectState = false
	selectList = [
		{
			value: '电子产品',
			label: '电子产品'
		},
		{
			value: '服装',
			label: '服装'
		},
		{
			value: '工艺品',
			label: '工艺品'
		}
	]
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
	friends: [],
	userInfo: null
	onShow () {
		this.userInfo = uni.getStorageSync('userInfo')
		friendApi.lists({
			uid: this.userInfo.id
		}).then(res => {
			console.log(res)
		})
	}
}
</script>

<style lang="scss">
.add-form {
	padding: 32upx;
}
</style>