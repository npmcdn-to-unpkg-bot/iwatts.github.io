$( document ).ready(function() {
    console.log( "ready!" );
    $(".resume-nav > div").click(function() {
        var myClass = $(this).attr("id");
        $(".more-section").css("opacity", 0);
        console.log(myClass);
        $(".content-full").find("." + myClass).css( "opacity", 1);
    });
});
