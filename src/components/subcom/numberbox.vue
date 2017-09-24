<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9' style='height:25px'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js';
    export default{
        data(){
            return{}
        },
        mounted(){   //当挂载到页面后 再进行初始化
            mui('.mui-numbox').numbox();
        }
    }
</script>


<style lang="scss" scoped>

</style>

