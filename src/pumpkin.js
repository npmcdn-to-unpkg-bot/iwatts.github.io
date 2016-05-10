/**
 * Created by isaacwatts on 5/10/16.
 */
// JavaScript Document



var pumpkinpatch = "";
var numpumpkins;

var gametitle = "Pumpkin Game";
numpumpkins = 0;



function addPumpkin(event) {

    var randomPumpkin = Math.floor((Math.random() * 4) + 1);

    var xAdjust;
    xAdjust = 380;
    var yAdjust = 8;

    var x = event.clientX - xAdjust;
    var y = event.clientY + yAdjust;
    pumpkinpatch += "<div class='pumpkin" + randomPumpkin + "' style='left: " + x + "px; top:" + y + "px;'></div>";

    //document.getElementById("container").innerHTML = pumpkinpatch;
    $("#container").append(pumpkinpatch);

    // if in score box, ++ score
    numpumpkins ++;
    document.getElementById("numbertitle").innerHTML = numpumpkins;

}

function clickGame(event) {
    if ($('.scorebox:hover').length > 0) {
        addPumpkin(event);
    } else {
        //miss
    }
}

document.getElementById("title").innerHTML = gametitle;
document.getElementById("numbertitle").innerHTML = numpumpkins;





// ignore the code down here, it is Jquery.
$("#container").mousemove(function(e){
    $('.follow').css({'top': e.clientY + 20, 'left': e.clientX - 50});
});
