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
    }git

}

function listDay() {
    var d = new Date().getDay();
    var dateIntro = "Today is ";

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
