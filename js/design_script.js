// 02_design js

$(function(){
    var $window = $(window);
    var $html = $("html");

    var windowHeight = $window.height();

    // 보여지는 페이지 인덱스
    var pageIndex = Math.round($window.scrollTop()/$window.height());
    // 마지막 페이지 인덱스
    var lastPageIndex = $(".num").length -1;

    // 맨 처음 페이지 로드 시 첫 페이지로 이동
    $html.animate({scrollTop : pageIndex * windowHeight},10);
    
// ----------------wheel 이벤트
    window.addEventListener("wheel",function(event){
        // 휠을 굴릴 때 마다 한 페이지씩 스크롤 이동이 
        // 되어지도록 프로그램을 작성

        // 한 페이지씩 스크롤 이동할 수 있도록
        // 휠 이벤트의 기본 이벤트를 제거
        event.preventDefault();

        if($html.is(":animated")) return;
        // 휠의 이동 방향
        var delta = event.deltaY;

        if(delta>0){    // 휠을 아래로 굴린 경우
            // 마지막 페이지인 경우 이동할 페이지가 없기 때문에 
            // 함수를 즉시 종료시켜야한다.
            if(pageIndex >= lastPageIndex) return;

            pageIndex++;  // 페이지 번호 증가
        } else if(delta<0){        // 휠을 위로 굴린 경우
            // 첫번째 페이지인 경우 이동할 페이지가 없기 때문에
            // 함수를 즉시 종료시켜야한다.
            if(pageIndex == 0) return;
            pageIndex--;  // 페이지 번호를 감소
        }

        // 증감된 페이지로 스크롤 이동
        var posTop = windowHeight*pageIndex;
        $html.animate({scrollTop : posTop});
 
    },{passive:false});
    
    $window.on("resize",function(){
        windowHeight = $window.height();
    });


    var delay = 3000;
    var duration = 400;

// ===== content imgslide =====
    // 01 banner
    var $slideBanner = $("#banner>.container>ul"); 

    function slideBanner(){
        $slideBanner.animate({marginTop:"-310px"},duration,function(){
            // ul 요소의 효과가 끝나면 수행되는 함수
            $slideBanner.removeAttr("style")
                .children(":first").appendTo(this);
        });
    }

    window.setInterval(slideBanner,delay);

    // 02 popol
    var $slidePopol = $("#popol>.container>ul"); 

    function slidePopol(){
        $slidePopol.animate({marginTop:"-310px"},600,function(){
            $slidePopol.removeAttr("style")
                .children(":first").appendTo(this);
        });
    }

    window.setInterval(slidePopol,delay);
    
    // 03 pizza
    var $slidePizza = $("#pizza>.container>ul"); 

    function slidePizza(){
        $slidePizza.animate({marginTop:"-310px"},800,function(){
            $slidePizza.removeAttr("style")
                .children(":first").appendTo(this);
        });
    }

    window.setInterval(slidePizza,delay);

    
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
    var $fashion = $("#left>ul");

    window.setInterval(function(){
        $fashion.children(":first").appendTo($fashion);
    },delay);


// ===== drawing imgslide =====
    var $drawing = $("#slide>ul");
    var $button = $("#slide>button");

    function nextImageSlide(){
        if($drawing.is(":animated")) return;

        $drawing.animate({marginLeft:"-300px"},duration,function(){
            $drawing.removeAttr("style")
                  .children(":first").appendTo($drawing);
        });
    }

    function prevImageSlide(){
        if($drawing.is(":animated")) return;

        $drawing.prepend($drawing.children(":last"))
              .css("marginLeft","-300px")
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