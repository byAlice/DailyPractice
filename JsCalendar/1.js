/**
 * Created by alice on 2016/5/31.
 */
var aDatas = [
    "一月到了，新的一年又开始了，我们也要迎来寒假，寒假跟小伙伴一起去深圳做兼职！",
    "二月到了，回家过年",
    "三月到了，开学了，又要长途跋涉来学校了",
    "四月开始自学html，style",
    "五月开始自学js",
    "六月继续学习js",
    "七月复习准备考试，空余时间继续学习前端知识，关注前端相关论坛",
    "八月，暑假了，学生生涯最后一个暑假了，我计划不回家留校继续学习前端知识",
    "九月，实际八月末就该开学了，两个月考查课，课余时间继续学习前端",
    "十月，离开学校，开始找实习",
    "十一月，不断在实习中学习，充实自己，提升自己",
    "十二月，不断在实习中学习，充实自己，提升自己"
];

window.onload = function () {
    var oDiv = document.getElementById('tab');
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');
    var oTxt = oDiv.getElementsByTagName('div')[0];

    var i = 0;

    for (i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onmouseover = function () {
            for (i = 0; i < aLi.length; i++) {
                aLi[i].className = '';
            }
            this.className = 'active';
            oTxt.innerHTML = '<h2>' + (this.index + 1) + '月活动</h2><p>' + aDatas[this.index] + '</p>';
        };
    }
};