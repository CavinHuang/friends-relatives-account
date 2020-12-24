<template>
  <view class="page-container">
    <view class="add-form">
      <u-form :model="form" ref="uForm">
        <u-form-item label="姓名"><u-input v-model="form.name" /></u-form-item>
        <u-form-item :label-position="labelPosition" label="所属亲友" prop="goodsType" label-width="150">
          <u-input :border="border" type="select" :select-open="selectShow" v-model="model.goodsType" placeholder="请选择商品类型" @click="selectShow = true"></u-input>
        </u-form-item>
        <u-form-item label="性别"><u-input v-model="form.sex" type="select" /></u-form-item>
        <u-form-item label="关系备注"><u-input v-model="form.name" /></u-form-item>
        <u-button @click="submit" type="success">提交</u-button>
      </u-form>
    </view>
  </view>
</template>