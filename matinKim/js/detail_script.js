$(function(){
    /* === #another === */
    var $slide = $("#slide");
    var duration = 400;

    function nextSlide(){
        if($slide.is(":animated")) return;
        $slide.animate({marginLeft: "-285px"},duration,function(){
            $(this).removeAttr("style")
            .children(":first").appendTo($slide);
        });
    }
    
    function prevSlide(){
        if($slide.is(":animated")) return;
        $slide.prepend($slide.children(":last")).css("marginLeft","-285px")
              .animate({marginLeft:0},duration);
    }

    var timerId = window.setInterval(nextSlide,2000);

    $("#slide_next.button").on("click",nextSlide);
    $("#slide_prev.button").on("click",prevSlide);

    $("#container").hover(
        function(){
            window.clearInterval(timerId);
        },
        function(){
            timerId = window.setInterval(nextSlide,2000);
        }
    )
});