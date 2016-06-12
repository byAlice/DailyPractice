function toDouble(n) {
    if (n < 10) {
        return '0' + n;
    }
    else {
        return '' + n;
    }
}

window.onload = function () {
    var oYear = document.getElementById('year');
    var oTime = document.getElementById('time');
    var oWeek = document.getElementById('week');
    var aImg1 = oYear.getElementsByTagName('img');
    var aImg2 = oTime.getElementsByTagName('img');
    var aImg3 = oWeek.getElementsByTagName('img');

    function year() {
        var oDate = new Date();
        var str1 = oDate.getFullYear() + toDouble(oDate.getMonth() + 1) + toDouble(oDate.getDate());
        for (var i = 0; i < aImg1.length; i++) {
            aImg1[i].src = 'images/' + str1.charAt(i) + '.png';
        }
    }

    function time() {
        var oDate = new Date();
        var str2 = toDouble(oDate.getHours()) + toDouble(oDate.getMinutes()) + toDouble(oDate.getSeconds());
        for (var i = 0; i < aImg2.length; i++) {
            aImg2[i].src = 'images/' + str2.charAt(i) + '.png';
        }
    }

    function week() {
        var oDate = new Date();
        var n = oDate.getDay();
        switch (n) {
            case 1:
                aImg3[1].src = 'images/week1.png';
            case 2:
                aImg3[1].src = 'images/week2.png';
            case 3:
                aImg3[1].src = 'images/week3.png';
            case 4:
                aImg3[1].src = 'images/week4.png';
            case 5:
                aImg3[1].src = 'images/week5.png';
            case 6:
                aImg3[1].src = 'images/week6.png';
            case 0:
                aImg3[1].src = 'images/week7.png';
        }
    }

    setInterval(time, 1000);
    time();
    year();
    week();
};