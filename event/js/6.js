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
        /*添加框*/
        var oBox = document.createElement('div'); //创建一个div
        oBox.className = 'box';
        oBox.style.width = oDiv.offsetWidth - 2 + 'px';
        oBox.style.height = oDiv.offsetHeight - 2 + 'px';
        /*确定框的位置*/
        oBox.style.left = oDiv.offsetLeft + 'px';
        oBox.style.top = oDiv.offsetTop + 'px';

        document.body.appendChild(oBox);    //将创建的div追加到body节点上

        /*鼠标捕获*/
        if (oBox.setCapture) {
            //ie
            oBox.onmousemove = mouseMove; //不加（）
            oBox.onmouseup = mouseUp;     //不加（）
        }
        else {
            //chrome,firefox
            document.onmousemove = mouseMove; //不加（）
            document.onmouseup = mouseUp;     //不加（）
        }

        /*鼠标移动事件*/
        function mouseMove(ev) {
            var oEvent = ev || event;   //这里有函数传参ev，这步变量声明不可省略，也不可放在主函数中
            var oX = oEvent.clientX - disX;
            var oY = oEvent.clientY - disY;

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
            else if (oX > document.documentElement.clientWidth - oDiv.offsetWidth) {
                oX = document.documentElement.clientWidth - oDiv.offsetWidth;
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
            else if (oY > document.documentElement.clientHeight - oDiv.offsetHeight) {
                oY = document.documentElement.clientHeight - oDiv.offsetHeight;
            }

            oBox.style.left = oX + 'px';
            oBox.style.top = oY + 'px';
        }

        /*鼠标左键松开事件*/
        function mouseUp() {
            this.onmousemove = null;
            this.onmouseup = null;

            /*使div移动到框的位置*/
            oDiv.style.left = oBox.offsetLeft + 'px';
            oDiv.style.top = oBox.offsetTop + 'px';
            /*移除框*/
            document.body.removeChild(oBox);

            /*关闭鼠标捕获*/
            if (oBox.releaseCapture) {
                oBox.releaseCapture();
            }
        }

        return false;   //解决chrome，firefox，IE9下部分默认行为
    }
};













