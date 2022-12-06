$(function(){
    var $window = $(window);
    var $html = $("html");

    var windowHeight = $window.height();

    var pageIndex = Math.round($window.scrollTop()/$window.height());
    var lastPageIndex = $(".num").length -1;

    $html.animate({scrollTop : pageIndex * windowHeight},10);
    
    window.addEventListener("wheel",function(event){
        event.preventDefault();

        if($html.is(":animated")) return;
        var delta = event.deltaY;

        if(delta>0){
            // 스크롤 다운
            if(pageIndex >= lastPageIndex) return;

            pageIndex++;
        } else if(delta<0){
            // 스크롤 업
            if(pageIndex == 0) return;
            pageIndex--;
        }

        var posTop = windowHeight*pageIndex;
        $html.animate({scrollTop : posTop});
 
    },{passive:false});
    
    $window.on("resize",function(){
        windowHeight = $window.height();
    });

    $window.on("scroll",function(){
        var pos = $("html").scrollTop();

        /* === #main_02 === */
        if(pos>=($("#main_02").offset().top)){
            $("#cake").fadeIn(1000);
            window.setTimeout(function(){
                $("#main_02>span:first-child").addClass("move");
            },1000);
            window.setTimeout(function(){
                $("#main_02>span:nth-child(2)").css("opacity",1);
            },3000);
            window.setTimeout(function(){
                $("#main_02>a>img").css("animation-name","goat");
            },4000);
        }
        /* === #main_03 === */
        if(pos>=($("#main_03").offset().top)){
            $("#right_01>div:nth-child(2)>span").css("animation-name","font");
            window.setTimeout(function(){
                $("#hippo>img:first-child").addClass("move");
            },1500);
            window.setTimeout(function(){
                $("#hippo>img:nth-child(2)").addClass("move");
            },3000);
        }
        /* === #main_04 === */
        if(pos>=($("#main_04").offset().top)){
            $("#about>h2").addClass("move");
            $("#about>p").addClass("move");
            window.setTimeout(function(){
                $("#minibread").addClass("move");
            },1000);
        }
    });
});