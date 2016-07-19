/**
 * Created by alice on 2016/7/19.
 */
window.onload = function () {
    var oTxt = document.getElementById('txt');

    oTxt.onkeydown = function (ev) {
        var oEvent = ev || event;
        /*数字  0~9 分别依次对应  keyCode  48~57
         数字小键盘数字 0~9 分别依次对应  keyCode  96~105
         keyCode 8 对应  backspace按键（删除键）
         如果按的不是退格也不是数字，无法输入*/
        if (oEvent.keyCode != 8 && (oEvent.keyCode < 48 || (57 < oEvent.keyCode && oEvent.keyCode < 96 ) || oEvent.keyCode > 105 )) {
            return false;
        }
    }
};