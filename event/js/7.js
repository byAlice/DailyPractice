/**
 * Created by alice on 2016/7/20.
 */
window.onload = function () {
    var oStrip = document.getElementById('strip');
    var oStrip1 = document.getElementById('strip1');
    var oSmall = document.getElementById('small');
    var oSmall1 = document.getElementById('small1');
    var oBox = document.getElementById('box');
    var oBox1 = document.getElementById('box1');
    var oContainer = document.getElementById('container');
    var disX = 0;

    /*自定义滚动条控制div大小及透明度*/
    oSmall.onmousedown = function (ev) {
        var oEvent = ev || event;

        disX = oEvent.clientX - oSmall.offsetLeft;

        document.onmousemove = function (ev) {
            var oEvent = ev || event;
            var oX = oEvent.clientX - disX;
            /*防止溢出*/
            if (oX < 0) {
                oX = 0;
            }
            else if (oX > oStrip.offsetWidth - oSmall.offsetWidth) {
                oX = oStrip.offsetWidth - oSmall.offsetWidth;
            }

            oSmall.style.left = oX + 'px';

            /*比例*/
            var scale = oX / (oStrip.offsetWidth - oSmall.offsetWidth);

            /*div宽高变化*/
            oBox.style.width = 600 * scale + 'px';
            oBox.style.height = 600 * scale + 'px';

            /*div透明度变化*/
            oBox.style.filter = 'alpha(opacity:' + scale * 100 + ')';
            oBox.style.opacity = scale;
        };

        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };


    /*自定义滚动条控制文本滚动*/
    oSmall1.onmousedown = function (ev) {
        var oEvent = ev || event;

        disY = oEvent.clientY - oSmall1.offsetTop;

        document.onmousemove = function (ev) {
            var oEvent = ev || event;
            var oY = oEvent.clientY - disY;
            /*防止溢出*/
            if (oY < 0) {
                oY = 0;
            }
            else if (oY > oStrip1.offsetHeight - oSmall1.offsetHeight) {
                oY = oStrip1.offsetHeight - oSmall1.offsetHeight;
            }

            oSmall1.style.top = oY + 'px';

            /*比例*/
            var scale = oY / (oStrip1.offsetHeight - oSmall1.offsetHeight);

            /*文本滚动*/
            oBox1.style.top = -(oBox1.offsetHeight - oContainer.offsetHeight) * scale + 'px';

        };

        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;

        };
    };
    return false;
};