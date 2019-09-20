<template>
  <div class="container">
    <!-- <img src="@/assets/img/u03.png" alt=""> -->
    <p>这篇文章是否解决了您的问题 ？</p>
    <a @click="imgclia" href="javascript:;"><img :src="img1" alt=""><span :class="class_a">&nbsp;未解决</span></a>
    &nbsp;
    &nbsp;
    &nbsp;
    <a :class="class_b" @click="imgclib" href="javascript:;"><img :src="img2" alt=""><span>&nbsp;未解决</span></a>
  </div>
</template>
<script>
import imgurl1 from "@/assets/img/icon_wjj01.png";
import imgurl2 from "@/assets/img/icon_wjj02.png";
import imgurl3 from "@/assets/img/icon_yjj01.png";
import imgurl4 from "@/assets/img/icon_yjj02.png";
export default {

  data(){
    return{
      img1:imgurl1,
      img2:imgurl3,
      class_a:{
        blue:false
      },
      class_b:{
        blue:false
      }
    }
  },
  methods:{
    imgclia(){
      if(this.img1==imgurl1){
        this.img1=imgurl2
        this.img2=imgurl3
        this.class_a.blue=true
        this.class_b.blue=false
      }else{
        this.img1=imgurl1
        this.class_a.blue=false
      }
    },
    imgclib(){
      if(this.img2==imgurl3){
        this.img2=imgurl4
        this.img1=imgurl1
        this.class_b.blue=true
        this.class_a.blue=false
      }else{
        this.img2=imgurl3
        this.class_b.blue=false
      }
    }
  }
}
</script>
<style scoped>
p{
  margin-bottom: 10px;
  font-size: 12px;
  font-family: "微软雅黑";
  color: #999FAA;
}
a{
  color: #999FAA;
  font-size: 12px;
  display: inline-block;
  height: 20px;
  /* line-height: 20px; */
}
a>span{
  position: relative;
  top: -7px;
}
a>img{
  width: 20px;
  height: 20px;
  position: relative;
  top: -1px;
}
.blue{
  color: #007EFF !important;
}
.blue2{
  color: #007EFF !important;
}
</style>