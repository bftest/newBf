/*
 * 服务器地址,成功返回,失败返回参数格式;
 * 其他参数同WebUploader
 */

$('#boxImg').diyUpload({
    url:'http://test.moyu.com/comment/savecommentimg',
    success:function( data ) {
        var str="";
        str="<input type='hidden' class='pathText' value='"+data.info.path+"'>";
        $("body").append(str);
    },
    error:function( err ) {
        console.log(err);
    }
});
function submitData(){
    var a=[];
    $(".pathText").each(function(){
        var $pathValue=$(this).val();
        a.push($pathValue);
        return a;
    });
    var $path=a.join("|");
    var data={
        "score_product":$(".scoreAssessList .dd").eq(0).find(".on").length,
        "score_service":$(".scoreAssessList .dd").eq(1).find(".on").length,
        "score_delivery":$(".scoreAssessList .dd").eq(2).find(".on").length,
        "content":$("#expCon").val(),
        "images":$path,
        "isanonymous":$(".checkChange").attr("data-value")
    };
    console.log(data);
    $.ajax({
        url: "http://mall.baofeng.net/comment/comment",
        type:"post",
        data:data,
        success: function(data){

            $(".diyCancel").show();
            if(data.status == 0){

            }else{
                alert(data.info);
            }
        },
        error: function (e) {
        },
        complete: function() {

        }
    });
};
