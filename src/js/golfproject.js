var numplayers = 6;
var numholes = 18;


function runcode() {
    var titleRow = "<div class='column column-title'><div class='title-players'>Players</div></div>";
    var holeList = "";
    $("#scorecard").append(titleRow);
    for(var h = 1; h <= numholes; h++) {
        var holeTitle = "<div class='title-hole'>" + h + "</div>";
        holeList += holeTitle;
    }
    $(".column-title").append(holeList);
    for(var p = 1; p <= numplayers; p++ ){
        var playerRow = "<div class='column pc-" + p + "'><input type='text' value='player" + p + "'></div>";
        $("#scorecard").append(playerRow);
        collectholes(p);
    }
}

function collectholes(player){
    var golfcourse = "";
    for(var h = 1; h <= numholes; h++){
        var hole = "<div id='player" + player +"hole" + h +"'><input onkeypress='validate(event)' type='text' value=''></div>";
        golfcourse += hole;
        var apTo = ".pc-" + player;

    }
    $(apTo).append(golfcourse);

}

function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9-]/;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        alert("Please enter a Numeric Value.");
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

function playerCount(numChange) {
    numplayers += numChange;
    $("#scorecard").empty();
    runcode();
}
