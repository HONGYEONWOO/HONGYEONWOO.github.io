$(function(){

    $("#imgup").fadeIn(1000,function(){
        $("#titleup").fadeIn(800);
    });

    /* ====== scroll ====== */
    $(window).on("scroll",function(){
        var pos = $("html").scrollTop();

        // -- #content_text
        if(pos>=($("#content_text").offset().top)-400){
            $("#content_text>h2").addClass("move");
            $("#content_text>p").addClass("move");
        }

    });


    /* ===== tabmenu ===== */
    var $tabmenu = $("#santal_tabmenu>li");
    var $tabcontent = $(".santal_content");

    $tabmenu.on("click",function(){
        $(this).addClass("on").siblings(".on").removeClass("on");

        var targetSelector = $(this).data("target");
        $tabcontent.filter(targetSelector).addClass("on")
            .siblings(".santal_content.on")
            .removeClass("on");
    });

});