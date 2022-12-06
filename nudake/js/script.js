$(function(){
    var $nav = $("#nav>li");
    var $navslide = $(".navslide");

    $nav.on("click",function(){
        $(this).find($navslide).stop().slideToggle();
    }).on("mouseleave",function(){
        $(this).find($navslide).stop().slideUp();
    });
});