<template>
	<view class="page-container">
		<u-index-list :scrollTop="scrollTop" :index-list="indexList">
			<view v-for="(item, index) in list" :key="index">
				<u-index-anchor :index="item.letter" />
				<view class="list-cell u-border-bottom" v-for="(item1, idx) in item.data" :key="idx + 'item'">
					<view class="user-item">
						<u-avatar :text="item1.name" bg-color="rgba(0, 0, 0, 0.06)"></u-avatar>
						<view class="user-name">{{item1.name}}</view>
					</view>
				</view>
			</view>
		</u-index-list>
		<view class="page-footer">
			<u-button type="success"> +新增 </u-button>
		</view>
	</view>
</template>
<script lang="ts">
import { Component,Vue ,Watch} from "vue-property-decorator";
import indexList from "@/_tmp";
const letterArr = indexList.list.map(val => {
	return val.letter;
})
@Component({}) //必须
export default class Index extends Vue {
	scrollTop = 0
	indexList = letterArr
	list = indexList.list
	onPageScroll(e: any) {
		this.scrollTop = e.scrollTop;
	}
}
</script>
<style lang="scss" scoped>
.list-cell {
	display: flex;
	box-sizing: border-box;
	width: 100%;
	padding: 10px 24rpx;
	overflow: hidden;
	color: #323233;
	font-size: 14px;
	line-height: 24px;
	background-color: #fff;
}
.user-item {
	height: 88upx;
	line-height: 88upx;
	display: flex;
	flex-wrap: nowrap;
	.user-name {
		margin-left: 32upx;
	}
}
.page-container {
	margin-bottom: 120upx;
}
.page-footer {
	margin: 32upx;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 100;
}
</style>