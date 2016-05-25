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
    if (!document.getElementsByTagName) return false;//检查当前浏览器是否理解getElementsByTagName（）的方法；不理解就离开，理解就继续执行
    if (!document.getElementById) return false;//检查当前浏览器是否理解getElementById()的方法，不理解就离开，理解就继续执行
    if (!document.getElementById("imagegallery")) return false;//检查当前网页是否包含一个id属性值是"imagegallery"的元素，不理解就离开，理解就继续执行
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {    //遍历数组中的链接（links相当于节点列表）
        links[i].onclick = function () {        //给数组中链接添加onclick事件（onclick也很好的支持键盘事件）
            return showPic(this);
        }
    }
}
/!*如果图片切换成功，showPic()函数应该返回false；
  如果图片切换不成功，showPic()函数应该返回true；
*!/
function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return true; //如果图片不存在，继续执行
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return true;  //
    placeholder.setAttribute("src", source); //切换图片
    if (!document.getElementById("description")) return false; //如果图片切换成功，即使description元素未被刷新，也要取消onclick事件默认行为
    var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";    //如果有title值，就把值赋给text，如果title值为空，text值为null
    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {     //判断节点属性是不是文本属性
        description.firstChild.nodeValue = text;
    }
    return false; //切换图片和刷新description元素都取得成功，此时必须取消onclick事件默认行为
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
