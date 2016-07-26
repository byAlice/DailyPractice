/**
 * Created by alice on 2016/7/26.
 */
window.onload = function () {
    var box = document.getElementById('divselect'),
        title = box.getElementsByTagName('cite')[0],
        menu = box.getElementsByTagName('ul')[0],
        aLi = box.getElementsByTagName('a'),
        index = -1;

    // 点击三角时
    title.onclick = function (ev) {
        ev = ev || window.event;
        if (ev.stopPropagation) {
            ev.stopPropagation();
        } else {
            cancelBubble = true;
        }
        menu.style.display = 'block';

        document.onkeyup = function (ev) {
            ev = ev || window.event;
            for (i = 0; i < aLi.length; i++) {
                aLi[i].style.background = 'none';
            }
            //如果按向下方向键
            if (ev.keyCode == 40) {
                index++;
                if (index >= aLi.length) {
                    index = 0;
                }
                aLi[index].style.background = '#ccc';
            }
            //如果按向上方向键
            if (ev.keyCode == 38) {
                if (index <= 0) {
                    index = aLi.length;
                }
                index--;
                aLi[index].style.background = '#ccc';
            }
            //如果按了回车键
            if (ev.keyCode == 13 && index != -1) {
                title.innerHTML = aLi[index].innerHTML;
                for (var i = 0; i < aLi.length; i++) {
                    aLi[i].style.background = 'none';
                }
                menu.style.display = 'none';
                index = -1;
            }
        }
    };
    //滑过、离开、点击每个选项时
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].onmousemove = function () {
            this.style.background = '#ccc';
        };
        aLi [i].onmouseout = function () {
            this.style.background = '#fff';
        };
        aLi [i].onclick = function () {
            title.innerHTML = this.innerHTML;
        }
    }

    // 点击页面空白处时
    document.onclick = function () {
        menu.style.display = 'none';
    }
};