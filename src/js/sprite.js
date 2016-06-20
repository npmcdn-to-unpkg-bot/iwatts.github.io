/**
 * Created by isaacwatts on 6/14/16.
 */

var fishSprite;
var backgroundSprite;
var foregroundSprite;
var okButtonSprite;

function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x * 2;
    this.y = y * 2;
    this.width = width * 2;
    this.height = height * 2;
}

Sprite.prototype.draw = function (renderingContext, x, y) {
    renderingContext.drawImage(this.img, this.x, this.y, this.width, this.height, x, y, this.width, this.height);
};

function initSprites(img) {
    fishSprite = [
        new Sprite(img, 176, 115, 42, 28),
        new Sprite(img, 176, 144, 42, 28),
        new Sprite(img, 176, 173, 42, 28)
    ];

    foregroundSprite = new Sprite(img, 138, 0, 112, 56);

    backgroundSprite = new Sprite(img, 0, 0, 138, 134);
    backgroundSprite.color = "#8BE4FD";

    okButtonSprite = new Sprite(img, 119, 191, 40, 14);
}
