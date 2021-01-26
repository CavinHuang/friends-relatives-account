<template>
	<view class="page-container">
		<view class="add-header">
			<u-input class="add-input" type='number' :clearable="true" placeholder="请输入金额" :trim="true" />
		</view>
		<view class="add-cates">
			<u-cell-group>
				<u-cell-item icon="man-add-fill" title="亲友" :arrow="true" arrow-direction="down"></u-cell-item>
				<u-cell-item icon="clock" title="时间" :arrow="true" arrow-direction="down"></u-cell-item>
				<u-cell-item icon="more-circle-fill" title="备注" :arrow="false" :use-label-slot="true">
					<u-input v-model="value" type="text" :border="false" />
				</u-cell-item>
			</u-cell-group>
		</view>
		<view class="add-footer">
			<u-button type="success">保存</u-button>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
.add-header {
	border-bottom: 4upx solid $uni-color-success;
	input {
		height: 120upx;
		line-height: 120upx;
		padding: 0 16upx;
		font-size: 44upx !important;
		color: $uni-color-success !important;
		font-weight: bold;
	}
}
</style>
