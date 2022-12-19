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
            if(pageIndex >= lastPageIndex) return;
            pageIndex++;
        } else if(delta<0){
            if(pageIndex == 0) return;
            pageIndex--;
        }

        var posTop = windowHeight*pageIndex;
        $html.animate({scrollTop : posTop});
 
    },{passive:false});
    
    $window.on("resize",function(){
        windowHeight = $window.height();
    });

    var delay = 400;

    $window.on("scroll",function(){
        if(pageIndex==1){
            window.setTimeout(function(){
                $("#lelabo .top p").addClass("on");
            },delay);
        }
        if(pageIndex==2){
            window.setTimeout(function(){
                $("#nudake .top p").addClass("on");
            },delay);
        }
        if(pageIndex==3){
            window.setTimeout(function(){
                $("#matinkim .top p").addClass("on");
            },delay);
        }
        if(pageIndex==4){
            window.setTimeout(function(){
                $("#randys .top p").addClass("on");
            },delay);
        }
    });

});