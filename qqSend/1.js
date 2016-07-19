/**
 * Created by alice on 2016/5/13.
 */
window.onload = function () {
    var oText = document.getElementById("text1");
    var oBtn = document.getElementById("btn1");
    var oChange = document.getElementById("change1");
    var oContent = document.getElementById("content");
    var onOff = true;
    var oSet = oContent.offsetHeight;
    oChange.onclick = myFunction;
    function myFunction() {
        if (onOff) {
            oChange.src = 'images/icon-right.jpg';
            onOff = false;
        }
        else {
            oChange.src = 'images/icon-left.jpg';
            onOff = true;
        }
    }

    function send() {
        if (oText.value == '') {
            alert('请输入点内容吧，点击小头像可以更换哦~ ~')
        }
        else {
            if (onOff) {
                oContent.innerHTML += '<div class="pic1">' + '<span class="sp1">' + oText.value + '</span>' + '</div>';
            }
            else {
                oContent.innerHTML += '<div class="pic2">' + '<span class="sp2">' + oText.value + '</span>' + '</div>';
            }
            oText.value = '';
        }
    }

    /*点击事件*/
    oBtn.onclick = function () {
        send();
    };

    /*键盘事件  enter*/
    oText.onkeydown = function (ev) {
        var oEvent = ev || event;
        if (oEvent.keyCode == 13) {
            send();
        }
    };
    /*
     * 组合按键  ctrl+enter
     * oText.onkeydown = function (ev) {
     var oEvent = ev || event;
     if (oEvent.keyCode == 13&&oEvent.ctrlKey) {
     send();
     }
     };
     * */

    /*内容溢出出现垂直方向出现滚动条*/
    if (oSet == 0) {
        oContent.style.overflowY = 'scroll'
    }

};