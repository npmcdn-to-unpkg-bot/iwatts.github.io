/**
 * Created by isaacwatts on 5/6/16.
 */
function Myfunction(myID) {
    timeOfDay = myID;
    switch (timeOfDay) {
        case "1pm":
            alert("Good Afternoon.");
            break;
        case "6pm":
            alert("Good Evening.");
    }

}

function runTime() {
    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var s = time.getSeconds();
    min = checkTime(min);
    s = checkTime(s);
    var ampm = hr < 12 ? "am" : "pm";
    var t = setTimeout(runTime, 500);

    document.getElementById("current_time").innerHTML = hr + ":" + min + ":" + s + " " + ampm;
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function listDay() {
    var d = new Date().getDay();
    var dateIntro = "Today is ";
    runTime();

    switch (d) {
        case 0:
            document.getElementById("dayofweek").innerHTML = dateIntro + "Sunday";
            break;
        case 1:
            document.getElementById("dayofweek").innerHTML = dateIntro + "Monday";
            break;
        case 2:
            document.getElementById("dayofweek").innerHTML = dateIntro + "Tuesday";
            break;
        case 3:
            document.getElementById("dayofweek").innerHTML = dateIntro + "Wednesday";
            break;
        case 4:
            document.getElementById("dayofweek").innerHTML = dateIntro + "Thursday";
            break;
        case 5:
            document.getElementById("dayofweek").innerHTML = dateIntro + "Friday";
            break;
        case 6:
            document.getElementById("dayofweek").innerHTML = dateIntro + "Saturday";
            break;
    }
}

var global;

function test() {
    var local = global;
}
