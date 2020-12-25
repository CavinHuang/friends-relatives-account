<template>
	<view class="page-container">
		<u-cell-group>
			<u-cell-item title="个人设置" :arrow="false">
				<u-switch v-model="checked" slot="right-icon"></u-switch>
			</u-cell-item>
			<u-cell-item title="会员等级" :arrow="false">
				<u-switch v-model="checked" slot="right-icon"></u-switch>
			</u-cell-item>
		</u-cell-group>
		<view class="page-footer">
			<u-button type="success" @click="goTo('/pages/user/bills/add')"> +新增 </u-button>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
.page-footer {
	position: fixed;
	bottom: 0;
	margin: 32upx;
	left: 0;
	right: 0;
}
</style>
