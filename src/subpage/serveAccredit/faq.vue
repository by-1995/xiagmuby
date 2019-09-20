<template>
  <div>
    <div class="container">
      <div class="d1">
        <h3>1、常见问题</h3>
        <div class="d1-1" v-for="(t,i) of nodes" :key="i">
          <h5><span></span>2.1 士大夫撒埃尔文范德萨阿瓦</h5>
          <p>的鬼斧神工双方各是个艾尔阿维尔切</p>
        </div>
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
  data(){
    return{
      nodes:[1,2]
    }
  }
};
</script>
<style scoped>
.container {
  /* background-color: #666; */
}
.container > div {
  margin-left: 45px;
}
.clear {
  clear: both;
}
h3{
  font-size: 16px;
  font-family: "微软雅黑";
  font-weight: 600;
  position: relative;
  color: #4C4A65;
  margin-bottom: 8px;
  margin-top: 32px;
}
h5{
  font-size: 14px;
  font-family: "微软雅黑";
  font-weight: 400;
  color:  #2E0036;
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
.d1>div>p{
  margin-left: 19px;
}
.d1-1{
  margin-bottom: 8px;
}
.d3{
  margin-top: 60px;
  padding-bottom: 50px;
}
</style>