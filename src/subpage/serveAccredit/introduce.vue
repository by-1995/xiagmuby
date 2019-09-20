<template>
  <div>
    <div class="d2">
      <h3>1、彩之云用户授权服务</h3>
      <p>
        彩之云用户授权服务是一个可以给用户授权的微服务
        彩之云用户授权服务是一个可以给用户授权的微服务
        彩之云用户授权服务是一个可以给用户授权的微服务
      </p>
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
              <el-checkbox class="put4" v-model="checked"></el-checkbox>
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
      <h3>2、功能介绍</h3>
      <div class="d3-1" v-for="(t,i) in nodes" :key="i">
        <h5>
          <span></span>2.1用户授权服务
        </h5>
        <p>用户授权服务是一个可以{{i}}给用{{t}}户受权的服务</p>
      </div>
      <div class="d3-2">
        <img src="@/assets/img/u156.png" alt="">
      </div>
      <div class="d3-3">
        <evaluate></evaluate>
      </div>
    </div>
  </div>
</template>
<script>
import evaluate from "@/subpage/compon/evaluate.vue";
export default {
  components: {
    evaluate
  },
  data() {
    return {
      nodes: { q: 1, w: 2, e: 3 },
      nodew: [11, 22, 33],
      checked:false
    };
  },
  mounted(){
    // console.log($(".blue"))
    $(".blue").removeClass("blue").next().removeClass("block");//查找父组件中的$(".blue")元素
    $("ul>li:first-child>a").addClass("blue")
    $("ul>li:first-child>div").addClass("block")
    console.log('dsjhfuwqo')
  }
};
</script>
<style scoped>
.clear {
  clear: both;
}
h3 {
  font-size: 16px;
  font-family: "微软雅黑";
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 8px;
  color: #4C4A65;
}
p{
  font-size: 14px;
  color:  #2E0036;
}
h5{
  color:  #2E0036;
}
.d1,
.d2,
.d3 {
  margin-left: 45px;
}
.d1 > ul {
  display: flex;
}
.d1 > ul > li {
  /* width: 60px; */
  /* height: 20px; */
  margin-right: 40px;
  /* background-color: aqua; */
}
.d1 > ul > li > a {
  display: block;
  /* width: 60px; */
  /* height: 20px; */
  /* line-height: 20px; */
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  font-family: "微软雅黑";
  color: black;
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
.d3>div{
  margin-bottom: 8px;
}
.d3>div>h5{
  font-size: 14px;
  font-weight: 500;
  font-family: "微软雅黑";

}
.d3>div>p{
  margin-left: 19px;
}
.d3-2{
  margin-left: 19px;
}
.d3-3{
  margin-top: 60px;
  padding-bottom: 50px;
}
</style>