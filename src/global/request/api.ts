const MODE = process.env.NODE_ENV
const PRODUCTION_PREFIX = "";
const DEVELOPMENT_PREFIX = "http://127.0.0.1:3000"; //填写服务器地址
const PREFIX = MODE === "production" ? PRODUCTION_PREFIX : DEVELOPMENT_PREFIX;

export default {
  MODE,
  // 用户
  user: `${PREFIX}/v1/user`,
  // 商品详情
  productDetail: (id: number) => `${PREFIX}/v1/mini/products/${id}`,
  // 收藏商品
  collectProduct: `${PREFIX}/v1/collection`,
  // 保存用户信息
  saveUser: `${PREFIX}/wechat/saveUserInfo`,
  // 获取亲友列表
  friendList: `${PREFIX}/friend/lists`,
  // 增加亲友
  addfriend: `${PREFIX}/friend/add`,

  // 增加分类
  addBillCate: `${PREFIX}/bill_cate/add`,
  // 分类列表
  billCateList: `${PREFIX}/bill_cate/lists`,
  // 分类更细
  updateBillCate: `${PREFIX}/bill_cate/update`,
  // 记账
  billSave: `${PREFIX}/bill/add`,
  // 时间流水
  billList: `${PREFIX}/bill/lists`,
};
