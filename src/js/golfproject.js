var numplayers = 6;
var numholes = 18;
var myTime = setInterval(function () { myTimer(), 1000});
var map;
var myLat = 0;
var myLng = 0;
var defZoom = 1;
var url2= "http://api.openweathermap.org/data/2.5/weather?id=5780026&appid=20e833c9715665014beb18e4e9f50aa5";
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myObj = JSON.parse(xmlhttp.responseText);
        var str = myObj.weather[0].description.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        document.getElementById("weather").innerHTML += " " + myObj.name + ": " + str;
    }
};
xmlhttp.open("GET", url2, true);
xmlhttp.send();


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
    var scoreVal = parseInt(self.val());
    var selfId = self.parent().attr('id');
    updateScore(selfId, scoreVal);
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

function updateScore(playerID, scoreImp) {

    var theID = playerID.replace( /(^.+\D)(\d+)(\D.+$)/i,'$2');

    for(var p = 1; p <= numplayers; p++ ){
        var playerRow = "<div class='column pc-" + p + "-total'></div>";
        var item = "#player-" + p + "-total";

        if (theID == p) {
            var scoreUpdating = $(".column-total").find(item);
            var currentScore = parseInt(scoreUpdating.text());

            currentScore = currentScore + scoreImp;
            $(scoreUpdating).text(currentScore);
        }

        $("#scoretotal").append(playerRow);
    }

}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    myLat = position.coords.latitude;
    myLng = position.coords.longitude;
    defZoom = 12;
    initMap();
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: myLat, lng: myLng},
        zoom: defZoom
    });
    smoothZoom(map, defZoom, map.getZoom());
    var image = '../src/img/tee-off.png';
    var teeoff = new google.maps.Marker({
        position: {lat: 40.233, lng: -111.658},
        map: map,
        icon: image
    });
}
function smoothZoom (map, max, cnt) {
    if (cnt >= max) {
        return;
    }
    else {
        z = google.maps.event.addListener(map, 'zoom_changed', function(event){
            google.maps.event.removeListener(z);
            smoothZoom(map, max, cnt + 1);
        });
        setTimeout(function(){map.setZoom(cnt)}, 80); // 80ms is what I found to work well on my system -- it might not work well on all systems
    }
}
getLocation();

