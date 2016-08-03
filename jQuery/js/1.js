/**
 * Created by alice on 2016/8/3.
 */
$(document).ready(function () {
    $('#btn1').click(function () {
        $('#test1').text('hello world!');
    });
    $('#btn2').click(function () {
        $('#test2').html('<b>hello world!</b>');
    });
    $('#btn3').click(function () {
        $('p').html(function (i,origText) {
            i=2;
            return origText+"yes,I am newText(index:"+i+")";    //若匹配到多个元素，index即代表这些元素相当于在数组中的脚标（序号）从0开始
        });
    });
    $('#btn4').click(function () {
        $('#test4').val('hello world!');
    });
});
/*
* 如果应用到多个元素时进行读取时：
*       .val()方法和.html()方法只能读取第一个元素的值
*       而.text()方法可以读到所有匹配元素的值
* 如果应用到多个元素时进行设置时：三者都可以同时设置多个匹配元素
* */