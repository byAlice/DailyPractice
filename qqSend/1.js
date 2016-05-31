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

    oBtn.onclick = function () {
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
    };
    if (oSet == 0) {
        oContent.style.overflowY = 'scroll'
    }

};