$(function(){
    // == notice
    var $notice = $("#notice_container>ul");
    
    function noticeSlide(){
        if($notice.is(":animated")) return;

        $notice.animate({marginLeft : "-100%"},function(){
            $notice.removeAttr("style").children(":first").appendTo(this);
        });
    }

    function prevNotice(){
        if($notice.is(":animated")) return;

        $notice.prepend($notice.children(":last"))
              .css("marginLeft","-500px")
              .animate({marginLeft:0});
    }

    var timerId = window.setInterval(noticeSlide,2500);

    $("#notice_next").on("click",noticeSlide);
    $("#notice_prev").on("click",prevNotice);

    $("#notice>div>button").hover(
        function(){
            window.clearInterval(timerId);
        },
        function(){
            timerId = window.setInterval(noticeSlide,2500);
        }
    )

    // === dropdown
    var $dropdown = $("#dropdown");

    $("#menu>li").on("click",function(){
        $dropdown.slideToggle();
    });

    $("#dropdown").on("mouseleave",function(){
        $dropdown.slideUp();
    });

    
    /* 모바일 */
    $("#mo_menuicon").on("click",function(){
        $("#mo_show").show();
    });
    $("#mo_hide").on("click",function(){
        $("#mo_show").hide();
    });
    $("#mo_menu>li").on("click",function(){
        $(".mo_submenu").slideUp();
        $(this).find(".mo_submenu").slideDown();
    });
    
});