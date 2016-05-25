/**
 * Created by lenovo on 2016/5/24.
 */
/*
 function showPic(whichpic){
 var source = whichpic.getAttribute("href");
 var placeholder = document.getElementById("placeholder");
 placeholder.setAttribute("src",source);
 var text = whichpic.getAttribute("title");
 var description = document.getElementById("description");
 description.firstChild.nodeValue = text;
 }*/
/*
window.onload = function () {

    prepareGallery();

};

function prepareGallery() {
    if (!document.getElementsByTagName) return false;//��鵱ǰ������Ƿ����getElementsByTagName�����ķ������������뿪�����ͼ���ִ��
    if (!document.getElementById) return false;//��鵱ǰ������Ƿ����getElementById()�ķ������������뿪�����ͼ���ִ��
    if (!document.getElementById("imagegallery")) return false;//��鵱ǰ��ҳ�Ƿ����һ��id����ֵ��"imagegallery"��Ԫ�أ��������뿪�����ͼ���ִ��
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {    //���������е����ӣ�links�൱�ڽڵ��б�
        links[i].onclick = function () {        //���������������onclick�¼���onclickҲ�ܺõ�֧�ּ����¼���
            return showPic(this);
        }
    }
}
/!*���ͼƬ�л��ɹ���showPic()����Ӧ�÷���false��
  ���ͼƬ�л����ɹ���showPic()����Ӧ�÷���true��
*!/
function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return true; //���ͼƬ�����ڣ�����ִ��
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return true;  //
    placeholder.setAttribute("src", source); //�л�ͼƬ
    if (!document.getElementById("description")) return false; //���ͼƬ�л��ɹ�����ʹdescriptionԪ��δ��ˢ�£�ҲҪȡ��onclick�¼�Ĭ����Ϊ
    var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";    //�����titleֵ���Ͱ�ֵ����text�����titleֵΪ�գ�textֵΪnull
    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {     //�жϽڵ������ǲ����ı�����
        description.firstChild.nodeValue = text;
    }
    return false; //�л�ͼƬ��ˢ��descriptionԪ�ض�ȡ�óɹ�����ʱ����ȡ��onclick�¼�Ĭ����Ϊ
}
*/
/*window.onload = function () {
    preparePlaceholder();
    prepareGallery();


};*/
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    }
    else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }
    else{
        parent.insertBefore(newElement,targetElement.nextSibling)
    }
}
function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","img/1.jpg");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var desctext = document.createTextNode("choose an image");
    description.appendChild(desctext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,gallery);
}
function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i = 0;i< links.length;i++) {
        links[i].onlick = function(){
            return showPic(this);
        };
        links[i].onkeypress = links[i].onclick;
    }
}
function showPic(whichpic){
    if(!document.getElementById("placeholder")) return true;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if(!document.getElementById("description")) return false;
    if(whichpic.getAttribute("title")){
        var text = whichpic.getAttribute("title");
    }
    else{
        text = "";
    }
    var description = document.getElementById("description");
    if(description.firstChild.nodeType ==3){
        description.firstChild.nodeValue = text;
    }
    return false;
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
