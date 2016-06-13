/**
 * Created by alice on 2016/6/13.
 */
window.onload = function () {
    var oWrap = document.getElementById('wrap');
    var oUl = oWrap.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');
    var oCon = document.getElementById('control');
    var oA1 = oCon.getElementsByTagName('a')[0];
    var oA2 = oCon.getElementsByTagName('a')[1];
    var speed = -2;
    var timer = setInterval(move, 30);

    oUl.innerHTML += oUl.innerHTML;
    oUl.style.width = aLi[0].offsetWidth * aLi.length + 200 + 'px';  //此处若设置了margin值，要加上margin值之和2，这里相当于10*20，故要加200px

    function move() {
        if (oUl.offsetLeft < -oUl.offsetWidth / 2) {
            oUl.style.left = '0';
        }
        if (oUl.offsetLeft > 0) {
            oUl.style.left = -oUl.offsetWidth / 2 + 'px';
        }
        oUl.style.left = oUl.offsetLeft + speed + 'px';
    }

    oWrap.onmouseover = function () {
        clearInterval(timer);
    };

    oWrap.onmouseout = function () {
        timer = setInterval(move, 30);
    };

    oA1.onclick = function () {
        speed = -2;
    };
    oA2.onclick = function () {
        speed = 2;
    };
};