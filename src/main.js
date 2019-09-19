import Vue from 'vue'  // <script src="./vue.js"></script>
import App from './App.vue' // 引入根组件   let app = new Vue()
import router from './router'  // router 路由
import store from './store'  // vuex中的仓库
import axios from "axios"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import MintUI from "mint-ui"
import 'mint-ui/lib/style.css'
import { Indicator } from 'mint-ui';
Vue.use(MintUI);
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios;
// 创建一个Vue的实例
new Vue({
    router,
    store,
    render: h => h(App)   // render是渲染  render是函数   钩子函数
}).$mount('#app')
axios.interceptors.request.use(
    config =>{
        //加载动画
        Indicator.open();
        return config;
    },
    error =>{
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    response =>{
        Indicator.close();
        return response;
    },
    error =>{
        Indicator.close();
        return Promise.reject(error);
    }
)