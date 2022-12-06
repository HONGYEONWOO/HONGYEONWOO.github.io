$(function(){
    
    /* ====== main ====== */
    window.setTimeout(function(){
        $("#main_text").fadeIn();
    },1000);
    
    /* ====== scroll ====== */
    $(window).on("scroll",function(){
        var pos = $("html").scrollTop();

        // -- #about_01
        if(pos>=($("#about_01").offset().top)-400){
            $("#about_01").addClass("move");
        }

        // -- #tab
        if(pos>=($("#tab").offset().top)-400){
            $(".tab_content").addClass("move");
        }
        
        // -- #about_02
        if(pos>=($("#about_02").offset().top)-400){
            var index = 0;
            // -- h3
            $("#about_02 h3").addClass("move");
            // -- #circle
            window.setInterval(function(){
                if(index == 3) return;
                $("#circle>li").eq(index).addClass("move");
                index++;
            },500);
        }
        
        // -- #about_03
        if(pos>=($("#about_03").offset().top)-400){
            $("#about_03>p").addClass("move");
        }

        // -- #best_text p
        if(pos>=($("#best_text").offset().top)-400){
            $("#best_text>p").addClass("move");
        }
    });
    
    
    /* ===== tabmenu ===== */
    var $tabmenu = $("#tabmenu>li");
    var $tabcontent = $(".tab_content");
    
    $tabmenu.on("click",function(){
        $(this).addClass("on").siblings(".on").removeClass("on");

        var targetSelector = $(this).data("target");
        $tabcontent.filter(targetSelector).addClass("on")
            .siblings(".tab_content.on")
            .removeClass("on");
    });
    
    
    /* ===== best ===== */
    var $bestimg = $("#best_img>li");
    var $bestText = $("#best_text>ul>li");
    var imgIndex = 0;

    window.setInterval(function(){
        imgIndex++;
        if(imgIndex==3) imgIndex = 0;

        $bestimg.removeClass("on").eq(imgIndex).addClass("on");
        $bestText.removeClass("on").eq(imgIndex).addClass("on");
    },1800);

});