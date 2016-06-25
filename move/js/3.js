window.onload=function () {
    var oDiv=document.getElementById('div1');
    var oBtn=document.getElementById('btn');
    var oS=document.getElementById('s');
    var oV=document.getElementById('v');

    oBtn.onclick=function startMove() {
        setInterval(function () {
            var speed=(300-oDiv.offsetLeft)/10;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);   //速度=（目标值-当前值）/缩放系数

            oDiv.style.left=oDiv.offsetLeft+speed+'px';
            oS.value=oDiv.offsetLeft;
            oV.value=speed;

        },30);
    }
}
