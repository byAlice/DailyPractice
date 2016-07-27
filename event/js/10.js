/**
 * Created by alice on 2016/7/27.
 */
window.onload = function () {
    var oBox = document.getElementById('box');
    var oBtn = document.getElementById('btn');
    var aBtn = oBtn.getElementsByTagName('input');
    var oResult = document.getElementById('result');
    var oFlag = 1;
    var timer = null;
    var data = [
        '8:00-9:00',
        '9:00-10:00',
        '10:00-11:00',
        '13:00-14:00',
        '14:00-15:00',
        '15:00-16:00',
        '16:00-17:00'
    ];

    //开始、结束抽时间
    aBtn[0].onclick = play;
    aBtn[1].onclick = stop;

    //按了空格键
    document.onkeyup = function (event) {
        var oEvent = event || window.event;

        if (oEvent.keyCode == 13) {
            //oFlag用来判断键盘上按了回车后触发的事件，oFlag==1开始，oFlag==0结束
            if (oFlag == 1) {
                play();
            }
            else {
                stop();
            }
        }
    };

    //开始
    function play() {
        aBtn[0].style.background = '#999';  //开始按钮变灰色
        aBtn[1].style.background = '#036';  //结束按钮变蓝色
        oFlag = 0;
        //数组长度不为0时
        if (data.length != 0) {
            clearInterval(timer);
            timer = setInterval(function () {
                //数组随机数=【（0-1之间随机数）*数组长度】向下取整
                var oRandom = Math.floor(Math.random() * data.length);
                //把数组里的某个元素展示到oBox中
                oBox.innerHTML = data[oRandom];
            }, 50);
        }
        //数组长度为0时
        else {
            clearInterval(timer);
            oBox.innerHTML = "教练的时间被抢完了！";
            aBtn[0].style.background = '#999';  //开始按钮变灰色
            aBtn[1].style.background = '#999';  //结束按钮变灰色
        }
    }

    //结束
    function stop() {
        oFlag = 1;
        var oTxt = oBox.innerHTML;
        //删除已选的数组元素
        for (var i = 0; i < data.length; i++) {
            if (oTxt == data[i]) {
                data.splice(i, 1);
            }
        }
        //数组长度不为0
        if (data.length != 0) {
            clearInterval(timer);
            aBtn[0].style.background = '#036';  //开始按钮变蓝色
            //oBox的内容不是"开始抢时间了"，判断有没有开始抽，没开始就不打印结果
            if (oBox.innerHTML != "开始抢时间了") {
                var oName = prompt('请输入你的姓名：');
                oResult.innerHTML += oName + ':' + oTxt + '</br>';
                aBtn[1].style.backgroundColor = '#999';  //结束按钮变灰色
            }
        }
        else {
            aBtn[0].style.background = '#999';  //开始按钮变灰色
        }

    }
};