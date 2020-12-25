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
	</view>
</template>

<script lang="ts">
	import { Component,Vue ,Watch} from "vue-property-decorator";

	@Component({}) //必须

	export default class Index extends Vue {
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
