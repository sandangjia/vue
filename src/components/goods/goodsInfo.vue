<template>
    <div class='goodsinfo-box'>
        <!--轮播图区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <myswipe :list='lunbotuList'></myswipe> 
                </div>
            </div>
        </div>

        <!--商品购买区域-->
        <div class="mui-card">
            <div class="mui-card-header">{{info.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner box2">
                    <div>
                        市场价:
                        <del>￥{{info.market_price}}</del>销售价:
                        <span class='price'>￥{{info.sell_price}}</span>
                    </div>
                    <div>
                        购买数量：
                       <numberbox></numberbox>
                    </div>
                    <div>
                        <mt-button type='primary' size='small'>立即购买</mt-button>
                        <mt-button type='danger' size='small'>加入购物车</mt-button>
                    </div>
                </div>
            </div>
        </div>

        <!--商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <p>商品货号: {{info.goods_no}}</p>
                   <p>库存情况: {{info.stock_quantity}} 件</p>
                   <p>上架时间: {{info.add_time}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type='primary' size='large' plain>图文介绍</mt-button>
                <mt-button type='danger' size='large' plain>商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
//导入轮播图组件
import myswipe from '../subcom/myswipe.vue';
import config from '../../js/globalConfig.js';
//引入数字选择框
import numberbox from '../subcom/numberbox.vue';
    export default{
        data(){
            return{
                id:this.$route.params.id,
                lunbotuList:[],  //存放轮播图
                info:{}   //商品详情
            }
        },
        created(){
           this.getLunBo();
           this.getGoodsInfo();
        },
        methods:{
            getLunBo(){
                var url = 'api/getthumimages/'+ this.id;
                this.$http.get(url).then(res=>{
                    if(res.body.status == 0){
                        //为轮播图组件拼接完整的可用的img路径
                        res.body.message.forEach(item=>{
                            item.img = config.baseImgUrl + item.src;
                        });
                        this.lunbotuList = res.body.message;
                    }else{
                        console.log('获取商品轮播图失败')
                    }
                });
            },
            getGoodsInfo(){  // 获取商品详情数据
                var url = 'api/goods/getinfo/'+this.id;
                this.$http.get(url).then(res=>{
                    if(res.body.status == 0){
                        this.info = res.body.message[0];
                    }else{
                        console.log('获取商品详情失败')
                    }
                })
            } 
        },
        components:{ myswipe,numberbox }
    }
</script>


<style lang="scss" scoped>
    .goodsinfo-box{
        overflow:hidden;
        background-color:#eee;

        .box2{
            >div{ 
                margin:8px 0;
                del{ 
                    font-size:12px;
                    margin-right:10px;
                }
                .price{
                    color:red;
                    font-size:16px;
                }
            }
        }
    }

    .mui-card-footer{
        flex-direction:column;
        button{
            margin:10px;
        }
    }
</style>
