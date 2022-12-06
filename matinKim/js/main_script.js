$(function(){
    var levisIndex = 0;
    window.setInterval(function(){
        levisIndex++;
        $("#levis_0"+levisIndex).css({opacity:1});
    },300);

    window.setTimeout(function(){
        $("#levis_text>h3").css({height:"1em"});
            window.setTimeout(function(){
                $("#levis_text>h1").css({height:"1em"});
                window.setTimeout(function(){
                    $("#levis_text>p").css({opacity:"1"})
                },800);
            },500);    
    },2000);
    /* 스크롤 */
    $(window).on("scroll",function(){
        var pos = $("html").scrollTop();

        if(pos>=($("#collection").offset().top)+150){
            $("#text>p").addClass("move");
        }
        if(pos>=($("#style_text").offset().top)-200){
            $("#style_text>h3").addClass("move");
            window.setTimeout(function(){
                $("#style_text>h2").addClass("move");
                window.setTimeout(function(){
                    $("#style_text>p").css({opacity:1});
                },800);
            },300);
        }
    });

    /* 배너 */
    var index = 0;

    window.setInterval(function(){
        index++;
        if(index==3) index=0;
        $("#banner>li").removeClass("on").eq(index).addClass("on");        
    },2000);

    /* 이미지 슬라이드 */
    var $item = $("#item");
    var $slide = $("#slide");
    var photoIndex = 0;
    var delay = 2000;

    var $bullets = $("<ul></ul>").attr("id","bullets").appendTo($item);
    $slide.children().each(function(){
        $("<li></li>").append("<a href='#'></a>").appendTo($bullets);
    });

    var $bulletList = $bullets.find("a");

    $bulletList.eq(photoIndex).addClass("on");

    function bestslide(){
        photoIndex++;
        if(photoIndex == $bulletList.length) photoIndex = 0;
        $bulletList.removeClass("on").eq(photoIndex).addClass("on");

        $slide.animate({marginLeft:"-16.666%"},function(){
            $slide.removeAttr("style").children(":first").appendTo(this);
        })
    }

    var timerId = window.setInterval(bestslide,delay);

    $bulletList.hover(
        function(){
            window.clearInterval(timerId);
        },
        function(){
            timerId = window.setInterval(bestslide,delay);
        }
    )

    $bulletList.on("click",function(event){
        event.preventDefault();

        var clickedIndex = $bulletList.index(this);

        var diff = clickedIndex - photoIndex;

        if(diff==0) return;

        photoIndex = clickedIndex;
        $bulletList.removeClass("on").eq(photoIndex).addClass("on");

        if(diff>0){
            $slide.animate({marginLeft:diff*(-16.666)+"%"},200,function(){
                $slide.removeAttr("style")
                      .children(":lt("+diff+")").appendTo(this);
            });
        } else{
            $slide.children(":gt("+(diff-1)+")").prependTo($slide);      
            $slide.css({marginLeft:diff*16.666+"%"}).animate({marginLeft:0},200);
        }
    });
});