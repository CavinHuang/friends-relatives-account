<template>
	<view class="page-container">
		<view class="user-header">
			<u-avatar class="user-avatar" :src="src" size="120"></u-avatar>
		</view>
		<view class="user-actions">
			<u-cell-group>
				<u-cell-item icon="share" title="亲友"></u-cell-item>
				<u-cell-item icon="share" title="时间"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
.user-header {
	height: 200upx;
	background: $uni-color-success;
	.u-avatar {
		margin-top: 40upx;
		margin-left: 32upx;
	}
}
</style>
