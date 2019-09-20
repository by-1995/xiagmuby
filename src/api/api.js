import axios from "axios"
// import {message} from 'antd'
import {message} from 'element-ui'
var url = document.domain, _baseUrl, openUrl;



if(!url||url.indexOf('test')!==-1||url==='localhost'){
    _baseUrl = "https://yun-test.colourlife.com"
    openUrl = "https://cloud-backyardtest.colourlife.com"
}else if (url === "yun-beta.colourlife.com"||url.indexOf('beta')!==-1 ) { //预发环境
    _baseUrl = "https://yun-beta.colourlife.com"
    openUrl = "https://cloud-backyardbeta.colourlife.com"
}else {
    _baseUrl = "https://yun.colourlife.com"
    openUrl = "https://cloud-backyard.colourlife.com"
}
//响应拦截
axios.interceptors.response.use(function (response) { 
    //console.log(message('消息提示'))
    if(response.data.code === 400 ){
        window.location.href = _baseUrl+'/#/login';
        localStorage.clear();
        message.error(response.data.message);
    }
	if(response.data.code !== 0 && response.data.message){
		message.error(response.data.message);
	}
    return response; 
}, function (error) {  
    // Do something with response error  
    return Promise.reject(error)  
})
export default {
    _baseUrl: _baseUrl,
    openUrl: openUrl,
    //3.根据ACCESS_TOKEN获取用户基本信息
    getUserInfo: params => {
        return axios.get(`${_baseUrl}/api/user/info`, {
            params: params
        }).then(res => res.data)
    },
    getnavHeader:params => {
        return axios.get(`${_baseUrl}/common_module/header/header.html`, {
            params: params
        }).then(res => res.data)
    },
    getnavsider:params => {
        return axios.get(`${_baseUrl}/common_module/slider/slider.html`, {
            params: params
        }).then(res => res.data)
    },

}