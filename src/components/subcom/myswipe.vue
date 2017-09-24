<template>
   <!--这是轮播图区域，使用的是mint-ui中的swipe 组件-->
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for='(item,i) in list' :key='i'>
            <a :href="item.url" target="_blank">
                <img :src="item.img" alt="">
            </a>
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
    export default{
        props:['list']
    }
</script>


<style lang="scss" scoped>
    .mint-swipe{
        height:180px;
        .mint-swipe-item{
            text-align:center;
            overflow:hidden;
            img{
               
                height:100%;
            }
        }
    }
    
</style>

