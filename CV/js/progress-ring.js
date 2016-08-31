/**
 * Created by alice on 2016/8/29.
 */

(function ($) {
    $.fn.loadingRing = function () {
        var defaultOpt = {
            trackColor: '#f0f0f0',
            progressColor: '#6ec84e',
            percent: 75,
            duration: 1500
        }; // 默认选项
        $(this).each(function () {
            var $target = $(this);
            var color = $target.data('color'); // 颜色
            var percent = parseInt($target.data('percent'), 10); // 百分比(以十进制解析)
            var duration = parseFloat($target.data('duration'), 10) * 1000; // 持续时间
            var trackColor, progressColor;
            if (color && color.split(',').length === 2) {
                var colorSet = color.split(',');    //颜色存入数组中
                trackColor = colorSet[0];   //轨道颜色
                progressColor = colorSet[1];    //进度条颜色
            } else {
                //如果没有指定颜色值，将采用默认值
                trackColor = defaultOpt.trackColor;
                progressColor = defaultOpt.progressColor;
            }
            if (!percent)
            //如果没有指定进度条目标值，将采用默认值
                percent = defaultOpt.percent;
            if (!duration)
            //如果没有指定进度持续时间，将采用默认值
                duration = defaultOpt.duration;

            $target.append('<div class="progress-track"></div>' +
                           '<div class="progress-left"></div>' +
                           '<div class="progress-right"></div>' +
                           '<div class="progress-cover"></div>' +
                           '<div class="progress-text">' +
                              '<span class="progress-num">' + percent +'</span>' +
                              '<span class="progress-percent">%</span>' +
                           '</div>');

            var x = $target.find('.progress-cover').height(); // 触发 Layout
            // http://stackoverflow.com/questions/12088819/css-transitions-on-new-elements

            $target.find('.progress-track, .progress-cover').css('border-color', trackColor);
            $target.find('.progress-left, .progress-right').css('border-color', progressColor);

            $target.find('.progress-left').css({
                //将百分比转化为进度条转动的距离
                'transform': 'rotate(' + percent * 3.6 + 'deg)',
                '-o-transform': 'rotate(' + percent * 3.6 + 'deg)',
                '-ms-transform': 'rotate(' + percent * 3.6 + 'deg)',
                '-moz-transform': 'rotate(' + percent * 3.6 + 'deg)',
                '-webkit-transform': 'rotate(' + percent * 3.6 + 'deg)',
                //进度条转动持续时间
                'transition': 'transform ' + duration + 'ms linear',
                '-o-transition': '-o-transform ' + duration + 'ms linear',
                '-ms-transition': '-ms-transform ' + duration + 'ms linear',
                '-moz-transition': '-moz-transform ' + duration + 'ms linear',
                '-webkit-transition': '-webkit-transform ' + duration + 'ms linear'
            });

            if (percent > 50) {
                //转过50%后，右半边进度条显示，左半边遮罩隐藏
                var animation = 'toggle ' + (duration * 50 / percent) + 'ms';
                $target.find('.progress-right').css({
                    //初态是opacity：0；动画周期结束后为opacity：1；
                    'opacity': 1,
                    'animation': animation,
                    'animation-timing-function': 'step-end'
                });
                $target.find('.progress-cover').css({
                    //初态是opacity：1；动画周期结束后为opacity：0；
                    'opacity': 0,
                    'animation': animation,
                    'animation-timing-function': 'step-start'
                });
            }
        });
    };
})(jQuery);