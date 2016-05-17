/**
 * Created by isaacwatts on 5/17/16.
 */

$( document ).ready(function() {
    console.log( "ready!" );
    if (localstorage.getItem("Name") === null) {
        var myName = prompt("What is your name?");
        localStorage.setItem("Name", myName);
    } else {
        localstorage.getItem("Name");
    }
});
