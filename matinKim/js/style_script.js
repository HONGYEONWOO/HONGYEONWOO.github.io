$(function(){
    /* 스크롤 */
    $(window).on("scroll",function(){
        var pos = $("html").scrollTop();

        if(pos>=($("#text").offset().top)-400){
            $("#text>h3").addClass("move");
            window.setTimeout(function(){
                $("#text>h2").addClass("move");
                window.setTimeout(function(){
                    $("#text>p").css({opacity:1});
                },800);
            },300);
        }
    });
});