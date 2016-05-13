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
    /*获取元素高度。注意：如果样式不是写在行内的，是不能直接通过style.width获得元素高度的*/
    oChange.onclick = myFunction;
    /*切换聊天图片*/
    function myFunction() {
        if (onOff) {
            oChange.src = 'img/a2.png';
            onOff = false;
        }
        else {
            oChange.src = 'img/a1.png';
            onOff = true;
        }
    }

    oBtn.onclick = function () {
        if (oText.value == '') {
            alert('请输入点内容吧~ ~')
        }//注意：alert()的括号中，字符串要加引号才行
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