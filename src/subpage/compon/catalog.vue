<template>
  <div>
    <div class="container">
      <h3>目录</h3>
      <ul>
        <li v-for="(t,i) of nodes" :key="i">
          <a class="a1" href="javascript:;">
            <span></span>
            {{t.name}}
          </a>
          <a class="a2" href="javascript:;" v-for="(q,i) of t.children" :key="i">{{q}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nodes: [
        { name: "1、服务介绍" },
        {
          name: "2、功能介绍",
          children: ["2.1 彩之云用户授权", "2.2 彩之云用户授权"]
        },
        { name: "3、使用指南" },
        { name: "4、常见问题" },
        { name: "5、在线调试" }
      ]
    };
  },
  mounted() {
    $("ul>li:first-child>a:first-child")
      .addClass("blue")
      .children()
      .addClass("optiy");
    $(".a1").click(function() {
      if (
        $(this)
          .children()
          .hasClass("optiy") == false
      ) {
        $(".optiy").removeClass("optiy");
        $(".blue").removeClass("blue");
        $(this)
          .children()
          .addClass("optiy")
          .parent()
          .addClass("blue");
      }
    });
    $(".a2").click(function() {
      if ($(this).hasClass("blue") == false) {
        $(".optiy").removeClass("optiy");
        $(".blue").removeClass("blue");
        $(this)
          .siblings()
          .first()
          .children()
          .addClass("optiy");
        $(this)
          .addClass("blue")
          .siblings()
          .first()
          .addClass("blue");
      }
    });
  }
};
</script>
<style scoped>
.container {
  border-left: 2px solid #d8d8d8;
}
h3 {
  padding-left: 10px;
  margin-bottom: 13px;
  font-size: 14px;
  color: #4c4a65;
  font-weight: 600;
}
ul {
  padding-left: 10px;
}
ul > li > a {
  display: block;
  font-size: 14px;
  margin-bottom: 13px;
  color: #7b808a;
  line-height: 20px;
  position: relative;
  font-family: "微软雅黑";
}
ul > li > a:hover {
  color: #007eff;
}
ul > li > a > span {
  display: inline-block;
  position: absolute;
  left: -11px;
  height: 20px;
  width: 2px;
  background-color: #007eff;
  opacity: 0;
}
.a2 {
  padding-left: 20px;
}
.optiy {
  opacity: 1 !important;
}
.blue {
  color: #007eff;
}
</style>