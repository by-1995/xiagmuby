<template>
  <div>
    <div id="content">
      <h3>1、相关步骤</h3>
      <div class="d1">
        <h5>
          <span></span>第一步：申请物业云账号
        </h5>
        <p>
          彩之云开放平台所有服务申请均需在登录彩之云账号前提下进行。使用服务前请先申请注册彩之云云账号。
          <a href="javascript:;">点此申请</a>
        </p>
      </div>
      <div class="d2">
        <h5>
          <span></span>第二步：申请成为开发者
        </h5>
        <div>
          <div class="d2-1">
            <p>主要行业应用：</p>
            <p>主要业务：</p>
            <p>网址：</p>
          </div>
          <div class="d2-2">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <p>
              <el-checkbox class="put4" v-model="checked2"></el-checkbox>
              <span>阅读并接受</span>
              <a href="javascript:;">《开放平台网址服务条款》</a>
            </p>
            <p>
              <button>立即登录</button>
              <button>下一步，完善企业资料</button>
            </p>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <div class="d3">
        <h5>
          <span></span>第三步：创建应用
        </h5>
        <div>
          <img src="@/assets/img/u198.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked2:true
    };
  }
};
</script>
<style scoped>
.clear{
  clear: both;
}
#content {
  width: 100%;
  /* height: 500px; */
  /* background: #f5f5f5; */
  padding-left: 45px;
  padding-top: 20px;
}
h3 {
  font-size: 16px;
  font-family: "微软雅黑";
  font-weight: 600;
  position: relative;
  color: #4C4A65;
  margin-bottom: 8px;
}
h5 {
  font-size: 14px;
  font-weight: 400;
  font-family: "微软雅黑";
  color: #2E0036;
}
p{
  font-family: "微软雅黑";
  font-size: 14px;
  color:  #2E0036;
}
h5 > span {
  display: inline-block;
  width: 4px;
  height: 4px;
  background-color: #000;
  border-radius: 2px;
  position: relative;
  left: 2px;
  top: -3px;
  margin-right: 15px;
}
.d1>P>a{
  color: #007EFF;
}
.d1 > p,
.d2 > div,
.d3 > div {
  margin-left: 19px;
  font-size: 14px;
  margin-bottom: 23px;
}
.d2 > div {
  width: 500px;
  /* height: 200px; */
  margin-top: 12px;
}
.d2 > div > .d2-1 {
  width: 120px;
  /* height: 200px; */
  float: left;
}
.d2 > div > .d2-2 {
  width: 380px;
  /* height: 200px; */
  float: left;
}
.d2-1 > p {
  text-align: right;
  line-height: 22px;
  height: 22px;
  font-size: 12px;
  margin-bottom: 22px;
}
.d2-2 > input {
  margin-bottom: 22px;
  width: 300px;
}
.d2-2 > p{
  margin-bottom: 22px;
}
.d2-2 > p > span,
.d2-2 > p > a {
  font-size: 12px;
}
.d2-2 > p > a{
  color: #007EFF;
}
.d2-2 > p > input {
  position: relative;
  top: 4px;
  width: 14px;
  height: 14px;
  margin: 0px;
}
.d2-2>p>button{
  padding: 5px;
  background-color: #f5f5f5;
  border:rgb(199, 199, 206) solid 1px;
  border-radius: 5px;
  color: rgb(126, 126, 131);
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;

}
.d3>h5{
  padding-bottom: 20px;
}
</style>