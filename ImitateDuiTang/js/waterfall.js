/**
 * Created by alice on 2016/8/10.
 */
$(window).on('load',function () {
   waterfall('recommend','recommend-box');
   /* var dataInt={'data':}*/
});
function waterfall(parent,child) {
    var $boxs=$('#recommend>div');
    var w=$boxs.eq(0).outerWidth();   //一个盒子recommend-box的宽度
    var cols=Math.floor($(window).width()/w);  //一行能容纳的盒子个数
    $('#recommend').css({
      'width':w*cols,
      'margin':'40 auto'
    });
    var hArr=[]; //用于储存每列中所有块框相加后的高度

    $boxs.each(function (index,value) {
        var h=$boxs.eq(index).outerHeight();
        if(index<cols){
            hArr[index]=h;
        }
        else{
            var minH=Math.min.apply(null,hArr);
            var minHIndex=$.inArray(minH,hArr); //求最小高度的索引

                $(value).css({
                    'position':'absolute',
                    'top':minH+40+'px',
                    'left':$boxs.eq( minHIndex ).position().left

                });



            hArr[minHIndex]+=$boxs.eq(index).height()+40;
        }
    })



















}