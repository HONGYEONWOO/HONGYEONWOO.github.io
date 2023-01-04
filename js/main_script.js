$(function(){
    var $window = $(window);
    var $html = $("html");
    var windowHeight = $window.height();
    var pageIndex = Math.round($window.scrollTop()/windowHeight);

    function noWheel(event){
        event.preventDefault();
    }
    window.addEventListener("wheel",noWheel,{passive:false});
    
    window.addEventListener("wheel",function(event){
        var delta = event.deltaY;

        if($html.is(":animated")) return;
        
        if(delta>0){
            // 스크롤 다운            
            if(pageIndex!=0) return;
            pageIndex++;
            $html.animate({scrollTop:windowHeight});
            if(pageIndex>0){
                window.removeEventListener("wheel",noWheel,{passive:false});
            }
        } else if(delta<0){
            // 스크롤 업
            window.removeEventListener("wheel",noWheel,{passive:false});
            $html.animate({scrollTop:windowHeight*pageIndex});
            if(pageIndex==0) return;
            pageIndex--;
        }
    });

    $window.on("resize",function(){
        windowHeight = $window.height();
    });

    // 로고 클릭
    document.getElementById("logo").addEventListener("click",function(event){
        event.preventDefault();

        $window.scrollTop(0);
    });

    // like
    var $slide = $("#slide");
    function slide(){
        $slide.animate({marginLeft:"-21.4275%"},function(){
            $(this).removeAttr("style").children(":first").appendTo($slide);
        });
    }
    
    var timerId = window.setInterval(slide,2500);

    $("#slide>li>span").hover(
        function(){
            window.clearInterval(timerId);
        },
        function(){
            timerId = window.setInterval(slide,2500);
        }
    )

    // 스크롤 시
    $window.on("scroll",function(){
        var pos = $html.scrollTop();

        if(pos>=($("#content").offset().top)-200){
            $(".persent_box>span").addClass("move");
        }
        if(pos>=windowHeight-100){
            window.setTimeout(function(){
                $("#profile_title>h2").css({height:"1.4em"});
                    window.setTimeout(function(){
                        $("#profile_title>h3").css({height:"1.4em"});
                            window.setTimeout(function(){
                                $("#info").addClass("move");
                            },800);
                    },500);  
            },300);
        }
        if(pos>=windowHeight+100){
            $("#container").css("opacity","1");
        }
    });


    

    
    $html.on("click",function(){
        // window.console.log($html.scrollTop());
        // window.console.log($window.height());
        window.console.log(pageIndex);
    });
    

    
});