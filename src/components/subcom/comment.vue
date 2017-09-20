<template>
    <div>
        <h4>发表评论</h4>
        <hr>
        <textarea rows="4" placeholder="请输入你要评论的内容(最多不超过120个字)" maxlength='120'></textarea>
        <mt-button type='primary' size='large'>发表评论</mt-button>

        <div id='comment-list'>
            <div class='comment-box'>
                <div class='comment-title'>
                    第1楼 &nbsp;用户：匿名用户 发表时间：2012-12-12 12:12:12in
                </div>
                <div class='comment-body'>
                    雷布斯说：Are you okay. Do you like me. Mi fans
                </div>
            </div>
        </div>

        <mt-button type='danger' size='large' plain>发表评论</mt-button>    
    </div>
   
</template>


<script>
    
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
