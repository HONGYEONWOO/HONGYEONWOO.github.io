$(function(){
    /* 공지사항 */
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

    $("#next").on("click",noticeSlide);
    $("#prev").on("click",prevNotice);

    $("#notice>div").hover(
        function(){
            window.clearInterval(timerId);
        },
        function(){
            timerId = window.setInterval(noticeSlide,2500);
        }
    )
});