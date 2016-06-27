/**
 * Created by isaacwatts on 6/14/16.
 */

var fishSprite;
var backgroundSprite;
var foregroundSprite;
var okButtonSprite;
var playButtonSprite;
var gameOverSprite;
var mineSprite;
var boomSprite;

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
        new Sprite(img, 176, 115, 33, 28),
        new Sprite(img, 176, 144, 33, 28),
        new Sprite(img, 176, 173, 33, 28),
		new Sprite(img, 218, 144, 33, 28)
    ];

    boomSprite = [
        new Sprite(img, 272, 15, 32, 28),
        new Sprite(img, 304, 15, 32, 28),
        new Sprite(img, 336, 15, 32, 28),
        new Sprite(img, 368, 15, 32, 28),
        new Sprite(img, 400, 15, 32, 28),

        new Sprite(img, 272, 43, 32, 28),
        new Sprite(img, 304, 43, 32, 28),
        new Sprite(img, 336, 43, 32, 28),
        new Sprite(img, 368, 43, 32, 28),
        new Sprite(img, 400, 43, 32, 28),

        new Sprite(img, 272, 74, 32, 28),
        new Sprite(img, 304, 74, 32, 28),
        new Sprite(img, 336, 74, 32, 28),
        new Sprite(img, 368, 74, 32, 28),
        new Sprite(img, 400, 74, 32, 28),

        new Sprite(img, 272, 107, 32, 28),
        new Sprite(img, 304, 107, 32, 28),
        new Sprite(img, 336, 107, 32, 28),
        new Sprite(img, 368, 107, 32, 28),
        new Sprite(img, 400, 107, 32, 28),

        new Sprite(img, 272, 137, 32, 28),
        new Sprite(img, 304, 137, 32, 28),
        new Sprite(img, 336, 137, 32, 28),
        new Sprite(img, 368, 137, 32, 28),
        new Sprite(img, 400, 137, 32, 28)

    ];

    foregroundSprite = new Sprite(img, 138, 0, 112, 56);

    gameOverSprite = new Sprite(img, 60, 137, 94, 20);

    backgroundSprite = new Sprite(img, 0, 0, 137, 134);
    backgroundSprite.color = "#000000";

    mineSprite = new Sprite(img, 246, 173, 42, 28);

    okButtonSprite = new Sprite(img, 119, 191, 40, 14);
    playButtonSprite = new Sprite(img, 119, 176, 40, 14);
}
