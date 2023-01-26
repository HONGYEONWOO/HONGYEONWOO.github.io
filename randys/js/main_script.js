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

    window.setTimeout(function(){
        $("#glazed").fadeIn();
        window.setTimeout(function(){
            $("#mnm").addClass("on");
            window.setTimeout(function(){
                $("#nutella").addClass("on");
            },600);
        },600);
    },400);

    /* 이미지 슬라이드 */



    // 스크롤
    var $number = $("#number");
    var $bar = $("#bar")

    $window.on("scroll",function(){
        if(pageIndex==0){
            $number.html("01");
            $bar.css("height","20%");
        }
        if(pageIndex==1){
            $number.html("02");
            $bar.css("height","40%");
            window.setTimeout(function(){
                $("#event_title>h2").addClass("on");
                window.setTimeout(function(){
                    $("#event_title>h3").addClass("on");
                },600);
            },400);
        }
        if(pageIndex==2){
            $number.html("03");
            $bar.css("height","60%");

            var i = 1;
            window.setInterval(function(){
                if(i==5) return;
                $("#jeju_title>span:nth-child("+i+")").addClass("on");
                i++;
            },600);
        }
        if(pageIndex==3){
            $number.html("04");
            $bar.css("height","80%");

            window.setTimeout(function(){
                $("#store_box").fadeIn();
            },400);
        }
        if(pageIndex==4){
            $number.html("05");
            $bar.css("height","100%");

            var n = 1;
            window.setInterval(function(){
                if(n==4) return;
                $("#sns>li:nth-child("+n+")").addClass("on");
                n++;
            },400);
        }
    });
});