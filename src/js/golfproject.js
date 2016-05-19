var numplayers = 5;

function runcode() {
    if ($(window).width() < 1174) {
        errorCheck("small");
    }
    for(var p = 1; p <= numplayers; p++ ){
        var playerRow = "<div class='column pc-" + p + "'><input type='text' value='player" + p + "'></div>";
        $("#scorecard").append(playerRow);
        collectholes(p);
    }
}
var resizeTimer;

$(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout( function() {
        if ($(window).width() < 1174) {
            errorCheck("small");
        }
    }, 300);
});

function collectholes(player){
    var golfcourse = "";
    for(var h = 1; h <= 18; h++){
        var hole = "<div id='player" + player +"hole" + h +"'><input onkeypress='validate(event)' type='text' value=''></div>";
        golfcourse += hole;
        var apTo = ".pc-" + player;
        //console.log(golfcourse);
    }
    $(apTo).append(golfcourse);
}

function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]/;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        alert("Please enter a Numeric Value.");
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

function errorCheck(data) {
    try {
        windowSize(data);
    }
    catch (error){
        alert("The following error was handled: " + error);
    }
}
function windowSize(data) {
    if (data == "small") throw " Browser is too small";
}
