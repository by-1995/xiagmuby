<template>
  <div>
    <!-- <headers></headers> -->
    <div class="home">
      <div class="height700"></div>
      <div class="left">
        <!-- <sidebar></sidebar> -->
      </div>
      <left-menu></left-menu>
      <div class="left" style="background-color:#F2F3F4;width:20px;"></div>
      <div class="right">
        <div class="top" style="background-color:#F2F3F4;height:20px"></div>
        <right-header></right-header>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import api from "./../api/api";
import headers from "./header";
import sidebar from "./sidebar";
import LeftMenu from "../subpage/layout/leftMenu";
import RightHeader from "../subpage/layout/rightHeader";
export default {
  name: "name",
  components: {
    headers,
    sidebar,
    "left-menu": LeftMenu,
    "right-header": RightHeader
  },
  data() {
    return {
      home: "homes"
    };
  },
  mounted() {
    var GetQueryString = param => {
      const reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)");
      const r =
        window.location.search.substr(1).match(reg) ||
        window.location.hash
          .substring(window.location.hash.search(/\?/) + 1)
          .match(reg);
      if (r != null) {
        return decodeURIComponent(r[2]);
      }
    };
    sessionStorage.setItem(
      "access_token",
      this.$route.query.access_token || GetQueryString("access_token")
    );
    api
      .getUserInfo({
        access_token:
          this.$route.query.access_token || GetQueryString("access_token")
      })
      .then(res => {
        //console.log(res)
      });
  }
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
}
.home .right {
  flex: 1;
  // padding: 20px 0 0 20px;
  // background-color: #FFF2F3F4;
}
.height700 {
  width: 0px;
  height: 700px;
  position: relative;
  left: 0;
}
</style>
