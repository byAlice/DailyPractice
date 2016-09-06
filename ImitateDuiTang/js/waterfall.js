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
        /*console.log(st);*/
        if(st>500){
            $('#to-top').css('display','block');
        }
        else{
            $('#to-top').css('display','none');
        }
    });
});
function waterfall(parent,child) {
    var boxs=$('#recommend>div');
    var w=boxs.eq(0).outerWidth();   //一个盒子recommend-box的宽度
    /*console.log($(window).width());*/
    var cols=Math.floor(($(window).width()-200)/w);  //一行能容纳的盒子个数
    if($(window).width()<500){
        cols=Math.floor($(window).width()/w);
    }
    $('#recommend').css({
      'width':w*cols-24+'px'
    });
    var hArr=[]; //用于储存每列中所有块框相加后的高度

    /*大家都在逛卡片点赞收集按钮*/
    $('.box').hover(
        function () {
            var s=$(this).siblings('.praise');
            s.css('display','block');
            var num=s.index('.praise');
            /*console.log(num);*/
            $(window).scroll(function ()
            {
                var pt=boxs.eq(num).position().top;
                var ph=$('.recommend-box').eq(num).outerHeight();
                /*var xx=Math.floor(num/4);*/
               /* console.log();*/
                var stp = $(this).scrollTop();
               /* console.log(stp);*/
                var mt=stp-1800-pt;
                if(stp>=1800&&stp<=(1800+pt+ph)){
                    $('.praise').eq(num).css('top',mt+40+'px');
                }
                else{
                    $('.praise').eq(num).css('marginTop',15+'px');
                }
            })
        },
        function () {
            var s = $(this).siblings('.praise');
            s.css('display', 'none');
        }
    );
    $('.praise').hover(function () {
        $(this).css('display','block');
    },function () {
        $(this).css('display','none');
    });
    /*确定卡片位置*/
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
        /*撑开盒子*/
        var maxH=Math.max.apply(null,hArr);
        var maxHIndex=$.inArray(maxH,hArr);
        $('#recommend').css({
            'height':hArr[maxHIndex]
        });
    });

}