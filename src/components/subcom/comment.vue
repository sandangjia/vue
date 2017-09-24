<template>
    <div>
        <h4>发表评论</h4>
        <hr>
        <textarea rows="4" placeholder="请输入你要评论的内容(最多不超过120个字)" maxlength='120' v-model='msg'></textarea>
        <mt-button type='primary' size='large' @click='postComment'>发表评论</mt-button>

        <div id='comment-list'>
            <div class='comment-box' v-for="(item,i) in commentList" :key='i'>
                <div class='comment-title'>
                    第{{i+1}}楼 &nbsp;用户：{{item.user_name}} 发表时间：{{item.add_time}}
                </div>
                <div class='comment-body'>
                    {{item.content}}
                </div>
            </div>
        </div>

        <mt-button type='danger' size='large' plain @click='loadmore'>加载更多</mt-button>    
    </div>
   
</template>


<script>
// 导入Toast
import { Toast } from 'mint-ui';
    export default({
        data(){
            return{
                msg:'',
                pageindex:1,
                commentList:[],
            }
        },
        created(){
            this.getCommentList();
        },
        methods:{
            getCommentList(){
                var url = 'api/getcomments/'+this.artId+'?pageindex='+this.pageindex;
                this.$http.get(url).then(res=>{
                    if(res.body.status == 0){
                        //数组合并 concat 
                        this.commentList = this.commentList.concat(res.body.message);
                    }else{
                        console.log('获取评论失败');
                    }
                })
            },
            loadmore(){
                this.pageindex++;
                this.getCommentList();
            },
            postComment(){ //点击发表评论
                if(this.msg.trim().length == 0){
                    return Toast('发表内容不能为空！')
                }
                var url = 'api/postcomment/'+this.artId;
                this.$http.post(url,{content:this.msg},{emulateJSON:true}).then(res=>{
                    if(res.body.status == 0){
                        Toast('发表评论成功');
                        this.commentList.unshift({user_name:'匿名用户',add_time:new Date(),content:this.msg});
                        this.msg = '';
                    }else{
                        Toast('评论失败！');
                    }
                })
            }
        },
         props:['artId']
    })
    
</script>


<style lang="scss" scoped>
    textarea{
        font-size:14px;
        margin-bottom:5px;
    }
    #comment-list{
        margin:5px 0;
        .comment-box{
            font-size:13px;
            .comment-title{
                line-height:30px;
                background-color:#eee;
            }
            .comment-body{
                line-height:36px;
                text-indent:2em;
            }
        }
    }
</style>
