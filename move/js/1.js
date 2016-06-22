window.onload=function() {
	var oShare=document.getElementById("share");

    oShare.onmouseover=function () {
        startMove(0);
    };

    oShare.onmouseout=function () {
        startMove(-150);
    };
};
var timer=null;
function startMove(iTarget) {
    var oShare=document.getElementById('share');

    clearInterval(timer);
    timer=setInterval(function () {
        var speed=0;

        if (oShare.offsetLeft>iTarget) {
            speed=-10;
        }
        else {
            speed=10;
        }
        if (oShare.offsetLeft==iTarget) {
            clearInterval(timer);
        }
        else {
            oShare.style.left=oShare.offsetLeft+speed+'px';
        }
    },30);
}
