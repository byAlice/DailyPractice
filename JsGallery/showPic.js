/**
 * Created byalice on 2016/5/24.
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
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return showPic(this);
        }
    }
}

function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return true;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return true;
    placeholder.setAttribute("src", source);
    if (!document.getElementById("description")) return false;
    var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }
    return false;
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
    placeholder.setAttribute("src", "img/1.jpg");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var desctext = document.createTextNode("choose an image");
    description.appendChild(desctext);
    var gallery = document.getElementById("imagegallery");

    insertAfter(description,gallery);
    insertAfter(placeholder,gallery);
}


function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i = 0;i< links.length;i++) {
        links[i].onclick = function(){
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
        var text = "";
    }
    var description = document.getElementById("description");
    if(description.firstChild.nodeType ==3){
        description.firstChild.nodeValue = text;
    }
    return false;
}
/*要加载的函数*/
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
