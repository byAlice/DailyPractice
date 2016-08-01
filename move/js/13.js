/**
 * Created by alice on 2016/8/2.
 */
window.onload = function () {
    var oDiv = document.getElementById('play');
    var aBtn = oDiv.getElementsByTagName('ol')[0].getElementsByTagName('li');
    var oPrev = document.getElementById('prev');
    var oNext = document.getElementById('next');
    var oImg = document.getElementById('img');
    var arrUrl =[
        "img/banner-1.jpg",
        "img/banner-2.jpg",
        "img/banner-3.jpg",
        "img/banner-4.jpg"
    ];

    /*数字与图片序列号相对应*/
    var now = 0;
    for (var i = 0; i < aBtn.length; i++) {
        aBtn[i].index = i;     //把按钮序号赋予i
        aBtn[i].onclick = function () {
            now = this.index;
            tab();
        }
    }

    /*当前所在卡片与图片保持一致*/
    function tab() {
        for (var i = 0; i < aBtn.length; i++) {
            aBtn[i].className = '';
        }
        aBtn[now].className = 'active';
        oImg.src = arrUrl[now];
    }

    /*按下左右按钮时*/
    oPrev.onclick = function () {
        now--;
        if (now == -1) {
            now = aBtn.length-1;
        }
        tab();
    };
    oNext.onclick = function () {
        now++;
        if (now == aBtn.length) {
            now = 0;
        }
        tab();
    };




    /*图片自动播放*/
    function next() {
        now++;
        if (now == aBtn.length) {
            now = 0;
        }

        setInterval(tab(),10000);
    }

    var timer = setInterval(next, 5000);
    /*移入暂停，移出继续播放*/
    oDiv.onmouseover = function () {
        clearInterval(timer);
    };
    oDiv.onmouseout = function () {
        timer = setInterval(next, 2000);
    };
};