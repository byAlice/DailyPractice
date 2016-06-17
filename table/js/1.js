window.onload = function () {
    var oTab = document.getElementById('tab1');
    var oldColor = '';

    var oBtn = document.getElementById('btn1');
    var oName = document.getElementById('name');
    var oAge = document.getElementById('age');
    var num = oTab.tBodies[0].rows.length + 1;
    var oBtn2=document.getElementById('btn2');
    var oTxt=document.getElementById('sname')


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

//搜索
   oBtn2.onclick=function ()
    {
        for(var i=0;i<oTab.tBodies[0].rows.length;i++)
        {
            var sTab=oTab.tBodies[0].rows[i].cells[1].innerHTML.toLowerCase();
            var sTxt=oTxt.value.toLowerCase();

            var arr=sTxt.split(' ');        //转换小写比较

            oTab.tBodies[0].rows[i].style.background='';

            for(var j=0;j<arr.length;j++)
            {
                if(sTab.search(arr[j])!=-1)     //search，找到并返回字符串出现的位置，如果没找到返回-1，这里不等于-1，说明找到
                {
                    oTab.tBodies[0].rows[i].style.background='yellow';
                }
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