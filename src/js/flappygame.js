/**
 * Created by isaacwatts on 6/13/16.
 */
var fish;
var corals;
var currentState;

var renderingContext;

var width;
var height;

var states = {
    Splash: 0,
    Game: 1,
    Score: 2
};


function main() {
    windowSetup();
    canvasSetup();

    currentState = states.Splash;

    document.body.appendChild(canvas);

    fish = new Fish();
    corals = new CoralCollection();

    loadGraphics();
}

function windowSetup() {
    width = window.innerWidth;
    height = window.innerHeight;
    var inputEvent = "touchstart";

    // Game set for mobile, if on desktop, change settings to run
    if (width >= 500) {
        width = 380;
        height = 430;
        inputEvent = "mousedown";
    }

    // on input event listener
    //document.addEventListener(inputEvent, onpress);
}

function canvasSetup() {
    canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height =  height;
    renderingContext = canvas.getContext("2d");
}

function onpress(evt){

}

function loadGraphics() {
    var img = new Image();
    img.src = "";
    img.onload = function () {
        initSprites(this);
        renderingContext.fillStyle = backgroundSprite.color;

        okbutton = {
            x: (width - okbuttonSprite.width) / 2,
            y: height - 200,
            width: okbuttonSprite.width,
            height: okbuttonSprite.height
        };

        gameloop();
    }
}
