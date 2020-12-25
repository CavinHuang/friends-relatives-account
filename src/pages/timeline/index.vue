<template>
	<view class="page-container">
		<u-collapse :itemStyle="itemStyle">
			<u-collapse-item v-for="(item, index) in itemList" :key="index">
				<view class="timeline-group-title" slot='title'>
					<view class="group-date-text">
						<view class="month-text">12月</view>
						<view class="year-text">2020</view>
					</view>
					<view class="group-total">
						<view class="group-total-title">-2000 <text class="tips">结余</text></view>
						<view class="group-total-all">
							<view class="income-text">
								<text class="income-title">收入</text>
								<text class="income-number">0.00</text>
							</view>
							<view class="line-1"></view>
							<view class="income-text">
								<text class="income-title out-title">支出</text>
								<text class="income-number">2000</text>
							</view>
						</view>
					</view>
				</view>
				<view class="timeline-body">
					<view class="timeline-item">
						<view class="date-text">
							<view class="date-number">09</view>
							<view>周三</view>
						</view>
						<view class="timeline-info">
							<view class="timeline-title">胡样春(我的朋友)</view>
							<view>09:34 · 结婚</view>
						</view>
						<view class="timeline-number">666</view>
					</view>
				</view>
			</u-collapse-item>
		</u-collapse>
	</view>
</template>

<script lang="ts">
import { Component,Vue ,Watch} from "vue-property-decorator";

@Component({}) //必须
export default class Index extends Vue {
	itemStyle = {
		borderBottom: '1px solid #dedede'
	}
	itemList = [
		{
			head: "10月",
			expenditure: 100,
			income: 400,
			lists: [
				{
					type: 1,
					typeText: '收入',
					changeNum: 100,
					timestamp: 1608778115,
					dateText: '2020-12-24 10:48:35',
					week: '四'
				},
				{
					type: 2,
					typeText: '支出',
					changeNum: 100,
					timestamp: 1608778115,
					dateText: '2020-12-24 10:48:35',
					week: '四'
				},
				{
					type: 1,
					typeText: '收入',
					changeNum: 100,
					timestamp: 1608778115,
					dateText: '2020-12-24 10:48:35',
					week: '四'
				},
				{
					type: 1,
					typeText: '收入',
					changeNum: 100,
					timestamp: 1608778115,
					dateText: '2020-12-24 10:48:35',
					week: '四'
				},
				{
					type: 1,
					typeText: '收入',
					changeNum: 100,
					timestamp: 1608778115,
					dateText: '2020-12-24 10:48:35',
					week: '四'
				}
			],
			open: true,
			disabled: true
		},
		{
			head: "9月",
			expenditure: 100,
			income: 400,
			lists: [
				{
					type: 1,
					typeText: '收入',
					changeNum: 100,
					timestamp: 1608778115,
					dateText: '2020-12-24 10:48:35',
					week: '四'
				},
				{
					type: 2,
					typeText: '支出',
					changeNum: 100,
					timestamp: 1608778115,
					dateText: '2020-12-24 10:48:35',
					week: '四'
				},
				{
					type: 1,
					typeText: '收入',
					changeNum: 100,
					timestamp: 1608778115,
					dateText: '2020-12-24 10:48:35',
					week: '四'
				},
				{
					type: 1,
					typeText: '收入',
					changeNum: 100,
					timestamp: 1608778115,
					dateText: '2020-12-24 10:48:35',
					week: '四'
				},
				{
					type: 1,
					typeText: '收入',
					changeNum: 100,
					timestamp: 1608778115,
					dateText: '2020-12-24 10:48:35',
					week: '四'
				}
			],
			open: true,
			disabled: true
		}]
}
</script>

<style lang="scss">
.page-container {
	padding: 32upx;
}
.timeline-group-title {
	display: flex;
	flex-wrap: wrap;
	.group-date-text {
		width: 100upx;
		text-align: center;
	}
	.month-text {
		font-size: 40upx;
		color: #333;
		font-weight: bold;
		line-height: 64upx;
	}
	.year-text {
		color: #999;
		font-size: 28upx
	}
	.group-total {
		flex: 1;
	}
	.group-total-title {
		color: #333;
		font-size: 36upx;
		font-weight: bold;
		height: 68upx;
		line-height: 68upx;
		margin-left: 40upx;
	}
	.group-total-all {
		display: flex;
		flex-wrap: nowrap;
		margin-left: 40upx;
		color: $u-type-info;
	}
	.income-title {
		color: $u-type-error-disabled;
	}
	.out-title {
		color: $u-type-success-disabled;
	}
	.line-1 {
		margin-right: 20upx;
		margin-left: 20upx;
		margin-top: 6upx;
		height: 20upx;
		width: 1px;
		background: rgba(0, 0, 0, 0.4);
	}
	.tips {
		color: rgba(0, 0, 0, 0.4);
		font-size: 20upx;
		margin-left: 20upx;
	}
}
.timeline-body {
	padding: 24upx 0 24upx 32upx;
	.timeline-item {
		padding: 10upx 32upx;
		background: rgba(0, 0, 0, 0.04);
		display: flex;
		flex-wrap: nowrap;
		.date-text {
			color: rgba(0, 0, 0, 0.4);
			width: 88upx;
		}
		.date-number {
			font-size: 16px;
		}
		.timeline-info {
			flex: 1;
		}
		.timeline-title {
			color: #333;
			font-size: 36upx;
			font-weight: bold;
			height: 68upx;
			line-height: 68upx;
		}
		.timeline-number {
			color: $u-type-success;
			font-size: 42upx;
			line-height: 100upx;
		}
	}
}
</style>
