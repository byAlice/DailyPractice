/**
 * Created by alice on 2016/7/19.
 */
window.onload = function () {
    var oDiv = document.getElementById('box');
    var disX = 0;
    var disY = 0;
    /*鼠标左键按下事件*/
    oDiv.onmousedown = function (ev) {
        var oEvent = ev || event;   //这里有函数传参ev，这步变量声明不可省略，也不可放在主函数中
        /*定义鼠标坐标分别距div左上边距离*/
        disX = oEvent.clientX - oDiv.offsetLeft;
        disY = oEvent.clientY - oDiv.offsetTop;
        /*鼠标移动事件*/
        document.onmousemove = function (ev) {
            var oEvent = ev || event;   //这里有函数传参ev，这步变量声明不可省略，也不可放在主函数中
            var oX = oEvent.clientX - disX;
            var oY = oEvent.clientY - disY;
            /*防止左边溢出*/
            if (oX < 0) {
                oX = 0;
            }
            /*防止右边溢出*/
            else if (oX > document.documentElement.clientWidth - oDiv.offsetWidth) {
                oX = document.documentElement.clientWidth - oDiv.offsetWidth;
            }
            /*防止上边溢出*/
            if (oY < 0) {
                oY = 0;
            }
            /*防止下边溢出*/
            else if (oY > document.documentElement.clientHeight - oDiv.offsetHeight) {
                oY = document.documentElement.clientHeight - oDiv.offsetHeight;
            }

            oDiv.style.left = oX + 'px';
            oDiv.style.top = oY + 'px';
        };
        /*鼠标左键松开事件*/
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };

        return false;
    }
};













