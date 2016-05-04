/**
 * Created by isaacwatts on 5/4/16.
 */

function myFunction1() {
    document.getElementById("box").innerHTML = "<h1>Oh look, a game!</h1>";
}
var game = function () {
    this.winner = function (winID) {
        var winTitle = document.createElement("p");
        document.getElementById(winID).innerHTML = "You win!";
    };
    this.myFunction2 = function () {
        var victorText = "<h1>You found me!</h1>";
        document.getElementById("box").innerHTML = victorText;
        myGame.winner("winner");
    };
}
var myGame = new game();
