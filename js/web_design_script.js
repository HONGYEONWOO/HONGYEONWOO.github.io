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


});