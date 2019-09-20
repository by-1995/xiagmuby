import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home.vue'
import Overview from '@/subpage/overview/overview'
import Help from '@/subpage/loginhelp/help'
import ServeAccredit from '@/subpage/serveAccredit/serveAccredit.vue'
import File from '@/subpage/serveAccredit/file.vue'
import Intr from '@/subpage/serveAccredit/introduce.vue'
import UserGuide from '@/subpage/serveAccredit/userGuide.vue'
import Faq from '@/subpage/serveAccredit/faq.vue'
import OnlineDebugging from '@/subpage/serveAccredit/onlineDebugging.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/myApply',
    },
    {
      path: '/myApply',
      // name: 'MyApply',
      component: Home,
      redirect:'/myApply/overview',
      children: [
        {
          path: 'overview',
          // name: 'ViewApply',
          component: Overview,
          meta: {
            title: '概述'
          }
        },
        {
          path: 'help',
          // name: 'help',
          component: Help,
          meta: {
            title: '注册和获取秘钥'
          }
        },
        {
          path: 'serveacc',
          // name: 'serveacc',
          component: ServeAccredit,
          redirect: '/myApply/serveacc/intr',
          meta: {
            title: '服务授权'
          },
          children: [
            {
              path: "intr",
              // name:"intr",
              component:Intr,
              meta: {
                title: '服务授权'
              },
            },
            {
              path: "file",
              // name:"file",
              component:File,
              meta: {
                title: '服务授权'
              },
            },
            {
              path: "faq",
              // name:"faq",
              component:Faq,
              meta: {
                title: '服务授权'
              },
            },
            {
              path: "userGuide",
              // name:"userGuide",
              component:UserGuide,
              meta: {
                title: '服务授权'
              },
            },
            {
              path: "debugging",
              // name:"debugging",
              component:OnlineDebugging,
              meta: {
                title: '服务授权'
              },
            }
          ],
        },
      ]
    },
    {
      path: "*", component: { template: `<h1 style="color:red;fontSize:60px">404 Not Font </h1>`, },
    },
  ]
})
