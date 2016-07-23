/**
 * Created by alice on 2016/7/23.
 */
window.onload = function () {
    new Drag('box');    //此处参数必须为id名称
};

function Drag(id) {
    var _this = this;   //_this：新new出来的对象
    this.disX = 0;
    this.disY = 0;

    this.oDiv = document.getElementById(id);
    this.oDiv.onmousedown = function (ev) {
        _this.fnDown(ev);

        return false;//阻止浏览器下部分默认行为（防止移动时选中页面上的文字）
    }
}
/*鼠标按下时的原型*/
Drag.prototype.fnDown = function (ev) {
    var _this = this;
    var oEvent = ev || event;

    /*定义鼠标坐标分别距div左上边距离*/
    this.disX = oEvent.clientX - this.oDiv.offsetLeft;
    this.disY = oEvent.clientY - this.oDiv.offsetTop;

    /*添加框*/
    this.oBox = document.createElement('div');
    this.oBox.className = 'box';
    this.oBox.style.width = this.oDiv.offsetWidth - 2 + 'px';
    this.oBox.style.height = this.oDiv.offsetHeight - 2 + 'px';
    /*确定框的位置*/
    this.oBox.style.left = this.oDiv.offsetLeft + 'px';
    this.oBox.style.top = this.oDiv.offsetTop + 'px';

    document.body.appendChild(this.oBox);   //将创建的div追加到body节点上

    /*鼠标捕获*/
    if (this.oBox.setCapture) {
        //ie
        this.oBox.onmousemove = function (ev) {
            _this.fnMove(ev);
        };
        this.oBox.onmouseup = function () {
            _this.fnUp();
        };
    }
    else {
        //chrome,firefox
        document.onmousemove = function (ev) {
            _this.fnMove(ev);
        };
        document.onmouseup = function () {
            _this.fnUp();
        };
    }
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

    /*吸附

     if (oX < 50) {
     oX = 0;
     }
     */

    /*防止右边溢出*/
    else if (oX > document.documentElement.clientWidth - this.oDiv.offsetWidth) {
        oX = document.documentElement.clientWidth - this.oDiv.offsetWidth;
    }
    /*如果父级也是个div，要实现子div不能拖出父div，此时
     *
     * else if (oX > oDiv2.offsetWidth - oDiv.offsetWidth) {
     oX = oDiv2.offsetWidth - oDiv.offsetWidth;
     }
     * */

    /*防止上边溢出*/
    if (oY < 0) {
        oY = 0;
    }

    /*防止下边溢出*/
    else if (oY > document.documentElement.clientHeight - this.oDiv.offsetHeight) {
        oY = document.documentElement.clientHeight - this.oDiv.offsetHeight;
    }

    this.oBox.style.left = oX + 'px';
    this.oBox.style.top = oY + 'px';
    /* this.oDiv.style.left=oEvent.clientX-this.disX+'px';
     this.oDiv.style.top=oEvent.clientY-this.disY+'px';*/
};

/*鼠标松开原型*/
Drag.prototype.fnUp = function () {
    document.onmousemove = null;
    document.onmouseup = null;

    /*使div移动到框的位置*/
    this.oDiv.style.left = this.oBox.offsetLeft + 'px';
    this.oDiv.style.top = this.oBox.offsetTop + 'px';
    /*移除框*/
    document.body.removeChild(this.oBox);

    /*关闭鼠标捕获*/
    if (this.oBox.releaseCapture) {
        this.oBox.releaseCapture();
    }
};






































