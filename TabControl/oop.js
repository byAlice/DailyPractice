/**
 * Created by alice on 2016/7/23.
 */
/*面向对象方式*/
window.onload = function () {
    new TabSwitch('who');   //原型里面已经制定了参数为oBtn，即正点击的按钮，这里的参数可随意
};
/*构造函数加属性*/
function TabSwitch(id) {
    var _this = this;
    /*alert(_this);*/
    this.aBtn = document.getElementsByTagName('input');
    this.aDiv = document.getElementsByTagName('div');
    for (var i = 0; i < this.aBtn.length; i++) {
        this.aBtn[i].index = i;
        this.aBtn[i].onclick = function () {
            _this.fnClick(this);    //_this:new出来的对象;   this:oBtn,即当前被点击的按钮;
        };
    }
}
/*原型加方法*/
TabSwitch.prototype.fnClick = function (oBtn) {
    for (var i = 0; i < this.aBtn.length; i++) {
        this.aBtn[i].className = '';
        this.aDiv[i].style.display = 'none'
    }
    oBtn.className = 'active';
    this.aDiv[oBtn.index].style.display = 'block';
};