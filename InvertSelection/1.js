/**
 * Created by alice on 2016/5/30.
 */
window.onload = function () {
    var oBtn1 = document.getElementById('btn1');
    var oBtn2 = document.getElementById('btn2');
    var oBtn3 = document.getElementById('btn3');
    var oDiv = document.getElementById('div1');
    var aCh = oDiv.getElementsByTagName('input');

    oBtn1.onclick = function () {
        for (var i = 0; i < aCh.length; i++) {
            aCh[i].checked = true;
        }
    };

    oBtn2.onclick = function () {
        for (var i = 0; i < aCh.length; i++) {
            aCh[i].checked = false;
        }
    };

    oBtn3.onclick = function () {
        for (var i = 0; i < aCh.length; i++) {
            if (aCh[i].checked == true) {
                aCh[i].checked = false;
            }
            else {
                aCh[i].checked = true;
            }
        }
    };
};