/**
 * Created by alice on 2016/7/4.
 */
/*
 *链式运动框架
 * */

/*通过getStyle解决边框bug，并考虑兼容性*/
function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    }
    else {
        return getComputedStyle(obj, false)[name];
    }
}
function startMove(obj, attr, iTarget, fnEnd) {
    clearInterval(obj.timer);

    obj.timer = setInterval(function () {

            var cur = 0;
            if (attr == 'opacity') {
                cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);   //如果当前值为透明度（无单位，且为小数），需要用parseFloat去小数，再用Math.round（）四舍五入
            }
            else {
                cur = parseInt(getStyle(obj, attr));
            }
        var speed = (iTarget - cur) / 6;

        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);   //求速度并考虑正数向上负数向下取整

            if (cur == iTarget) {
                clearInterval(obj.timer);
                if (fnEnd) {
                    fnEnd();
                } //回调函数
            }
            else {
                if (attr == 'opacity') {
                    obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
                    obj.style.opacity = (cur + speed) / 100;
                }
                else {
                    obj.style[attr] = cur + speed + 'px';
                }

            }
    }, 30);
}
