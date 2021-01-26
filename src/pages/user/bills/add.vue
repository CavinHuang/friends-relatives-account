<template>
  <view class="page-container">
    <view class="add-form">
      <u-form :model="formData" ref="uForm1" :label-width="140">
        <u-form-item label="名称" prop="name">
          <u-input v-model="formData.name" placeholder="请输入名称" />
        </u-form-item>
        <u-form-item label="类型" prop="type"
          ><u-input
            v-model="selectTypeLabel"
            type="select"
            placeholder="请选择类型"
            @click="typeSelectStatus = true"
        /></u-form-item>
        <u-form-item label="备注" prop="remark"
          ><u-input v-model="formData.remark"
        /></u-form-item>
        <u-button @click="submit" type="success">提交</u-button>
      </u-form>
    </view>
    <u-select
      mode="single-column"
      :list="typeMap"
      v-model="typeSelectStatus"
      @confirm="selectConfirm"
    ></u-select>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import billService from "@/global/service/billService";

interface formDataType {
  name: string;
  type: number;
  icon?: string;
  remark: string;
  uid?: number;
}
@Component({}) //必须
export default class Index extends Vue {
  typeSelectStatus = false;
  private typeMap = [
    {
      value: "1",
      label: "进账",
    },
    {
      value: "2",
      label: "出账",
    },
  ];
  private rules = {
    name: [
      {
        required: true,
        message: "请输入名称",
        // 可以单个或者同时写两个触发验证方式
        trigger: ["change", "blur"],
      },
    ],
    type: [
      {
        required: true,
        message: "请选择类型",
        trigger: ["change", "blur"],
      },
    ],
  };
  private userInfo: any = null;
  private selectTypeLabel: string = "";
  private formData: formDataType = {
    name: "",
    type: 1,
    remark: "",
  };
  selectConfirm(e: any) {
    this.formData.type = e[0].value;
    this.selectTypeLabel = e[0].label;
  }
  // 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
  onReady() {
    (this.$refs.uForm1 as any).setRules(this.rules);
  }
  onShow() {
    this.userInfo = uni.getStorageSync("userInfo");
  }
  submit() {
    (this.$refs.uForm1 as any).validate((valid: any) => {
      if (valid) {
        this.formData.uid = this.userInfo.id;
        billService.add(this.formData).then((res: any) => {
          if (res) (this as any).goTo("/pages/user/bills/index");
        });
      } else {
        console.log("验证错误", valid);
      }
    });
  }
}
</script>

<style lang="scss">
.add-form {
  padding: 32upx;
}
</style>