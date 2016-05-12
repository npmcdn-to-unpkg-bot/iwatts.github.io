/**
 * Created by isaacwatts on 5/12/16.
 */

// JavaScript Document
var currentstring = '';

function sendLetter(theletter) {
    var outputcontdiv = document.getElementById("output");
    currentstring += theletter; // We need to concatenate the strings together.
    checkmyAnswer(currentstring);
    outputcontdiv.innerHTML = currentstring; // I want you to make it print to the page in lower case.

}

function checkmyAnswer(instring) {
    var otheranswer = "RING";  // Lets pull another word out of the word we want them to spell.
    if(instring === "STRING"){
        alert("you win! String also contains the word " + otheranswer);
    }
}

