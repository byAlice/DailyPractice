/**
 * Created by alice on 2016/6/27.
 */
window.onload = function () {
    var aBtn = document.getElementsByTagName('input');
    /*调用形式aBtn[n].onclick=function(){startMove(iTarget)}*/
    aBtn[0].onclick = function () {

        startMove(100);
    };
    aBtn[1].onclick = function () {

        startMove(300);
    };
    aBtn[2].onclick = function () {

        startMove(500);
    };
    aBtn[3].onclick = function () {

        startMove(900);
    };
};
var timer = null;

function startMove(itarget) {
    var oDiv = document.getElementById('div1');

    clearInterval(timer);   //先关后开
    timer = setInterval(function () {
        var speed = 0;

        if (oDiv.offsetLeft < itarget) {
            speed = 7;
        }
        else {
            speed = -7;
        }
        /*在除不尽的情况下，当(目标值-oDiv.offsetLeft)的绝对值小于等于speed的绝对值时，关闭定时器，并让div的left值等于目标值（这一过程在非常短的时间内完成，人眼基本无法分辨）*/
        if (Math.abs(itarget - oDiv.offsetLeft) <= 7) {
            clearInterval(timer);
            oDiv.style.left = itarget + 'px';
        }
        else {
            oDiv.style.left = oDiv.offsetLeft + speed + 'px';
        }
    }, 30);
}