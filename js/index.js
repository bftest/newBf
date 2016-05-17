$(function(){
    //
   var oLi=$(".mainList li");
   oLi.each(function(index){
        if(index%2==1){
            oLi[index].style.marginRight="0";
        }
    });
    //
    $(".ulList li").click(function () {
        var $index = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(this).parent().parent().siblings(".innerBox").each(function (index, item) {
            index === $index ? $(item).addClass("on") : $(item).removeClass("on");
        });
    });
    //
    /*$(".items li").click(function(){
        $(this).hasClass("disable") ? $(this).removeClass("choose") : $(this).addClass("choose").siblings().removeClass("choose");
    });*/
    //
    function buyNum(){
        $(".increment").click(function(){
            var $num=parseInt($("#buy-num").val());
            $num++;
            $("#buy-num").val($num);
        });
        $(".decrement").click(function(){
            var $num=parseInt($("#buy-num").val());
            $num<=0 ? $num=0 : $num--;
            $("#buy-num").val($num);
        });
    }
    buyNum();
    //
    $(".nav .search").find("label").click(function(){
        $(this).hide().next().focus();
    });
    $(".nav .search").find("#inputText").click(function(){
        $(this).prev().hide();
    });
    $(".nav .search").find("#inputText").blur(function(){
        $(this).val() ? $(this).prev().hide() : $(this).prev().show();
    });
    $(".nav .search").find("#sear").click(function(){
       if(!$(this).prev().val()){
           $(this).siblings("label").hide();
           var $html=$(this).siblings("label").html();
           $(this).prev().val($html);
       }else{
           $(this).siblings("label").hide();
       }
    });
    //
    $(".mtList li").click(function () {
        var $index = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(this).parent().parent().siblings(".mc").each(function (index, item) {
            index === $index ? $(item).addClass("on") : $(item).removeClass("on");
        });
    });
    //
    $(".mainPCUl li:last").addClass("noMar");
    $(".hotBox ul li:last").addClass("noMar");
    $(".viewBox ul li:last").addClass("noMar");
    $(".viewBox li em").hover(function(){
        $(this).addClass("onPlay");
    },function(){
        $(this).removeClass("onPlay");
    });
    $(".hotBox li").hover(function(){
        $(this).addClass("animate");
    },function(){
        $(this).removeClass("animate");
    });
    $(".viewBox li").hover(function(){
        $(this).addClass("animate").find("em").addClass("onPlay");
    },function(){
        $(this).removeClass("animate").find("em").removeClass("onPlay")
    });
    $(".mainPCUl li").hover(function(){
        $(this).find("p").show();
    },function(){
        $(this).find("p").hide();
    });
    //
    $(".lubo_btn .leftBtn").hover(function(){
        $(this).css({"background-position":"0px 0px"});
    },function(){
        $(this).removeClass("leftBtnOn");

    });
    $(".navMoreList li:nth-child(6n+6)").children(".img").addClass("noBor");
    $(".mainNav li").hover(function(){
        $(this).children(".navMore").show();
    },function(){
        $(this).children(".navMore").hide();
    });
    $(".cList li").eq(3).addClass("noMar")
    $(".cList li:nth-child(5n+9)").addClass("noMar");
    $(".cList li").hover(function(){
        $(this).addClass("boxShadow").find("img").addClass("scal").removeClass("scal2");
        $(this).find(".mask").show().stop().animate({bottom:"0"},400);
        $(this).find(".btnBuy").stop().animate({bottom:"15px"},400);
        $(this).children(".oListInfo").stop().animate({bottom:"0px"},400);
        $(this).find(".oPrice").hide();
        $(this).children(".oListInfo").find(".oPrice").show();
    },function(){
        $(this).removeClass("boxShadow").find(".mask").hide().stop().animate({bottom:"-130px"},400);
        $(this).find(".btnBuy").stop().animate({bottom:"-43px"},400);
        $(this).children(".oListInfo").stop().animate({bottom:"-120px"},400);
        $(this).find(".oPrice").show();
        $(this).find("img").addClass("scal2").removeClass("scal");
        $(this).children(".oListInfo").find(".oPrice").hide();
    });



});
