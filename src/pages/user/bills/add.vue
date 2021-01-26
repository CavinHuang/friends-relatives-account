<template>
  <view class="page-container">
    <view class="add-form">
      <u-form :model="form" ref="uForm" :label-width="140">
        <u-form-item label="名称"
          ><u-input v-model="form.name" placeholder="请输入名称"
        /></u-form-item>
        <u-form-item label="类型"
          ><u-input
            v-model="form.sex"
            type="select"
            placeholder="请选择类型"
            @click="sexSelectState = true"
        /></u-form-item>
        <u-form-item label="关系备注"
          ><u-input v-model="form.name"
        /></u-form-item>
        <u-button @click="submit" type="success">提交</u-button>
      </u-form>
    </view>
    <u-select
      mode="single-column"
      :list="selectList"
      v-model="selectShow"
      @confirm="selectConfirm"
    ></u-select>
    <u-select
      mode="single-column"
      :list="sexMap"
      v-model="sexSelectState"
      @confirm="selectConfirm"
    ></u-select>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
@Component({}) //必须
export default class Index extends Vue {
  selectShow = false;
  sexSelectState = false;
  selectList = [
    {
      value: "电子产品",
      label: "电子产品",
    },
    {
      value: "服装",
      label: "服装",
    },
    {
      value: "工艺品",
      label: "工艺品",
    },
  ];
  sexMap = [
    {
      value: "1",
      label: "男",
    },
    {
      value: "2",
      label: "女",
    },
    {
      value: "3",
      label: "未知",
    },
  ];
}
</script>

<style lang="scss">
.add-form {
  padding: 32upx;
}
</style>