/**
 * Created by alice on 2016/6/19.
 */
window.onload = function () {
    var oUl1 = document.getElementById('ul1');
    var oBtn = document.getElementById('btn1');

    oBtn.onclick = function () {
        var aLi = oUl1.getElementsByTagName('li');
        var arr = [];

        for (var i = 0; i < aLi.length; i++) {
            arr[i] = aLi[i];
        }

        arr.sort(function (li1, li2) {
                var n1 = parseInt(li1.innerHTML);
                var n2 = parseInt(li2.innerHTML);
                return n1 - n2;
            }
        );

        for (i = 0; i < arr.length; i++) {
            oUl1.appendChild(arr[i]);
        }
    }
};