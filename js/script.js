// 01_main & 03_web js

$(function(){
    var $window = $(window);
    var $html = $("html");
    var skill = $(".persent_box>span");

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

        // skill animation
        if(pageIndex==1){
            skill.css("animation-name","skill");
        } else{
            skill.removeAttr("style");
        }  
    },{passive:false});
    
    $window.on("resize",function(){
        windowHeight = $window.height();
    });

});