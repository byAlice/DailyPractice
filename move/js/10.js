/**
 * Created by alice on 2016/7/17.
 */
window.onload = function () {
    var oDiv = document.getElementById('play');
    var aBtn = oDiv.getElementsByTagName('ol')[0].getElementsByTagName('li');
    var oUl = oDiv.getElementsByTagName('ul')[0];

    /*数字与图片序列号相对应*/
    var now = 0;

    for (var i = 0; i < aBtn.length; i++) {
        aBtn[i].index = i;     //把按钮序号赋予i
        aBtn[i].onclick = function () {
            now = this.index;
            tab();
        }
    }
    /*当前所在卡片*/
    function tab() {
        for (var i = 0; i < aBtn.length; i++) {
            aBtn[i].className = '';
        }
        aBtn[now].className = 'active';
        startMove(oUl, {top: -150 * now});
    }

    /*图片自动播放*/
    function next() {
        now++;
        if (now == aBtn.length) {
            now = 0;
        }

        tab();
    }

    var timer = setInterval(next, 2000);
    /*移入暂停，移出继续播放*/
    oDiv.onmouseover = function () {
        clearInterval(timer);
    };
    oDiv.onmouseout = function () {
        timer = setInterval(next, 2000);
    };
};