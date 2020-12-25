<template>
	<view class="page-container">
		<u-collapse>
			<u-collapse-item :title="item.head" v-for="(item, index) in itemList" :key="index">
				{{item.body}}
			</u-collapse-item>
		</u-collapse>
	</view>
</template>

<script lang="ts">
import { Component,Vue ,Watch} from "vue-property-decorator";

@Component({}) //必须
export default class Index extends Vue {
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

<style>
</style>
