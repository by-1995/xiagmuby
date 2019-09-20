import axios from "axios"
import qs from "qs"
// import {message} from 'antd'
import {
  message
} from 'element-ui'
var url = document.domain,
  baseurl;



if (!url || url.indexOf('test') !== -1 || url === 'localhost') { //测试环境
  //baseurl
} else if (url === "yun-beta.colourlife.com" || url.indexOf('beta') !== -1) { //预发环境
  //baseurl
} else { //正式环境
  //baseurl
}
//响应拦截
axios.interceptors.response.use(function (response) {
  //console.log(message('消息提示'))
  if (response.data.code === 400) {
    //window.location.href = _baseUrl+'/#/login';
    localStorage.clear();
    message.error(response.data.message);
  }
  if (response.data.code !== 0) {
    message.error(response.data.message);
  }
  return response;
}, function (error) {
  // Do something with response error  
  return Promise.reject(error)
})
export default {
  //4.用户菜单列表
  // getUserMenuList: params => {
  //     return axios.get(`${_baseUrl}/api/user/menu/list`, {
  //         params: params
  //     }).then(res => res.data)
  // },
  //5.创建菜单
  // createMenu: params => {
  //     return axios.post(`${_baseUrl}/api/menu/create`, qs.stringify(params)).then(res => res.data)
  // },
  //获取时间
  getTime: params => {
    var date = params
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
  },
}
