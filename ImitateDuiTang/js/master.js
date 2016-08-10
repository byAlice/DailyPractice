/**
 * Created by alice on 2016/8/9.
 */
//下拉框
(function () {
   $('[data-toggle=arrowdown]').hover(function () {
      $('.classify').addClass('classify-hover');
       $('.icon-bottom').removeClass('run-down');
       $('.icon-bottom').addClass('run-up');
      $('#move').css('display','block');
   },function () {
       $('.classify').removeClass('classify-hover');
       $('.icon-bottom').removeClass('run-up');
       $('.icon-bottom').addClass('run-down');
       $('#move').css('display','none');
   });
    $('[data-toggle=hidden-box]').hover(function () {
        
    })
})(jQuery);