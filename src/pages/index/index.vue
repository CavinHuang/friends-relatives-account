<template>
	<view class="content">
      <image class="logo" src="../../static/logo.png"></image>
		<view>
      <text class="title">{{title}}</text>
    </view>
		<u-button type="primary">uView 按钮</u-button>
		<navigator url="/pages/add/index">记账</navigator>
		<navigator url="/pages/user/index">个人中心</navigator>
		<u-table>
				<u-tr>
					<u-th>学校</u-th>
					<u-th>班级</u-th>
					<u-th>年龄</u-th>
				</u-tr>
				<u-tr>
					<u-td>浙江大学</u-td>
					<u-td>二年级</u-td>
					<u-td>22</u-td>
				</u-tr>
				<u-tr>
					<u-td>清华大学</u-td>
					<u-td>05班</u-td>
					<u-td>20</u-td>
				</u-tr>
			</u-table>
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
