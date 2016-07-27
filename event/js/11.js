/**
 * Created by alice on 2016/7/27.
 */
function getByClass(parent, sClass) {
    var oParent = parent ? document.getElementById(parent) : document,
        aResult = [],
        aEle = oParent.getElementsByTagName('*');

    for (var i = 0; i < aEle.length; i++) {
        if (aEle[i].className == sClass) {
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}
window.onload = function () {

    //拖拽
    new Drag('login-panel', 'logo');    //此处参数必须为id名称
    //关闭
    var oClose = document.getElementById('close');
    oClose.onclick = function () {
        var oPanel = document.getElementById('login-panel');
        oPanel.style.display = 'none';
    };
    //切换状态
    var oLoginState = document.getElementById('loginState');
    var oStateList = document.getElementById('loginStatePanel');
    var aLi = oStateList.getElementsByTagName('li');
    var oTxt = document.getElementById('login2qq_state_txt');
    var oStateShow = document.getElementById('loginStateShow');

    oLoginState.onclick = function (ev) {

        oEvent = ev || window.event;
        //阻止冒泡
        if (oEvent.stopPropagation) {
            oEvent.stopPropagation();
        }
        else {
            oEvent.cancelBubble = true;
        }
        oStateList.style.display = 'block';
    };
    //鼠标滑过、离开和点击状态列表时
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].onmouseover = function () {
            this.style.background = '#567';
        };
        aLi[i].onmouseout = function () {
            this.style.background = '#FFF';
        };
        aLi[i].onclick = function (ev) {
            oEvent = ev || window.event;
            //阻止冒泡
            if (oEvent.stopPropagation) {
                oEvent.stopPropagation();
            }
            else {
                oEvent.cancelBubble = true;
            }
            var id = this.id;
            oStateList.style.display = 'none';
            oTxt.innerHTML = getByClass(id, 'stateSelect_text')[0].innerHTML;
            oStateShow.className = '';
            oStateShow.className = 'login-state-show ' + id;

        }
    }
    document.onclick = function () {
        oStateList.style.display = 'none';
    }
};

function Drag(parent_id, child_id) {
    var _this = this;   //_this：新new出来的对象
    this.disX = 0;
    this.disY = 0;

    this.oParent = document.getElementById(parent_id);
    this.oChild = document.getElementById(child_id);
    this.oChild.onmousedown = function (ev) {
        _this.fnDown(ev);

        return false;//阻止浏览器下部分默认行为（防止移动时选中页面上的文字）
    }
}
/*鼠标按下时的原型*/
Drag.prototype.fnDown = function (ev) {
    var _this = this;
    var oEvent = ev || event;

    /*定义鼠标坐标分别距div左上边距离*/
    this.disX = oEvent.clientX - this.oParent.offsetLeft;
    this.disY = oEvent.clientY - this.oParent.offsetTop;

    document.onmousemove = function (ev) {
        _this.fnMove(ev);
    };
    document.onmouseup = function () {
        _this.fnUp();
    };
};
/*鼠标移动原型*/
Drag.prototype.fnMove = function (ev) {
    var oEvent = ev || event;
    var oX = oEvent.clientX - this.disX;
    var oY = oEvent.clientY - this.disY;

    /*防止左边溢出*/
    if (oX < 0) {
        oX = 0;
    }

    /*防止右边溢出*/
    else if (oX > document.documentElement.clientWidth - this.oParent.offsetWidth - 10) {
        oX = document.documentElement.clientWidth - this.oParent.offsetWidth - 10;
    }

    /*防止上边溢出*/
    if (oY < 10) {
        oY = 10;
    }

    /*防止下边溢出*/
    else if (oY > document.documentElement.clientHeight - this.oParent.offsetHeight) {
        oY = document.documentElement.clientHeight - this.oParent.offsetHeight;
    }

    this.oParent.style.left = oX + 'px';
    this.oParent.style.top = oY + 'px';
};

/*鼠标松开原型*/
Drag.prototype.fnUp = function () {
    document.onmousemove = null;
    document.onmouseup = null;
};
