<template>
  <div class="container">
    <div class="hei" ref="hello" style="background-color: #eaedf0">
      <div class="over">
        <a href="javascript:;">鉴权微服务</a>
      </div>
      <el-menu
        :default-active="0"
        :default-openeds="['2']"
        class="el-menu-vertical-demo"
        background-color="#eaedf0"
        text-color="#000"
        active-text-color="#000"
        :unique-opened="false"
        router
      >
        <el-submenu class="padding0px" style="padding-left:0px;">
          <el-menu-item style="padding:0;padding-left:20px;height:56px;minWidth:180px;width:180px" slot="title" :index="'/myApply/overview'">概述</el-menu-item>
        </el-submenu>
        <el-submenu :open="3" v-for="(item,index) of nodes" :key="index" :index="item.index">
          <span style="display:block;minWidth:160px" slot="title">{{item.name}}</span>
          <el-menu-item
            style="padding:0 20px 0 40px;width:140px;minWidth:200px"
            v-for="(item2,index) of item.children"
            class="itempadding"
            :key="index"
            :index="item2.path"
          >{{item2.name}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",
  data() {
    return {
      nodes: [
        // { name: "概述", index: "1" },
        {
          name: "开发指南",
          menuShow: true,
          iconCls: "iconfont icon-yonghu1",
          leaf: true,
          index: "2",
          children: [
            {
              path: "/myApply/help",
              name: "注册和获取秘钥",
              iconCls: "iconfont icon-yonghu1",
              index: "2"
            },
            {
              path: "/myApply/createApply",
              name: "获取秘钥>>",
              iconCls: "iconfont icon-yonghu1",
              index: "2"
            }
          ]
        },
        {
          name: "接口文档",
          menuShow: true,
          index: "3",
          children: [
            {
              path: "/myApply/serveacc/intr",
              name: "服务授权",
              iconCls: "iconfont icon-yonghu1",
              index: "2"
            },
            {
              path: "/myApply/overview",
              name: "应用列表授权",
              iconCls: "iconfont icon-yonghu1",
              index: "2"
            }
          ]
        }
      ],
      collapsed: false,
      isCollapse: false
    };
  },
  methods: {
    handleNodeClick(data) {
      // console.log(data);
    }
  },
  mounted() {
     var ewq=$(".padding0px").children()
     ewq.css("padding-left","0px")
     console.log($(".padding0px").next().next().children().first().next().children().first()[0])
     console.log($(".itempadding").attr("index")+123)
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 200px;
}
.over {
  width: 200px;
  background-color: #f2f3f4;
}
.over > a {
  width: 180px;
  height: 56px;
  display: block;
  // text-align: center;
  padding-left: 20px;
  line-height: 56px;
  background-color: #eaedf0;
}
.over > a:hover {
  background-color: #b7b9bd;
}
aside {
  min-width: 50px;
  background: #eaedf0;
  height: 100%; /*写给不支持calc()的浏览器*/
  // height: -moz-calc(100% - 80px);
  // height: -webkit-calc(100% - 80px);
  // height: calc(100% - 80px);
  &::-webkit-scrollbar {
    display: none;
  }
  &.showSidebar {
    overflow-x: hidden;
    overflow-y: auto;
  }
  .el-menu {
    height: 100%; /*写给不支持calc()的浏览器*/
    // height: -moz-calc(100% - 80px);
    // height: -webkit-calc(100% - 80px);
    // height: calc(100% - 80px);
    border-radius: 0px;
    background-color: #eaedf0;
    color: #000;
  }
  .el-submenu .el-menu-item {
    min-width: 60px;
  }
  .el-menu {
    width: 180px;
  }
  .el-menu--collapse {
    width: 60px;
  }
  .el-menu .el-menu-item,
  .el-submenu .el-submenu__title {
    height: 30px;
    line-height: 30px;
  }
  .el-menu-vertical-demo {
    width: 180px;
  }
}
.hei {
  height: 100%;
}
</style>
<style lang="scss">
.showSidebar .el-submenu__title span {
  font-size: 12px;
}
.el-submenu__icon-arrow.el-icon-arrow-down {
  opacity: 0;
}
.el-icon-caret-right.el-submenu__icon-arrow {
  position: relative;
  top: 4px;
  left: 0px;
  color: #fff;
  width: 14px;
  height: 14px;
  font-size: 12px;
  margin-right: 8px;
}
.el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {
  transform: rotateZ(90deg);
}
</style>