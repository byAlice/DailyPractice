/**
 * Created by alice on 2016/7/3.
 */
window.onload = function () {
    var aDiv = document.getElementsByTagName('div');

    for (var i = 0; i < aDiv.length; i++) {
        aDiv[i].timer = null;

        aDiv[i].onmousemove = function () {
            startMove(this, 'width', 400);
        };

        aDiv[i].onmouseout = function () {
            startMove(this, 'width', 100);
        };
    }

};
