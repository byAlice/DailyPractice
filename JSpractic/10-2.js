/**
 * Created by alice on 2016/5/13.
 */
window.onload = function () {
    var onOff = true;
    var btn = document.getElementsByTagName('input');
    var con = document.getElementById('container');
    var aDiv = con.getElementsByTagName('div');
    var arr = ['#red', 'green', 'blue', 'purple', 'black', 'yellow'];
    btn[0].onclick = function () {
        con.innerHTML = '';
        if (onOff) {
            for (var i = 0; i < 100; i++) {
                con.innerHTML += '<div class="div">' + i + '</div>';
                aDiv[i].style.left += 20 + i * 120 + 'px';
            }

        }
    };
    btn[1].onclick = function () {
        con.innerHTML = '';
        for (var i = 0; i < 100; i++) {
            con.innerHTML += '<div class="div">' + i + '</div>';
        }
        for (i = 0; i < 100; i += 10) {
            for (var j = 0; j < 10; j++) {
                aDiv[i + j].style.left += 20 + j * 120 + 'px';
                aDiv[i + j].style.top += 40 + i * 20 + 'px';
            }
        }


    };
    btn[2].onclick = function () {
        for (var i = 0; i < 100; i += 6) {
            for (var j = 0; j < 6; j++) {
                aDiv[i + j].style.backgroundColor = arr[j];
            }
        }

    };
    btn[3].onclick = function () {
        con.innerHTML = '';
        for (var i = 0; i < 11; i++) {
            con.innerHTML += '<div class="div">' + i + '</div>';
            if (i < 6) {
                aDiv[i].style.left += 20 + i * 120 + 'px';
                aDiv[i].style.top += 40 + i * 120 + 'px';
            }
            else {
                aDiv[i].style.left += 20 + i * 120 + 'px';
                aDiv[i].style.top += 740 - (i - 4) * 120 + 'px';
            }
        }
    };
    btn[4].onclick = function () {
        con.innerHTML = '';
        for (var i = 0; i < 11; i++) {
            con.innerHTML += '<div class="div">' + i + '</div>';
            if (i < 6) {
                aDiv[i].style.left += 20 + i * 120 + 'px';
                aDiv[i].style.top += 740 - i * 120 + 'px';
            }
            else {
                aDiv[i].style.left += 20 + i * 120 + 'px';
                aDiv[i].style.top += 40 + (i - 4) * 120 + 'px';
            }
        }
    };
};
function $(id) {
    return document.getElementById(id);
}