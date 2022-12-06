$(function(){
    /* ===== #burgers ===== */
    var $tab = $("#burgers>li");
    var $text = $(".text");
    var $img = $(".img");
    
    $tab.on("click",function(){
    $(this).addClass("on").siblings(".on").removeClass("on");
    
    var targetSelector = $(this).data("target");
    $text.filter(targetSelector).addClass("on")
        .siblings(".text.on")
        .removeClass("on");
    $img.filter(targetSelector).addClass("on")
        .siblings(".img.on")
        .removeClass("on");
    });

    /* === .info === */
    $(".info>p").on("click",function(){
        $(this).parents().toggleClass("on");
    });

    /* === #another === */
    var $slide = $("#slide");
    var duration = 400;

    function nextSlide(){
        $slide.animate({marginLeft: "-285px"},duration,function(){
            $(this).removeAttr("style")
                   .children(":first").appendTo($slide);
        });
    }

    function prevSlide(){
        $slide.prepend($slide.children(":last")).css("marginLeft","-285px")
              .animate({marginLeft:0},duration);
    }

    var timerId = window.setInterval(nextSlide,2000);

    $("#next").on("click",nextSlide);
    $("#prev").on("click",prevSlide);

    $("#container").hover(
        function(){
            window.clearInterval(timerId);
        },
        function(){
            timerId = window.setInterval(nextSlide,2000);
        }
    )
});