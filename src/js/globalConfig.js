import Vue from 'vue';

// 定义全局的时间格式化的过滤器

Vue.filter('dateFormat',function(val,pattern=''){
    var dt = new Date(val);
    var y = dt.getFullYear();
     // 字符串的 padStart() 方法，接收两个参数，
    //  第一个 是补充完毕以后，最终的长度， 第二个参数需要传递一个字符串，表示用什么字符去填充
    var m = (dt.getMonth()+1).toString().padStart(2,'0');
    var d = dt.getDate().toString().padStart(2,'0');
    if (pattern.toLowerCase() === 'yyyy-mm-dd') {
        return `${y}-${m}-${d}`;
      } else {
        var hh = dt.getHours().toString().padStart(2, '0');
        var mm = dt.getMinutes().toString().padStart(2, '0');
        var ss = dt.getSeconds().toString().padStart(2, '0');
        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
      }
});