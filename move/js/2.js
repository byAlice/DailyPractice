/**
 * Created by alice on 2016/6/23.
 */
window.onload = function () {
    var oImg = document.getElementById('img');

    oImg.onmousemove = function () {
        startMove(100)
    };
    oImg.onmouseout = function () {
        startMove(50)
    };
};

var alpha = 50;
var timer = 0;

function startMove(iTarget) {
    var oImg = document.getElementById('img');

    clearInterval(timer);
    timer = setInterval(function () {
        var speed = 0;

        if (alpha < iTarget) {
            speed = 5;
        }
        else {
            speed = -5;
        }

        if (alpha == iTarget) {
            clearInterval(timer);
        }
        else {
            alpha += speed;
            oImg.style.filter = 'alpha(opacity:' + alpha + ')';
            oImg.style.opacity = alpha / 100;
        }
    }, 30);
}