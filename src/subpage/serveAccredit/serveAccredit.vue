<template>
  <div>
    <div class="container">
    <div class="d1">
      <ul>
        <li>
          <a class="blue" @click="intr" href="javascript:;">服务介绍</a>
          <div class="block ab"></div>
        </li>
        <li>
          <a @click="file" href="javascript:;">服务文档</a>
          <div class="ab"></div>
        </li>
        <li>
          <a @click="user" href="javascript:;">使用指南</a>
          <div class="ab"></div>
        </li>
        <li>
          <a @click="faq" href="javascript:;">常见问题</a>
          <div class="ab"></div>
        </li>
        <li>
          <a @click="line" href="javascript:;">在线调试</a>
          <div class="ab"></div>
        </li>
      </ul>
    </div>
    <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nodes: { q: 1, w: 2, e: 3 },
      nodew: [11, 22, 33]
    };
  },
  mounted() {
    console.log(123456)
    this.$router.push("/myApply/serveacc/intr");
    $(".blue").removeClass("blue").next().removeClass("block");
    $("ul>li:first-child>a").addClass("blue")
    $("ul>li:first-child>div").addClass("block")
    // this.$router.push("/myApply/myApply/Intr");
    $("li>a").click(function() {
      if ($(this).hasClass("blue") == false) {
        $(".blue").removeClass("blue").next().removeClass("block");
        $(this).addClass("blue");
        $(this).next().addClass("block");
      }
    });
  },
  methods: {
    intr() {
      this.$router.push("/myApply/serveacc/intr");
    },
    file() {
      this.$router.push("/myApply/serveacc/file");
    },
    user() {
      this.$router.push("/myApply/serveacc/userGuide");
    },
    faq() {
      this.$router.push("/myApply/serveacc/faq");
    },
    line() {
      this.$router.push("/myApply/serveacc/debugging");
    }
  }
};
</script>
<style scoped>
.clear {
  clear: both;
}
.container{
  background-color: #fff;
}
p {
  font-size: 14px;
}
.d1 {
  padding-top: 20px;
}
.d1 {
  margin-left: 45px;
}
.d1 > ul {
  display: flex;
}
.d1 > ul > li {
  margin-right: 40px;
  position: relative;
}
.d1 > ul > li > div {
  width: 20px;
  height: 3px;
  position: absolute;
  left: 50%;
  top: 26px;
  transform: translateX(-50%);
  background-color: #00f;
  display: none;
}
.block {
  display: block !important;
}
.blue {
  color: #00f !important;
}
.d1 > ul > li > a {
  display: block;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  font-family: "微软雅黑";
  color: #4c4a65;
}
</style>