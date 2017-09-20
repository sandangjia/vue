//1.导入vue
import Vue from 'vue';

//2.0 引入组件
import HomeContainer from '../components/tabbar/HomeContainer.vue';
import MemberContainer from '../components/tabbar/MemberContainer.vue';
import ShopcarContainer from '../components/tabbar/ShopcarContainer.vue';
import SearchContainer from '../components/tabbar/SearchContainer.vue';
import newsList from '../components/news/newsList.vue';
import newsInfo from '../components/news/newsInfo.vue';
//2.1 导入路由模块
import VueRouter from 'vue-router';
//2.2 注册路由
Vue.use(VueRouter);
//2.3 创建路由规则对象
const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newslist',component:newsList},
        {path:'/home/newsinfo/:id',component:newsInfo}
    ],
    linkActiveClass:'mui-active'
})

export default router;
