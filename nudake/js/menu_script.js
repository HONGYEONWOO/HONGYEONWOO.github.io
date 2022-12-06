$(function(){

    var $slide = $("#slide");

    window.setInterval(function(){
        $slide.children(":last").fadeIn(200);
        window.setTimeout(function(){
            $slide.children(":first").appendTo($slide).removeAttr("style");
        },200);
    },2000);

    /* ===== submenu ===== */
    var $menu = $("#menu>li");
    var $content = $(".contents");
    
    $menu.on("click",function(){
    $(this).addClass("on").siblings(".on").removeClass("on");
    
    var targetSelector = $(this).data("target");
    $content.filter(targetSelector).addClass("on")
        .siblings(".contents.on")
        .removeClass("on");
    });

    /* ===== tabmenu ===== */
    var $tabmenu = $("#tabmenu>li");
    var $tabcontent = $(".tab_content");
    
    $tabmenu.on("click",function(){
    $(this).addClass("on").siblings(".on").removeClass("on");
    
    var targetSelector = $(this).data("target");
    $tabcontent.filter(targetSelector).addClass("on")
        .siblings(".tab_content.on")
        .removeClass("on");
    });

});

