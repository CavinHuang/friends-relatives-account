<template>
  <view class="page-container">
    <view class="add-type">
      <u-subsection
        :list="types"
        :current="currentType"
        inactive-color="#82848a"
        active-color="#ffffff"
        :button-color="buttonColor"
        @change="subsectionChange"
      ></u-subsection>
    </view>
    <view class="add-header" :class="currentType === 0 ? 'type_0' : 'type_1'">
      <u-input
        class="add-input"
        type="number"
        v-model="formData.number"
        :clearable="true"
        placeholder="请输入金额"
        :trim="true"
      />
    </view>
    <view class="add-cates">
      <u-cell-group>
        <u-cell-item
          icon="man-add-fill"
          title="亲友"
          :arrow="true"
          @click="selectShow = true"
        >
          <text slot="right-icon">{{
            selectFriendLabel ? selectFriendLabel : "请选择亲友"
          }}</text>
        </u-cell-item>
        <u-cell-item
          icon="tags"
          title="分类"
          :arrow="true"
          @click="typeSelectStatus = true"
        >
          <text slot="right-icon">{{
            selectTypeLabel ? selectTypeLabel : "请选择分类"
          }}</text>
        </u-cell-item>
        <u-cell-item
          icon="clock"
          title="时间"
          :arrow="true"
          @click="timeShow = true"
        >
          <text slot="right-icon">{{
            selectTimeLabel ? selectTimeLabel : "请选择时间"
          }}</text>
        </u-cell-item>
        <u-cell-item
          icon="more-circle-fill"
          title="备注"
          :arrow="false"
          :use-label-slot="true"
        >
          <u-input v-model="value" type="text" :border="false" />
        </u-cell-item>
      </u-cell-group>
    </view>
    <view class="add-footer">
      <u-button type="success" @click="submit">保存</u-button>
    </view>
    <u-select
      mode="single-column"
      :list="friends"
      v-model="selectShow"
      @confirm="selectConfirm"
    ></u-select>
    <u-select
      mode="single-column"
      :list="cates"
      v-model="typeSelectStatus"
      @confirm="selectCateConfirm"
    ></u-select>
    <u-picker
      mode="time"
      v-model="timeShow"
      :params="params"
      :start-year="now - 5"
      :end-year="now + 5"
      @confirm="timeConfirm"
    ></u-picker>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import billService from "@/global/service/billService";
import friendService from "@/global/service/friendService";

interface timePickerType {
  year: string;
  month: string;
  day: string;
}

@Component({})
export default class Index extends Vue {
  private friends = [];
  private selectFriendLabel = "";
  private types = [
    {
      name: "进账",
    },
    {
      name: "出账",
    },
  ];
  private selectTypeLabel = "";
  private typeSelectStatus = false;
  private cates = [];
  private currentType = 0;
  private buttonColor = "";
  private userInfo: any = null;

  private selectShow = false;
  private selectTimeLabel = "";
  private timeShow = false;
  private now = new Date().getFullYear();
  private params = {
    year: true,
    month: true,
    day: true,
    hour: false,
    minute: false,
    second: false,
  };

  private formData = {
    friend: "",
    type: 1,
    bill_cate: "",
    number: "",
    remark: "",
    time: 0,
    uid: 0,
  };

  selectConfirm(e: any) {
    this.formData.friend = e[0].value;
    this.selectFriendLabel = e[0].label;
  }
  selectCateConfirm(e: any) {
    this.formData.bill_cate = e[0].value;
    this.selectTypeLabel = e[0].label;
  }
  timeConfirm(time: timePickerType) {
    const string = time.year + "/" + time.month + "/" + time.day;
    this.selectTimeLabel = string;
    this.formData.time = this.timeIntToInt(new Date(string).getTime());
  }

  @Watch("currentType", { immediate: true })
  onChangeValue(newVal: number = 0) {
    this.buttonColor = newVal === 0 ? "#19be6b" : "#fa3534";
    this.formData.type = newVal === 0 ? 1 : 2;
  }
  subsectionChange(index: number) {
    this.currentType = index;
  }
  timeIntToInt(time: number) {
    return Math.ceil(time / 1000);
  }
  onShow() {
    this.userInfo = uni.getStorageSync("userInfo");
    console.log(this.now);
    friendService
      .lists({ uid: this.userInfo.id, all: true })
      .then((res: any): any => {
        res = res.map((item: any) => {
          return {
            value: item.id + "",
            label: item.name,
          };
        });
        this.friends = res;
      });

    billService.lists({ uid: this.userInfo.id }).then((res: any) => {
      console.log("获取的数据", res);
      res = res.map((item: any) => {
        return {
          value: item.id + "",
          label: item.name,
        };
      });
      this.cates = res || [];
    });
  }
  submit() {
    if (!this.formData.friend) {
      uni.showToast({
        icon: "none",
        title: "请选择亲友",
      });
      return false;
    }
    if (!this.formData.bill_cate) {
      uni.showToast({
        icon: "none",
        title: "请选择账单分类",
      });
      return false;
    }
    if (!this.formData.number || this.formData.number === "0") {
      uni.showToast({
        icon: "none",
        title: "请输入金额",
      });
      return false;
    }
    if (!this.formData.time) {
      this.formData.time = this.timeIntToInt(new Date().getTime());
    }
    this.formData.uid = this.userInfo.id;
    billService.save(this.formData).then((res: any) => {
      if (res) {
        uni.showToast({
          icon: "none",
          title: "记录成功！",
        });
        (this as any).goTo("/pages/timeline/index");
      }
    });
  }
}
</script>

<style lang="scss">
.add-header {
  input {
    height: 120upx;
    line-height: 120upx;
    padding: 0 16upx;
    font-size: 44upx !important;
    color: $uni-color-success !important;
    font-weight: bold;
  }
  &.type_0 {
    border-bottom: 4upx solid $uni-color-success;
    color: $uni-color-success;
    input {
      color: $uni-color-success !important;
    }
  }
  &.type_1 {
    border-bottom: 4upx solid $u-type-warning;
    input {
      color: $u-type-warning !important;
    }
  }
}
.add-footer {
  margin: 40upx 32upx;
}
</style>
