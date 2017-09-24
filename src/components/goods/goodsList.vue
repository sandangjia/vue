<template>
    <div class='goodslist-box'>
        <div class='goodslist'>
            <div class='goods-item' v-for='item in goodsList' :key='item.id' @click='goDetail(item.id)'>
                <img :src="item.img_url" alt="">
                <h1>{{item.title}}</h1>
                <div class='info'>
                    <p>
                        <span class='nowPrice'>￥{{item.sell_price}}</span>
                        <span class='oldPrice'>￥{{item.market_price}}</span>
                    </p>
                    <p class='sell'>
                        <span>热卖中</span>
                        <span>剩{{item.stock_quantity}}件</span>
                    </p>
                </div>
            </div>

             <mt-button type='danger' size='large' @click='loadmore'>加载更多</mt-button>
        </div>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                pageindex:1,
                goodsList:[]
            }
        },
        created(){
            this.getGoodsList();
        },
        methods:{
            getGoodsList(){
                var url = 'api/getgoods?pageindex='+this.pageindex;
                this.$http.get(url).then(res=>{
                    if(res.body.status == 0){
                        //第一次点击没有问题，如果后面点击加载更多的时候,要显示所有的数据
                        //this.goodsList = res.body.message;
                        this.goodsList = this.goodsList.concat(res.body.message);
                    }else{
                        console.log('获取商品列表失败');
                    }
                });
            },
            loadmore(){  //点击加载更多
                this.pageindex ++ ;
                this.getGoodsList();
            },
            goDetail(id){   // 点击 每一个商品信息，使用路由的 编程式导航，跳转到商品详细页面
                // this.$router.push 实现编程式导航
                this.$router.push('/home/goodsinfo/'+ id);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .goodslist{
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        padding:7px;
        .goods-item{
            width:49%;
            border:1px solid #ccc;
            margin-bottom:6px;
            padding:2px;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            img{
                width:100%;
            }
            h1{
                font-size:13px;
            }

            .info{
                background-color:#eee;
                overflow:hidden;
                padding:0 5px;
                .nowPrice{
                    color:red;
                    font-size:16px;
                    margin-right:10px;
                }
                .oldPrice{
                    text-decoration:line-through;
                    font-size:13px;
                }
                .sell{
                    display:flex;
                    justify-content:space-between;
                    font-size:13px;
                }
            }
        }
    }
</style>

