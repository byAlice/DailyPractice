/**
 * Created by alice on 2016/8/10.
 */
$(window).on('load',function () {
   waterfall('recommend','recommend-box');
   /* var dataInt={'data':}*/
   /*to-top按钮*/
    $(window).scroll(function ()
    {
        var st = $(this).scrollTop();
        if(st>500){
            $('#to-top').css('display','block');
        }
        else{
            $('#to-top').css('display','none');
        }
    });
    /*大家都在逛卡片点赞收集按钮*/
    $('.box').hover(
                function () {
                 var s=$(this).siblings('.praise');
                 s.css('display','block');
                },
                function () {
                    var s = $(this).siblings('.praise');
                    s.css('display', 'none');
                }
    );
    $('.praise').hover(function () {
        $('.p-1').hover(function (event) {
            $(this).css('background-color','red');
            event.stopPropagation();
        },function (event) {
            $(this).css('background-color','#ff4466');
            event.stopPropagation();

        })
    },function () {
        return;
    });

});
function waterfall(parent,child) {
    var boxs=$('#recommend>div');
    var w=boxs.eq(0).outerWidth();   //一个盒子recommend-box的宽度
    /*console.log($(window).width());*/
    var cols=Math.floor(($(window).width()-200)/w);  //一行能容纳的盒子个数
    $('#recommend').css({
      'width':w*cols-24+'px'
    });
    var hArr=[]; //用于储存每列中所有块框相加后的高度

    boxs.each(function (index,value) {
        var h=boxs.eq(index).outerHeight();
        if(index<cols){
            hArr[index]=h;
        }
        else{
            var minH=Math.min.apply(null,hArr);
            var minHIndex=$.inArray(minH,hArr); //求最小高度的索引

                $(value).css({
                    'position':'absolute',
                    'top':minH,
                    'left':boxs.eq(minHIndex).position().left
                    /*'left':minHIndex*w*/
                });
            hArr[minHIndex]+=h;
        }
        var maxH=Math.max.apply(null,hArr);
        var maxHIndex=$.inArray(maxH,hArr);
        $('#recommend').css({
            'height':hArr[maxHIndex]
        });
    });

}