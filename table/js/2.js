/**
 * Created by alice on 2016/6/19.
 */
window.onload = function () {
    var oTab = document.getElementById('tab1');
    var oBtn = document.getElementById('btn1');

    oBtn.onclick = function () {
        //var aTr = oTab1.getElementsByTagName('tr');
        var arr = [];

        for (var i = 0; i < oTab.tBodies[0].rows.length; i++) {
            arr[i] = oTab.tBodies[0].rows[i];
        }

        arr.sort(function (tr1, tr2) {
                var n1 = parseInt(tr1.cells[0].innerHTML);   //将tr中第一个单元格的数字以10为基数返回成整数
                var n2 = parseInt(tr2.cells[0].innerHTML);
                return n1 - n2;
            }
        );

        for (i = 0; i < arr.length; i++) {
            oTab.tBodies[0].appendChild(arr[i]);
        }
    }
};