/**
 * Created by alice on 2016/7/28.
 */
window.onload = function () {
    var oBtn = document.getElementById('btn');
    oBtn.onclick = function () {
        //获取第一个输入框的值
        var oTxt1 = document.getElementById("txt1").value;       //有值才能取到value
        //获取第二个输入框的值
        var oTxt2 = document.getElementById("txt2").value;
        //获取选择框的值
        var oSel = document.getElementById("select").value;
        //获取通过下拉框来选择的值来改变加减乘除的运算法则
        var oResult = "";
        switch (oSel) {
            case "+":
                oResult = parseFloat(oTxt1) + parseFloat(oTxt2);
                break;
            case "-":
                oResult = parseFloat(oTxt1) - parseFloat(oTxt2);
                break;
            case "*":
                oResult = parseFloat(oTxt1) * parseFloat(oTxt2);
                break;
            default:
                oResult = parseFloat(oTxt1) / parseFloat(oTxt2);
        }
        //设置结果输入框的值
        var oOut = document.getElementById("fruit");
        oOut.value = oResult;
    };
};
