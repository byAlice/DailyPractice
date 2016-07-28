/**
 * Created by alice on 2016/7/19.
 */
window.onload = function () {
    var oBtn = document.getElementById('btn1');
    var oDiv = document.getElementById('div1');

    oBtn.onclick = function (ev) {
        var oEvent = ev || event;      //获取event对象，兼容性写法

        oDiv.style.display = 'block';
        //alert('按钮被点击了');  //可用来检查代码

        oEvent.cancelBubble = true; //取消事件冒泡，即点击事件不向上级传递
    };

    document.onclick = function () {
        oDiv.style.display = 'none';
        //alert('document被点击了');    //可用来检查代码
    };
};
