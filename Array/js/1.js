/**
 * Created by alice on 2016/8/5.
 */
window.onload=function(){
    var arr=[];
    var str='';
    for(var i=0;i<100;i++){
        /*思路：先把随机数追加到数组尾部*/
        arr.push(Math.round(Math.random()*1000));
        /*然后再拿这个数组最后一个与之前的数一一比较*/
        for(var j=0;j<arr.length-1;j++){
            if(arr[arr.length-1]==arr[j]){
                arr.splice(j,1);  //运用splice(数组去重，从第j位，去除1个数)
                j--;              //为了保证数组数量有效比较
                i--;              //为了保证数组数量及时更新
            }
        }
    }
    arr.sort(compare); //排序
    /*依次添加排好序的数组到div中，再将div添加到页面中*/
    for(var k=0;k<100;k++){
        str+='<div>'+(k<9?('0'+(k+1)):(k+1))+'.&nbsp;'+arr[k]+'</div>'
    }
    document.body.innerHTML=str;
};
function compare(a,b){
    return parseInt(a)-parseInt(b);
}