/**
 * Created by alice on 2016/8/4.
 */
$(document).ready(function () {
    /*获得焦点*/
    $("input:text").focus(function(){
        var $inputTextVal = $(this).val();
        if($inputTextVal == this.defaultValue) {
            $(this).val("");
        }
    });

    /*失去焦点*/
    $("input:text").blur(function(){
        var $inputTextVal = $(this).val();
        if($inputTextVal == ""){
            $(this).val(this.defaultValue);
        }
    });

});