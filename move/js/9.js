/**
 * Created by alice on 2016/7/17.
 */
window.onload = function () {
    var oBtn = document.getElementById('btn1');
    var oUl = document.getElementById('ul1');
    var oTxt = document.getElementById('content');

    oBtn.onclick = function () {
        var oLi = document.createElement('li');

        oLi.innerHTML = oTxt.value;
        oTxt.value = '';

        if (oUl.children.length > 0) {
            oUl.insertBefore(oLi, oUl.children[0]);
        }
        else {
            oUl.appendChild(oLi);
        }

        //运动
        var iHeight = oLi.offsetHeight;

        oLi.style.height = '0';

        startMove(oLi, {height: iHeight}, function () {
            startMove(oLi, {opacity: 100});
        })
    }
};