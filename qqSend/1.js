/**
 * Created by alice on 2016/5/13.
 */
window.onload = function () {
    var oText = document.getElementById("text1");
    var oBtn = document.getElementById("btn1");
    var oChange = document.getElementById("change1");
    var oContent = document.getElementById("content");
    var onOff = true;
    var oSet = oContent.offsetHeight;
    /*��ȡԪ�ظ߶ȡ�ע�⣺�����ʽ����д�����ڵģ��ǲ���ֱ��ͨ��style.width���Ԫ�ظ߶ȵ�*/
    oChange.onclick = myFunction;
    /*�л�����ͼƬ*/
    function myFunction() {
        if (onOff) {
            oChange.src = 'img/a2.png';
            onOff = false;
        }
        else {
            oChange.src = 'img/a1.png';
            onOff = true;
        }
    }

    oBtn.onclick = function () {
        if (oText.value == '') {
            alert('����������ݰ�~ ~')
        }//ע�⣺alert()�������У��ַ���Ҫ�����Ų���
        else {
            if (onOff) {
                oContent.innerHTML += '<div class="pic1">' + '<span class="sp1">' + oText.value + '</span>' + '</div>';
            }
            else {
                oContent.innerHTML += '<div class="pic2">' + '<span class="sp2">' + oText.value + '</span>' + '</div>';
            }
            oText.value = '';
        }
    };
    if (oSet == 0) {
        oContent.style.overflowY = 'scroll'
    }

};