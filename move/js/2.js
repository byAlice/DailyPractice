/**
 * Created by alice on 2016/6/23.
 */
window.onload = function () {
    var aImg = document.getElementsByTagName('img');

    for (var i = 0; i < aImg.length; i++) {
        aImg[i].alpha=50;

        aImg[i].onmousemove = function () {
            startMove(this,100);
        };
        aImg[i].onmouseout = function () {
            startMove(this,50);
        };
    }
};


function startMove(obj,iTarget) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var speed = (iTarget-obj.alpha)/20;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);

        if (obj.alpha == iTarget) {
            clearInterval(obj.timer);
        }
        else {
            obj.alpha += speed;
            obj.style.filter = 'alpha(opacity:' + obj.alpha + ')';
            obj.style.opacity = obj.alpha / 100;
        }
    }, 30);
}
