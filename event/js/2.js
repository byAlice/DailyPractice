/**
 * Created by alice on 2016/7/19.
 */

/*获取坐标*/
function getPos(ev) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

    return {
        x: ev.clientX + scrollLeft,
        y: ev.clientY + scrollTop
    };
}

window.onload = function () {

    document.onmousemove = function (ev) {
        var aDiv = document.getElementsByTagName('div');
        var oEvent = ev || event;

        var pos = getPos(oEvent);
        /*后一个div位置随前一个div位置改变，第一个div随鼠标位置移动*/
        for (var i = aDiv.length - 1; i > 0; i--) {
            aDiv[i].style.left = aDiv[i - 1].offsetLeft + 'px';
            aDiv[i].style.top = aDiv[i - 1].offsetTop + 'px';
        }

        aDiv[0].style.left = pos.x + 'px';
        aDiv[0].style.top = pos.y + 'px';
    }
};