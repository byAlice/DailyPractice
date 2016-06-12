/**
 * Created by alice on 2016/5/30.
 */
window.onload = function () {
    //var oDiv=document.getElementById('container');
    var aBtn = document.getElementsByTagName('input');
    var aDiv = document.getElementsByTagName('div');
    for (var i = 0; i < aBtn.length; i++) {
        aBtn[i].index = i;
        aBtn[i].onclick = function () {
            for (var i = 0; i < aBtn.length; i++) {
                aBtn[i].className = '';
                aDiv[i].style.display = 'none';
            }
            this.className = 'active';
            //alert(this.index);
            aDiv[this.index].style.display = 'block';
        };
    }
};
