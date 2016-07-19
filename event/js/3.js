/**
 * Created by alice on 2016/7/19.
 */
/*
 * 通过按键控制div变化说明：
 上：↑ 下：↓ 左：← 右：→
 Ctrl + 1 : 背景变为绿色
 Ctrl + 2 : 背景变为黄色
 Ctrl + 3 : 背景变为蓝色
 Ctrl + 4 : 背景变为紫色
 Ctrl + 5 : 背景变为红色
 Ctrl + ↑ : 放大
 Ctrl + ↓ : 缩小
 * */

window.onload = function () {
    var oBox = document.getElementById("box");
    var bLeft = bTop = bRight = bBottom = bCtrlKey = false;

    /*解决停顿问题*/
    setInterval(function () {
        if (bLeft) {
            oBox.style.left = oBox.offsetLeft - 10 + "px"
        }
        else if (bRight) {
            oBox.style.left = oBox.offsetLeft + 10 + "px"
        }
        if (bTop) {
            oBox.style.top = oBox.offsetTop - 10 + "px"
        }
        else if (bBottom) {
            oBox.style.top = oBox.offsetTop + 10 + "px"
        }
        //防止溢出
        limit();
    }, 30);

    document.onkeydown = function (event) {
        var oEvent = event || window.event;
        var bCtrlKey = oEvent.ctrlKey;  //当事件发生时，ctrl被同时按下，即组合键
        var oldWidth = oBox.offsetWidth;
        var oldHeight = oBox.offsetHeight;

        switch (oEvent.keyCode) {
            case 37:
                bLeft = true;
                break;  //左箭头←
            case 38:
                if (bCtrlKey) {
                    oBox.style.width = oBox.offsetWidth * 1.5 + "px";
                    oBox.style.height = oBox.offsetHeight * 1.5 + "px";
                    oBox.style.left = oBox.offsetLeft - (oBox.offsetWidth - oldWidth) / 2 + "px";
                    oBox.style.top = oBox.offsetTop - (oBox.offsetHeight - oldHeight) / 2 + "px";
                    break;
                }   //ctrl+↑：div变大
                bTop = true;
                break;    //上箭头↑
            case 39:
                bRight = true;
                break;  //右箭头→
            case 40:
                if (bCtrlKey) {
                    oBox.style.width = oBox.offsetWidth * 0.75 + "px";
                    oBox.style.height = oBox.offsetHeight * 0.75 + "px";
                    oBox.style.left = oBox.offsetLeft - (oBox.offsetWidth - oldWidth) / 2 + "px";
                    oBox.style.top = oBox.offsetTop - (oBox.offsetHeight - oldHeight) / 2 + "px";
                    break;
                }   //ctrl+↓：div变小
                bBottom = true;
                break;  //下箭头↓
            case 49:
                bCtrlKey && (oBox.style.background = "green");
                break;  //ctrl+1,div颜色变成绿色
            case 50:
                bCtrlKey && (oBox.style.background = "yellow");
                break;  //ctrl+2,div颜色变成黄色
            case 51:
                bCtrlKey && (oBox.style.background = "blue");
                break;  //ctrl+3,div颜色变成蓝色
            case 52:
                bCtrlKey && (oBox.style.background = "purple");
                break;  //ctrl+4,div颜色变成蓝色
            case 53:
                bCtrlKey && (oBox.style.background = "red");
                break;  //ctrl+5,div颜色变成红色
        }
        return false
    };
    document.onkeyup = function (event) {
        switch ((event || window.event).keyCode) {
            case 37:
                bLeft = false;
                break;
            case 38:
                bTop = false;
                break;
            case 39:
                bRight = false;
                break;
            case 40:
                bBottom = false;
                break;
        }
    };
    //防止溢出
    function limit() {
        var doc = [document.documentElement.clientWidth, document.documentElement.clientHeight];
        //防止左侧溢出
        oBox.offsetLeft <= 0 && (oBox.style.left = 0);
        //防止顶部溢出
        oBox.offsetTop <= 0 && (oBox.style.top = 0);
        //防止右侧溢出
        doc[0] - oBox.offsetLeft - oBox.offsetWidth <= 0 && (oBox.style.left = doc[0] - oBox.offsetWidth + "px");
        //防止底部溢出
        doc[1] - oBox.offsetTop - oBox.offsetHeight <= 0 && (oBox.style.top = doc[1] - oBox.offsetHeight + "px")
    }
};