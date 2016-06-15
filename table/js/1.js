window.onload = function () {
    var oTab = document.getElementById('tab1');
    var oldColor = '';

    var oBtn = document.getElementById('btn1');
    var oName = document.getElementById('name');
    var oAge = document.getElementById('age');
    var num = oTab.tBodies[0].rows.length + 1;


    //表格删除与添加
    oBtn.onclick = function () {
        var oTr = document.createElement('tr');
        var oTd = document.createElement('td');
        oTd.innerHTML = num++;
        oTr.appendChild(oTd);

        var oTd = document.createElement('td');
        oTd.innerHTML = oName.value;
        oTr.appendChild(oTd);

        var oTd = document.createElement('td');
        oTd.innerHTML = oAge.value;
        oTr.appendChild(oTd);

        var oTd = document.createElement('td');
        oTd.innerHTML = '<a href="javascipt:;">删除</a>';
        oTr.appendChild(oTd);

        oTd.getElementsByTagName('a')[0].onclick = function () {
            oTab.tBodies[0].removeChild(this.parentNode.parentNode);
        };

        oTab.tBodies[0].appendChild(oTr);

        //隔行换色
        for (var i = 0; i < oTab.tBodies[0].rows.length; i++) {
            oTab.tBodies[0].rows[i].onmouseover = function () {
                oldColor = this.style.background;
                this.style.background = 'green';
            };
            oTab.tBodies[0].rows[i].onmouseout = function () {
                this.style.background = oldColor;
            };
            if (i % 2) {
                oTab.tBodies[0].rows[i].style.background = '';    //偶数行
            }
            else {
                oTab.tBodies[0].rows[i].style.background = '#eeeeee';  //奇数行
            }

        }
    };
    //隔行换色
    for (var i = 0; i < oTab.tBodies[0].rows.length; i++) {
        oTab.tBodies[0].rows[i].onmouseover = function () {
            oldColor = this.style.background;
            this.style.background = 'green';
        };
        oTab.tBodies[0].rows[i].onmouseout = function () {
            this.style.background = oldColor;
        };
        if (i % 2) {
            oTab.tBodies[0].rows[i].style.background = '';    //偶数行
        }
        else {
            oTab.tBodies[0].rows[i].style.background = '#eeeeee';  //奇数行
        }

    }


};