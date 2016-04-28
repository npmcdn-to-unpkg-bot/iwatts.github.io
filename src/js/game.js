
// JavaScript Document


// create an array of food items for the monster to eat
var foodarr = ["Bubble Gum", "Taffy", "Cotton Candy", "Tennis Shoe", "Rock"];

var happyarr = ["Yum yum!", "That's delicious!", "More!"];
var noarr = ["No Way!", "I don't like it!", "Yucky!"];

var currentfood = "";
var score = 0;

//Randomize array
function randarr(arr) {
    var randomSelect = Math.floor((Math.random() * arr.length) + 0);
    return arr[randomSelect];
}

//Randomize array
function scorelog(num) {
    score += num;
    document.getElementById("score").innerHTML = score;
}

// start the game with a function
function rungame(){
    theFood = getfood();
    setfood(theFood);
}

// randomly select a food to put in the box
function getfood(){
    return randarr(foodarr);

}

// put the food in the box
function setfood(food){
    currentfood = food;
    document.getElementById("foodbox").innerHTML = food;
}

function eatit(){
    //if the food is good
    if(currentfood == "Bubble Gum" || currentfood == "Taffy" || currentfood == "Cotton Candy"){
        var good = randarr(happyarr);
        document.getElementById("commentbox").innerHTML = good;
        scorelog(1);
        rungame();
    }
    // if the food is bad
    else{
        var bad = randarr(noarr);
        document.getElementById("commentbox").innerHTML = bad;
        scorelog(-1);
    }
}

function trashit(){
    //if the food is good
    if(currentfood == "Bubble Gum" || currentfood == "Taffy" || currentfood == "Cotton Candy"){
        document.getElementById("commentbox").innerHTML = "But It looks tasty!";
        scorelog(-1);
    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "Throw it away!";
        scorelog(1);
        rungame();
    }

}

