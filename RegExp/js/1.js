/**
 * Created by alice on 2016/7/24.
 */
window.onload = function () {
    var oTxt1 = document.getElementById('txt1');
    var oTxt2 = document.getElementById('txt2');
    var oBtn = document.getElementById('btn');
    oBtn.onclick = function () {
        var re = /sb|尼玛|md/gi;

        if (oTxt1.value == '') {
            alert("输入一些文字吧！但是敏感词【sb，尼玛，md】会被过滤");
        }
        else{
            oTxt2.value = oTxt1.value.replace(re, '**');
        }
    }
};