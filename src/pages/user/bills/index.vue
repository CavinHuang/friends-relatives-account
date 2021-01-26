<template>
  <view class="page-container">
    <u-cell-group>
      <u-cell-item
        v-for="(item, index) in listsData"
        :title="item.name"
        :arrow="false"
        :key="item.id"
      >
        <u-switch
          v-model="item.status"
          slot="right-icon"
          @change="statusChange($event, index)"
        ></u-switch>
      </u-cell-item>
    </u-cell-group>
    <view class="page-footer">
      <u-button type="success" @click="goTo('/pages/user/bills/add')">
        +新增
      </u-button>
    </view>
  </view>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import billService from "@/global/service/billService";

@Component({})
export default class Index extends Vue {
  private userInfo: any = null;
  private listsData: any = [];
  onShow() {
    this.userInfo = uni.getStorageSync("userInfo");
    billService.lists({ uid: this.userInfo.id }).then((res: any) => {
      console.log("获取的数据", res);
      this.listsData = res || [];
    });
  }
  statusChange(event: boolean, index: number) {
    const _item = this.listsData[index];
    billService
      .update({
        id: _item.id,
        status: event ? 1 : 0,
      })
      .then((res: any) => {
        if (res) {
          uni.showToast({
            title: "更新成功！",
            duration: 2000,
          });
        }
      });
  }
}
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
