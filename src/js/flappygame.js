/**
 * Created by isaacwatts on 6/13/16.
 */

function main() {
    windowSetup();
    canvasSetup();

    currentState = states.Splash;

    document.body.appendChild();

    fish = new Fish();
    corals = new CoralCollection();

    loadGraphics();
}
