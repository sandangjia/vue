//1.0引入vue
import Vue from 'vue';

//4.0 导入自己的路由模块
import router from './router.js';

//5.0 引入vue-resource包用来实现数据请求
import VueResource from 'vue-resource';
// 5.2 将 VueResource 注册到 Vue上
Vue.use(VueResource);


//导入全局过滤器
import './globalConfig.js'


//2.0 导入mint-ui 组件库
import MintUI from 'mint-ui';
//2.1 样式
import 'mint-ui/lib/style.css';
Vue.use(MintUI);


//3.1 导入mui 样式
import '../lib/mui/css/mui.css'
//导入扩展图标
import '../lib/mui/css/icons-extra.css'


//1.1 引入要展示的app.vue
import App from '../components/App.vue';
//1.2创建vm实例
const vm = new Vue({
    el:'#app',
    render:c => c(App),
    router
});