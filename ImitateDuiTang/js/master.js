/**
 * Created by alice on 2016/8/9.
 */

var n=t=0,count;
//下拉框
$(document).ready(function () {
    var num=0;
   $('[data-toggle=arrowdown]').hover(function () {
       var _id=$(this).attr('id');
       num=_id.substring(4,_id.length);
       $(this).addClass('classify-hover');
       $(this).find('.icon-bottom').removeClass('run-down').addClass('run-up');
      $('#menu'+num).css('display','block');
   },function () {
       $(this).removeClass('classify-hover');
       $(this).find('.icon-bottom').removeClass('run-up').addClass('run-down');
       $('#menu'+num).css('display','none');
   });
    $('[data-toggle=hidden-box]').hover(function () {
        var _id=$(this).attr('id');
        num=_id.substring(1,_id.length);
        $('#down'+num).addClass('classify-hover')
        .find('.icon-bottom').removeClass('run-down').addClass('run-up');
        $(this).css('display','block');
    },function () {
        $('#down'+num).removeClass('classify-hover')
        .find('.icon-bottom').removeClass('run-up').addClass('run-down');
        setTimeout(function () {
            $('#down'+num).find(".icon-bottom").removeClass('run-down');
        },500);
        $(this).css('display','none');
    });
    //carousel

    count=$('#banner-list a').length;
    $('#banner-list a:not(:first-child)').hide();
    $('#banner-info').html($('#banner-list a:first-child').find('img').attr('alt')).css('text-align','center');
    $('#banner li').click(function () {
        var i=$(this).index();
        n=i;
        /*如果当前li不是被点击状态才执行淡入淡出*/
        if(!($(this).is('.active'))){
            $('#banner-list a').fadeOut(100).parent().children().eq(i).fadeIn(100);
            $('#banner-info').html($('#banner-list a').eq(i).find('img').attr('alt'));

            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        }

    });
    /*自动播放*/
    t=setInterval('player()',3000);
    $('#banner').hover(function () {
        clearInterval(t);
    },function () {
        t=setInterval('player()',3000);
    });
    /*左右按钮*/
    $("#prev").click(function () {
        n--;
        if(n==-1){
            n=count-1;
        }
        $('#banner li').eq(n).trigger('click');
    });
    $("#next").click(function () {
        n++;
        if(n>=count){
            n=0;
        }
        $('#banner li').eq(n).trigger('click');
    })
});
function player(){
    n=n >= (count-1) ? 0 : ++n;
    $('#banner li').eq(n).trigger('click');
}

