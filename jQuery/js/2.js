/**
 * Created by alice on 2016/8/3.
 */
$(document).ready(function(){
    $("input:radio[name=color]").val(function(index,oldVal){
        return "color-" + (index+1) + ":" + oldVal;
    });

    $("input:checkbox[name=size]").val(function(index,oldVal){
        return "size-" + (index+1) + ":" + oldVal;
    });
    $("#getValue").click(function(){
        var $msg = $("input:radio[name=color]:checked").val() + ",";
        $("input:checkbox[name=size]:checked").each(function(){     //each()对checkbox进行遍历,取出所有选中的值
            $msg += $(this).val() + ",";
        });
        $("#txtBox").val($msg);
    });
});
