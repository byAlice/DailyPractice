window.onload = function () {
    var oDiv = document.getElementById('div1');
    oDiv.onmouseover = function () {
        startMove(oDiv, 'width', 300, function () {
            startMove(oDiv, 'height', 300, function () {
                startMove(oDiv, 'opacity', 100);
            })
        })
    };

    oDiv.onmouseout = function () {
        startMove(oDiv, 'opacity', 30, function () {
            startMove(oDiv, 'height', 100, function () {
                startMove(oDiv, 'width', 100);
            })
        })
    }
};