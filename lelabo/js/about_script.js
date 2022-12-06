$(function(){
    
    /* ====== main ====== */
    window.setTimeout(function(){
        $("#sub_main>p").fadeIn();
    },1000);
    
    /* ====== scroll ====== */
    $(window).on("scroll",function(){
        var pos = $("html").scrollTop();
        var width = $("html").width();

        if(width>760){
            if(pos>=($("#think").offset().top)-400){
                $("#think>h1").addClass("move");
                window.setTimeout(function(){
                    $("#think_box").addClass("move");
                },800);
            }
            if(pos >= ($("#service").offset().top)-400){
                var index = 0;
                window.setInterval(function(){
                    // -- service text
                    $(".text").eq(index).addClass("move");
                    index++;
                },600);
            }
            if(pos >= ($("#ingredients").offset().top)-400){
                $(".ingredients_title>p").addClass("move");
            }
        } else{
            // 모바일에서 스크롤할 경우
            if(pos >= ($("#think").offset().top)){
                var index = 0;
                window.setInterval(function(){
                    $("#mo_service .text").eq(index).addClass("move");
                    index++;
                },600);
            }
            if(pos >= $("#mo_service>li:last-child").offset().top){
                $(".ingredients_title>p").addClass("move");
            }
            
        }
    });

    var $think = $("#think_box>ul");

    window.setInterval(function(){    
        $think.animate({marginTop : "-50px"},function(){
            $("#think_box>ul>li").eq(3).addClass("on").siblings(".on").removeClass("on");
            $think.removeAttr("style").children(":first").appendTo(this);
        });
    },2500);

    var $list = $("#mo_list>li");
    $list.on("click",function(){
        $(this).find(".click").addClass("on");
        $(this).siblings().find(".click").removeClass("on");
    });

});