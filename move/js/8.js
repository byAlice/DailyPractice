window.onload=function () {
    var oDiv1=document.getElementById('div1');
    var oDiv2=document.getElementById('div2');

    oDiv1.onmouseover=function () {
        startMove(this,'height',300);
    };
    oDiv1.onmouseout=function () {
        startMove(this,'height',100);
    };
    oDiv2.onmouseover=function () {
        startMove(this,'width',300);
    };
    oDiv2.onmouseout=function () {
        startMove(this,'width',100);
    };
};
