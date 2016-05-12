/**
 * Created by isaacwatts on 4/28/16.
 */
function greeting(person) {
    console.log("Hello " + person + "! You are running a function!");
};

var addItem =(function () {
    var cartItems = 0;
    return function () {
        return cartItems += 1;
    };
})();

addItem();
addItem();
addItem();
addItem();

//console.log(addItem());
//console.log(addItem());

var dieres;

function diceToss() {
    dieres = Math.floor(Math.random() * 20) + 1;

    return dieres;
}

var promise = new Promise(function (fufill, reject) {

    var die = diceToss();

    if (die === 20) {
        fufill(die);
    } else {
        reject(die);
    }

    greeting('Isaac');

});


function result() {
    console.log(dieres);
    var resultText = "You rolled a " + dieres;
    //document.getElementById("dice_result").innerHTML += resultText;
}

promise.then(function (toss) {

    var win = "Critical Hit! You rolled a " + toss;
    console.log(win);
    result();

}, function (toss) {

    var reg = "You rolled a " + toss;
    console.log(reg);
    result();

});
