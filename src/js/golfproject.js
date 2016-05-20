var numplayers = 6;
var numholes = 18;
var myTime = setInterval(function () { myTimer(), 1000});

function runcode() {
    var titleRow = "<div class='column column-title'><div class='title-players'>Players</div></div>";
    var totalRow = "<div class='column-total'><div class='total-score'>Score</div></div>";
    var holeList = "";
    var scoreTotals = "";

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
        var totalTitle = "<div class='player-total' id='player-" + p + "-total'>0</div>";
        scoreTotals += totalTitle
    }
    $("#scorecard").append(totalRow);
    $("#scorecard .column-total").append(scoreTotals);
}

function collectholes(player){
    var golfcourse = "";
    for(var h = 1; h <= numholes; h++){
        var hole = "<div class='singlehole' id='player" + player +"hole" + h +"'><input onchange='validate()' type='text' value=''></div>";
        golfcourse += hole;
        var apTo = ".pc-" + player;

    }
    $(apTo).append(golfcourse);

}

function validate() {
    var self = $(event.target);
    var scoreVal = self.val();
    console.log(scoreVal);
    updateScore();
}

function playerCount(numChange) {
    numplayers += numChange;
    $("#scorecard").empty();
    runcode();
}
function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}

function myStopFunction() {
    clearInterval(myTime);
}

function updateScore() {

    var elements = document.getElementsByClassName('hole');

    for(var p = 1; p <= numplayers; p++ ){
        var playerRow = "<div class='column pc-" + p + "-total'></div>";
        $("#scoretotal").append(playerRow);
    }

}
