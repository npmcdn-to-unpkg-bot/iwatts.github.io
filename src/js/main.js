$( document ).ready(function() {
    //console.log( "ready!" );

    $(".more_skills .bar li").each(function () {
        var self = $(this);
        var blue = "#4d4dff";
        var orange = "#ffa500";
        var purple = "#a64ca6";
        var newColor;
        var randColor = Math.floor(Math.random()*3) + 1;
        switch(randColor) {
            case 1:
                newColor = blue;
                break;
            case 2:
                newColor = orange;
                break;
            case 3:
                newColor = purple;
                break;
        }
        var barWidth = self.attr("class");
        var percentWidth = ((barWidth / 230) * 100) + "%";
        //console.log(percentWidth);
        self.css("width", percentWidth);
        self.css("background-color", newColor);
    });

    $(".resume-nav > div").click(function() {
        var myClass = $(this).attr("id");
        $(".more-section").css("opacity", 0);
        $(".more-section").css("z-index", 0);
        //console.log(myClass);
        $(".content-full").find("." + myClass).css( "opacity", 1);
        $(".content-full").find("." + myClass).css( "z-index", 10);
    });

});
