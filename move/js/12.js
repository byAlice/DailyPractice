/**
 * Created by alice on 2016/7/18.
 */
function getByClass(oParent, sClass) {
    var aEle = oParent.getElementsByTagName('*');
    var aResult = [];

    for (var i = 0; i < aEle.length; i++) {
        if (aEle[i].className == sClass) {
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}
window.onload = function () {

    var aTxt = [
        '北冥有鱼，其名为鲲',
        '鲲之大，不知其几千里也',
        '化为鸟，其名为鹏',
        '鹏之背，不知其几千里也',
        '怒而飞，其翼若垂天',
        '扶摇直上九万里，去以六月息者也'
    ];

    var oDiv = document.getElementById('play');
    var oBtnPrev = getByClass(oDiv, 'prev')[0];
    var oBtnNext = getByClass(oDiv, 'next')[0];
    var oTxt = getByClass(oDiv, 'text')[0];
    var oLength = getByClass(oDiv, 'length')[0];
    var oMarkLeft = getByClass(oDiv, 'mark_left')[0];
    var oMarkRight = getByClass(oDiv, 'mark_right')[0];
    var oDivSmall = getByClass(oDiv, 'small_pic')[0];
    var oUlSmall = oDivSmall.getElementsByTagName('ul')[0];
    var aLiSmall = oDivSmall.getElementsByTagName('li');
    var oUlBig = getByClass(oDiv, 'big_pic')[0];
    var aLiBig = oUlBig.getElementsByTagName('li');
    var nowZIndex = 2;
    var now = 0;

    /*图片描述及所在页面初始化*/
    oTxt.innerHTML = aTxt[0];
    oLength.innerHTML = '1/' + aLiBig.length;


    /*左右按钮鼠标移入移出透明度变化*/
    oBtnPrev.onmouseover = oMarkLeft.onmouseover = function () {
        startMove(oBtnPrev, 'opacity', 100);
    };
    oBtnPrev.onmouseout = oMarkLeft.onmouseout = function () {
        startMove(oBtnPrev, 'opacity', 0);
    };
    oBtnNext.onmouseover = oMarkRight.onmouseover = function () {
        startMove(oBtnNext, 'opacity', 100);
    };
    oBtnNext.onmouseout = oMarkRight.onmouseout = function () {
        startMove(oBtnNext, 'opacity', 0);
    };

    /*小图切换*/
    for (var i = 0; i < aLiSmall.length; i++) {

        aLiSmall[i].index = i;
        aLiSmall[i].onclick = function () {
            if (this.index == now) {
                return;
            }
            now = this.index;
            tab();
        };

        aLiSmall[i].onmousemove = function () {
            startMove(this, 'opacity', 100);
        };
        aLiSmall[i].onmouseout = function () {
            if (this.index != now) {
                startMove(this, 'opacity', 60);
            }
        };

    }
    function tab() {
        aLiBig[now].style.zIndex = nowZIndex++;

        for (var i = 0; i < aLiSmall.length; i++) {
            startMove(aLiSmall[i], 'opacity', 60);
        }

        startMove(aLiSmall[now], 'opacity', 100);

        aLiBig[now].style.height = 0;
        startMove(aLiBig[now], 'height', 320);

        /*图片文字及页数说明随页面变化*/
        oTxt.innerHTML = aTxt[now];
        oLength.innerHTML = (now + 1) + '/' + aLiBig.length;

        /*小图高亮规则：如果是now为0，即第一张，而后保持高亮的图片在第二张的位置（除了now=5，第六张图在最右边），即如果now为1，left值还是不变，如果now为2，也就是第三张，这时候要左移一个aLiSmall[0].offsetWidth的长度(130px)，now为3,4也是如此，now为5是也就是最后一张，需要向左移3*150px的距离回到轮播的起始位置*/
        if (now == 0) {
            startMove(oUlSmall, 'left', 0);
        }
        else if (now == aLiSmall.length - 1) {
            startMove(oUlSmall, 'left', -(now - 2) * aLiSmall[0].offsetWidth);
        }
        else {
            startMove(oUlSmall, 'left', -(now - 1) * aLiSmall[0].offsetWidth);
        }
    }

    /*上一张*/
    oBtnPrev.onclick = function () {
        now--;

        if (now == -1) {
            now = aLiSmall.length - 1;
        }

        tab();
    };
    /*下一张*/
    oBtnNext.onclick = function () {
        now++;
        if (now == aLiSmall.length) {
            now = 0;
        }
        tab();
    };

    var timer = setInterval(oBtnNext.onclick, 2000);

    oDiv.onmouseover = function () {
        clearInterval(timer);
    };
    oDiv.onmouseout = function () {
        timer = setInterval(oBtnNext.onclick, 2000);
    };
};