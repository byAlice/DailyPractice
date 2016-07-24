/**
 * Created by alice on 2016/7/24.
 */
window.onload= function () {
  var oTxt=document.getElementById('txt');
  var oBtn=document.getElementById('btn');
    oBtn.onclick= function () {
        /*开头   +  英文数字下划线 +  @  数字字母   +  .  +  英文  + 结尾
        * 例：1533674340@qq.com*/
        var re=/^\w+@[a-z0-9]+\.[a-z]+$/i;
        if(re.test(oTxt.value)){
            alert('合法的邮箱');
        }
        else{
            alert('邮箱格式错误，请重新输入')
        }
    }
};