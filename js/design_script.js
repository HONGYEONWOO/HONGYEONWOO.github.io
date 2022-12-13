// 02_design js

$(function(){
    var $window = $(window);
    var $html = $("html");

    var windowHeight = $window.height();

    var pageIndex = Math.round($window.scrollTop()/$window.height());
    var lastPageIndex = $(".num").length -1;

    $html.animate({scrollTop : pageIndex * windowHeight},10);
    
    /* 휠 이벤트 */
    window.addEventListener("wheel",function(event){
        event.preventDefault();

        if($html.is(":animated")) return;

        var delta = event.deltaY;

        if(delta>0){
            /* 스크롤 다운 */
            if(pageIndex >= lastPageIndex) return;
            pageIndex++;
        } else if(delta<0){
            /* 스크롤 다운 */
            if(pageIndex == 0) return;
            pageIndex--;
        }

        var posTop = windowHeight*pageIndex;
        $html.animate({scrollTop : posTop});
 
    },{passive:false});
    
    $window.on("resize",function(){
        windowHeight = $window.height();
    });


    var delay = 2500;
    var duration = 400;

// ===== content imgslide =====
    // 01 banner
    var $slideBanner = $("#banner_slide>ul"); 

    function slideBanner(){
        $slideBanner.animate({marginLeft:"-100%"},duration,function(){
            $slideBanner.removeAttr("style")
                .children(":first").appendTo(this);
        });
    }

    window.setInterval(slideBanner,delay);

    
// ===== more =====
    var $moreBox = $(".more>div>ul");
    var $more = $(".more");

    function nextMore(){
        if($moreBox.is(":animated")) return;

        $moreBox.animate({marginLeft:"-800px"},duration,function(){
            $moreBox.removeAttr("style")
                .children(":first").appendTo(this);
        });
    }

    function prevMore(){
        if($moreBox.is(":animated")) return;

        $moreBox.children(":last").prependTo($moreBox)
            .css("left","-1120px")
            .animate({left:0}, duration);
    }

    window.setInterval(nextMore,3000);

    $("#more_next").on("click",nextMore);
    $("#more_prev").on("click",prevMore);

    $("#button_banner").on("click",function(){
        $more.fadeIn(duration);
    });

    $("#close").on("click",function(){
        $more.fadeOut(duration);
    });



// ===== fashion imgslide =====
    var $small = $("#small_img>li");
    var $large = $("#large_img>li");

    $small.on("click",function(){
        $(this).addClass("on").siblings(".on").removeClass("on");
    
    var targetSelector = $(this).data("target");
    $large.filter(targetSelector).addClass("on")
        .siblings(".on")
        .removeClass("on");
    });


// ===== drawing imgslide =====
    var $drawing = $("#slide>ul");
    var $button = $("#slide>button");

    function nextImageSlide(){
        if($drawing.is(":animated")) return;

        $drawing.animate({marginLeft:"-20%"},duration,function(){
            $drawing.removeAttr("style")
                  .children(":first").appendTo($drawing);
        });
    }

    function prevImageSlide(){
        if($drawing.is(":animated")) return;

        $drawing.prepend($drawing.children(":last"))
              .css("marginLeft","-20%")
              .animate({marginLeft:0}, duration);
    }

    var timerDrawing = window.setInterval(nextImageSlide,delay);

    $("#next").on("click",nextImageSlide);
    $("#prev").on("click",prevImageSlide);

    $button.hover(
        function(){
            window.clearInterval(timerDrawing);
        },
        function(){
            timerDrawing = window.setInterval(nextImageSlide,delay);
        }
    )
});