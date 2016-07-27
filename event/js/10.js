/**
 * Created by alice on 2016/7/27.
 */
var data = [
    '8：00-9:00',
    '9：00-10:00',
    '10：00-11:00',
    '13：00-14:00',
    '14：00-15:00',
    '15：00-16:00',
    '16：00-17:00'
];
var timer = null;
var flag = 0;
window.onload = function () {
    var oBox = document.getElementById('box');
    var oBtn = document.getElementById('btn');
    var aBtn = oBtn.getElementsByTagName('input');
    var oResult = document.getElementById('result');

    //开始、结束抽奖
    aBtn[0].onclick = play;
    aBtn[1].onclick = stop;
    function play() {
        clearInterval(timer);
        if (data.length != 0) {
            timer = setInterval(function () {
                var oRandom = Math.floor(Math.random() * data.length);

                oBox.innerHTML = data[oRandom];
            }, 50);
        }
        else {
            clearInterval(timer);
            oBox.innerHTML = "教练的时间被抢完了！";
            aBtn[0].style.background = '#999';
            aBtn[1].style.background = '#999';
        }
        aBtn[0].style.background = '#999';
    }

    function stop() {
        clearInterval(timer);
        if (data.length != 0) {
            var oName = prompt('请输入你的姓名：');
            aBtn[0].style.background = '#036';
            oResult.innerHTML += oName + ':' + oBox.innerHTML + '</br>';
        }
        else {
            aBtn[0].style.background = '#999';
        }
        var oTxt = oBox.innerHTML;

        /*
         oBox.innerHTML = '奖品被抽完了！';
         }*/

        for (var i = 0; i < data.length; i++) {
            if (oTxt == data[i]) {
                data.splice(i, 1);
            }
        }
    }

};