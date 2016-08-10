/**
 * Created by alice on 2016/8/9.
 */
//下拉框
$(document).ready(function () {
   $('.classify').hover(function () {
      $('.classify').addClass('classify-hover');
       $('.icon-bottom').removeClass('run-down').addClass('run-up');
      $('#more').css('display','block');
   },function () {
       $('.classify').removeClass('classify-hover');
       $('.icon-bottom').removeClass('run-up').addClass('run-down');
       $('#more').css('display','none');
   });
    $('#more').hover(function () {
        $('.classify').addClass('classify-hover');
        $('.icon-bottom').removeClass('run-down').addClass('run-up');
        $('#more').css('display','block');
    },function () {
        $('.classify').removeClass('classify-hover');
        $('.icon-bottom').removeClass('run-up').addClass('run-down');
        setTimeout(function () {
            $(".icon-bottom").removeClass('run-down');
        },500);
        $('#more').css('display','none');
    });
});