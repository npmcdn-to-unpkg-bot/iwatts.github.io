var numplayers = 6;
var numholes = 18;
var myTime = setInterval(function () { myTimer(), 1000});

var map;

var myLat = 40.418855;
var myLng = -111.887480;
var defZoom = 1;

var url2= "http://api.openweathermap.org/data/2.5/weather?lat=" + myLat + "&lon=" + myLng + "&appid=20e833c9715665014beb18e4e9f50aa5";
var xmlhttp = new XMLHttpRequest();

var localObj = {latitude:myLat, longitude:myLng, radius:10};
var myCourse = {};

function coursesLoaded() {
    $.post("http://golf-courses-api.herokuapp.com/courses",localObj, function(data,status) {
        myCourse = JSON.parse(data);
        var listCourses = "";

        for (var gc in myCourse.courses) {
            listCourses += "<li onclick='courseSelect(" + myCourse.courses[gc].id + ")'>" + myCourse.courses[gc].name + "</li>";
            var testingC = myCourse.courses[gc];
            console.log(testingC);
            numholes = myCourse.courses[gc].hole_count;
        }

        //console.log(listCourses);
        $(".courselist ul").html(listCourses);
    });
}
function courseSelect(id) {
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myCourseSelection = JSON.parse(xmlhttp.responseText);
            myLat = myCourseSelection.course.location.lat;
            myLng = myCourseSelection.course.location.lng;
            console.log(myCourseSelection);

        }
    };
    xmlhttp.open("GET", "http://golf-courses-api.herokuapp.com/courses/"+ id, true);
    xmlhttp.send();
    defZoom = 14;
    initMap();
    url2 = "http://api.openweathermap.org/data/2.5/weather?lat=" + myLat + "&lon=" + myLng + "&appid=20e833c9715665014beb18e4e9f50aa5";
    //console.log(url2);
    weatherDisplay();
    runcode();
    $("#map").css("display", "block");
}

function weatherDisplay() {
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myObj = JSON.parse(xmlhttp.responseText);
            var str = myObj.weather[0].description.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });
            document.getElementById("weather").innerHTML = "Weather Conditions in " + myObj.name + ":<br>" + str;
        }
    };
    xmlhttp.open("GET", url2, true);
    xmlhttp.send();
}

function runcode() {
    getLocation();
    var titleRow = "<div class='column column-title'><div class='title-players'>Players</div></div>";
    var totalRow = "<div class='column-total'><div class='total-score'>Score</div></div>";
    var holeList = "";
    var scoreTotals = "";

    $("#scorecard").html(titleRow);
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
    coursesLoaded();
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: myLat, lng: myLng},
        zoom: defZoom
    });
    var image = '../src/img/tee-off.png';
    var teeoff = new google.maps.Marker({
        position: {lat: myLat, lng: myLng},
        map: map,
        icon: image
    });
}
