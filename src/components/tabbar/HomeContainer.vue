<template>
    <div>
       <!--这是轮播图区域，使用的是mint-ui中的swipe 组件-->
       <myswipe :list='list'></myswipe>    

         <!-- 这是九宫格改造工程，改造的结果是六宫格， 基于 mui 的 grid-default.html 改造 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9" id='ul-item'>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photoList">
                      <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodsList">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                      <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                      <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                      <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">练习我们</div></a></li>
        </ul> 
    </div>
</template>


<script>
import config from '../../js/globalConfig.js';
import myswipe from '../subcom/myswipe.vue';

    export default{
        data(){
            return{
                list:[]
            }
        },
        created(){
            this.getLunbo();
        },
        methods:{
            getLunbo(){
                var url = 'api/getlunbo';
                this.$http.get(url).then(res=>{
                    if(res.body.status == 0){
                        // 这个for循环，将 完整的图片URL给拼接了出来，这样就能直接交给轮播图组件去渲染
                        res.body.message.forEach(item=>{
                            item.img = config.baseUrl + item.img;
                        })
                        this.list = res.body.message;
                    }else{
                        console.log('获取轮播图失败！')
                    }
                });
            }
        },
        components:{ myswipe}
    }
</script>

<style lang="scss" scoped>
    //导航固定一行三个
    #ul-item{
        li{
            width:33.3333%;
        }
    }
    
    .mui-table-view-cell {
        img{
            width:60px;
        }
    }

    .mui-grid-view.mui-grid-9{
        border:none;
        background-color:#fff;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:none;
    }
</style>
