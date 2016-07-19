/**
 * Created by alice on 2016/7/19.
 */
window.onload = function () {
    var oDiv = document.getElementById('div1');

    document.oncontextmenu = function (ev) {
        var oEvent = ev || event;

        oDiv.style.display = 'block';
        oDiv.style.left = oEvent.clientX + 'px';
        oDiv.style.top = oEvent.clientY + 'px';

        return false; //关闭默认右键菜单
    };

    /*在任意位置左键，菜单消失*/
    document.onclick = function () {
        oDiv.style.display = 'none';
    }
};