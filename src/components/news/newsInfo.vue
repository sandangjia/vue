<template>
    <div class='newinfo-box'>
        <h4>{{info.title}}</h4>
        <p class='info'>
            <span>发表时间：{{info.add_time |dateFormat}}</span>
            <span>点击：{{info.click}}次</span>
        </p>
        <hr>
        <div class='content' v-html='info.content'></div>

        <comment></comment>
    </div>

</template>

<script>
//1. 在父组件中，如果要使用子组件了，第一步：导入子组件
import comment from '../subcom/comment.vue';
    export default({
        data(){
            return{
                id:this.$route.params.id,
                info:{}
            }
        },
        created(){
            this.getNewsInfo();
        },
        methods:{
            getNewsInfo(){
                var url = 'http://127.0.0.1:8899/api/getnew/'+ this.id;
                this.$http.get(url).then(res =>{
                    if(res.body.status == 0){
                        this.info = res.body.message[0];
                        console.log(this.info);
                    }else{
                        console.log('获取新闻详情失败');
                    }
                })
            }
        },
        components:{ comment}
    });
</script>

<style lang="scss">
    .newinfo-box{
        padding:0 5px;
        >h4{
            font-size:16px;
            text-align:center;
            line-height:30px;
        }
        >.info{
            font-size:12px;
            display:flex;
            justify-content:space-between;
            color:#26A2FF;
        }
        >.content{
            img{
                width:100%;        
            }
        }
    }
</style>
