<template>
    <div class='photoinfo-container'>
        <!--头部-->
       <h1 class='title'>{{info.title}}</h1>
       <p class='info'>
           <span>发表时间:{{info.add_time}}</span>
           <span>点击: {{info.click}}次</span>
       </p>
       <hr>

       <!--图片缩略图预览-->
       <div class='prevew-box'>
             <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key='index'>
       </div>

       <!--图片描述-->
       <div class='content' v-html='info.content'></div>

       <comment :artId='id'></comment>
    </div>
</template>

<script>
    //导入发表评论模块
    import comment from '../../components/subcom/comment.vue'
    // 导入配置文件
    import config from '../../js/globalConfig.js';
    export default({
        data(){
            return{
                id: this.$route.params.id,
                list: [{
                    src: 'https://placekitten.com/600/400',
                    w: 600,
                    h: 400
                }, {
                    src: 'https://placekitten.com/1200/900',
                    w: 1200,
                    h: 900
                }],
                info:{}   // 存放图片详情的对象
            }
        },
        created(){
            this.getPhotoInfo();
            this.getPhotoPreviewImg();
        },
        methods:{
            // 获取图片详情
            getPhotoInfo(){
                var url = 'api/getimageInfo/'+ this.id;
                this.$http.get(url).then(res=>{
                    if(res.body.status == 0){
                        this.info = res.body.message[0];
                    }else{
                        console.log('获取图片详情失败！')
                    }
                });
            },
            //获取预览图片
            getPhotoPreviewImg(){
                var url = 'api/getthumimages/'+this.id;
                this.$http.get(url).then(res=>{
                    if(res.body.status == 0){
                        res.body.message.forEach(item=>{
                            item.w = 600;
                            item.h = 400;
                            item.src = config.baseImgUrl + item.src;
                        })
                        this.list = res.body.message;
                    }else{
                        console.log('获取缩略图失败！')
                    }
                });
            },
        },
          // 发表评论组件
        components: { comment }
    });
</script>

<style lang="scss" scoped>
    .photoinfo-container{
          padding:0 5px;
        .title{
            font-size:16px;
            line-height:40px;
            text-align:center;
            color:#26a2ff;
        }
        .info{
            font-size:12px;
            display:flex;
            justify-content:space-between;
        }
    }

    // 缩略图样式
    .prevew-box{
        img{
            margin:8px;
            box-shadow:0 0 6px gray;
        }
    }
    // 图片描述
    .content{
        font-size:12px;
        line-height:30px;
    }
</style>
