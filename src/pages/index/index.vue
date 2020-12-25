<template>
	<view class="content">
      <image class="logo" src="../../static/logo.png"></image>
		<view>
      <text class="title">{{title}}</text>
    </view>
		<u-button type="primary">uView 按钮</u-button>
		<navigator url="/pages/add/index">记账</navigator>
		<navigator url="/pages/user/index">个人中心</navigator>
		<navigator url="/pages/timeline/index">流水</navigator>
		<u-tabbar v-model="current" :list="list" @change="tabbarChange"></u-tabbar>
	</view>
</template>

<script lang="ts">
	import { Component, Vue, Watch} from "vue-property-decorator";

	@Component({}) //必须

	export default class Index extends Vue {
		private current = 0
		private routeMap = [
			'/pages/index/index',
			'/pages/add/index',
			'/pages/timeline/index',
			'/pages/user/index'
		]
		@Watch('current')
		 onCurrentChanged(newValue: string, oldValue: string) {
			this.goTo(this.routeMap[newValue])
		}
		list = [{
			iconPath: "home",
			selectedIconPath: "home-fill",
			text: '首页',
		},
		{
			iconPath: "edit-pen",
			selectedIconPath: "edit-pen-fill",
			text: '记账',
		},
		{
			iconPath: "more-circle",
			selectedIconPath: "more-circle-fill",
			text: '流水',
		},
		{
			iconPath: "account",
			selectedIconPath: "account-fill",
			text: '我的',
		},
	]
	tabbarChange (index: number) {
		this.current = index
	}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
