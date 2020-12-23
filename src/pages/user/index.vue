<template>
	<view class="page-container">
		<view class="user-header">
			<u-avatar class="user-avatar" :src="state.userInfo.avatarUrl" size="120" />
			<view class="user-info">
				<button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo" class="user-name">{{ state.isLogin ? state.userInfo.nickName : '登录或者注册' }}</button>
			</view>
		</view>
		<view class="user-actions">
			<u-cell-group>
				<u-cell-item icon="share" title="亲友"></u-cell-item>
				<u-cell-item icon="share" title="时间"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script lang="ts">
	import { Component,Vue ,Watch} from "vue-property-decorator";
	var rawData, _that;

	@Component({}) //必须
	export default class Index extends Vue {
		state = {
			userInfo: null,
			isLogin: false
		}
		onShow() {
		}
		onLoad() {
			_that = this;
		}
		onGotUserInfo (e) {
			console.log('aaaaa', e);
			rawData = e.detail.rawData;
			if (e.detail.iv) {
				this.state.userInfo = e.detail.userInfo;
				this.state.isLogin = true
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log(loginRes);
						// console.log(rawData)
					}
				});
			} else {
				uni.showToast({
					title: '用户拒绝授权',
					icon: 'none'
				});
			}
		}

	}

</script>

<style lang="scss">
.user-header {
	height: 200upx;
	background: $uni-color-success;
	.u-avatar {
		margin-top: 40upx;
		margin-left: 32upx;
		vertical-align: top;
	}
	.user-info {
		display: inline-block;
		margin-left: 20upx;
		font-size: 16px;
		.user-name {
			background: none;
			border: none;
			height: 100%;
			line-height: 200upx;
			color: #ffffff;
			padding: 0;
			&::after {
				border: none
			}
		}
	}
}
</style>
