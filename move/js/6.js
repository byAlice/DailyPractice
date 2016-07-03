/**
 * Created by alice on 2016/7/3.
 */
window.onload = function () {
    var aDiv = document.getElementsByTagName('div');

    for (var i = 0; i < aDiv.length; i++) {
        aDiv[i].timer = null;

        aDiv[i].onmousemove = function () {
            startMove(this, 'width', 400);
        };

        aDiv[i].onmouseout = function () {
            startMove(this, 'width', 100);
        };
    }

};
/*
 *运动框架
 * */


/*由于offset是盒子模型的大小，易出bug，故使用currentStyle，这里需要做兼容*/
function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    }
    else {
        return getComputedStyle(obj, false)[name];
    }
}
function startMove(obj, attr, iTarget) {
    clearInterval(obj.timer);

    obj.timer = setInterval(function () {

            var cur = 0;
            if (attr == 'opacity') {
                cur = Math.round(parseInt(getStyle(obj, attr)) * 100);   //Math.round（）四舍五入
            }
            else {
                cur = parseInt(getStyle(obj, attr));
            }
            var speed = (iTarget - cur) / 6;

            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (cur == iTarget) {
                clearInterval(obj.timer);
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
        },
        30);
}