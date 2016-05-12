/**
 * Created by isaacwatts on 5/12/16.
 */

// JavaScript Document
var currentstring = [];
var fullString = '';
var i = 0;

function destroyletter(el) {
    el.parentNode.removeChild(el);

    // need to update current string
    var remClass = el.className;
    //console.log(remClass);
    var remClass = remClass.replace(/[^0-9\.]/g, '');
    //console.log(remClass);

    if (remClass > -1) {
        currentstring.splice(remClass, 1);
    }


    checkmyAnswer();
}

function sendLetter(theletter) {
    var outputcontdiv = document.getElementById("output");
    currentstring.push( "<span class='letter" + i + "' onClick='destroyletter(this)'>" + theletter + "</span>" );
    // We need to concatenate the strings together.
    fullString = currentstring.join();
    fullString = fullString.replace( /,/g, "" );
    outputcontdiv.innerHTML = fullString;
    checkmyAnswer();
    // I want you to make it print to the page in lower case.

    i++;

}

function checkmyAnswer() {
    var instring = document.getElementById("output").innerText;
    console.log(instring);
    var otheranswer = instring.substring(2, 6);  // Lets pull another word out of the word we want them to spell.
    if(instring === "STRING"){
        alert("you win! String also contains the word " + otheranswer);
    }
}

