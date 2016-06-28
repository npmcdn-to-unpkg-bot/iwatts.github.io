/**
 * Created by isaacwatts on 6/13/16.
 */
var fish;
var mines;
var crasher;
var mineCrasher;
var currentState;

var canvas;
var scoreBox;
var renderingContext;
var boomFrame = 0;

var width;
var height;
var foregroundPosition = 0;
var backgroundPosition = 0;
var frames = 0;
var groundCrash = false;
var mineCrash = false;

var okButton;
var playButton;
var gameOver;
var score = 0;
var total = 0;

var xloc = 0;
var yloc = 0;

var states = {
    Splash: 0,
    Game: 1,
    Score: 2
};

function Fish() {
    this.x = 140;
    this.y = 0;

    this.frame = 0;
    this.velocity = 0;
    this.animation = [0, 1, 2, 1];


    this.rotation = 0;
    this.radius = 12;

    this.gravity =  0.25;
    this._jump = 3.6;

    this.jump = function () {
        this.velocity = -this._jump;
    };

    this.update = function () {
        //animation speed in splash vs active game
        var n = currentState === states.Splash ? 10 : 5;

        this.frame += frames % n === 0 ? 1 : 0;
        this.frame %= this.animation.length;

        if (currentState === states.Splash) {
            this.updateIdleFish();
        } else {
            //Active game speed
            this.updatePlayingFish()
        }
    };

    this.updateIdleFish = function () {
        this.y = height - 280 + 5 * Math.cos(frames / 10);
        this.rotation = 0;
    };

    this.updatePlayingFish = function () {
        this.velocity += this.gravity;
        this.y += this.velocity;

        // Change to the score state when fish touches the ground
        if (this.y >= height - foregroundSprite.height - 10) {
            this.y += height - foregroundSprite.height + 50;
            groundCrash = true;

            if (currentState === states.Game) {
                currentState = states.Score;
            }

            this.velocity = this._jump;
            // Set velocity to jump speed for correct rotation
        }

        // If our player hits the top of the canvas, we crash him
        if (this.y <= 2) {
            currentState = states.Score;
        }

        // When fish lacks upward momentum increment the rotation angle
        if (this.velocity >= this._jump) {
            this.frame = 1;
            this.rotation = Math.min(Math.PI / 2, this.rotation + 0.3);
        } else {
            this.rotation = -0.3;
        }
    };

    this.draw = function (renderingContext) {
        renderingContext.save();

        renderingContext.translate(this.x, this.y);
        renderingContext.rotate(this.rotation);

        var n = this.animation[this.frame];

        fishSprite[n].draw(renderingContext, -fishSprite[n].width / 2, -fishSprite[n].height / 2);

        renderingContext.restore();
    }
}

function Boom() {
    this.x = 130;
    this.y = 280;

    this.draw = function (renderingContext) {
        if (boomFrame <= boomSprite.length - 1) {
            this.y -= 1;
            this.x -= 1.5;

            boomSprite[boomFrame].draw(renderingContext, this.x, this.y);
            boomFrame++;
        }
    };
}
function CollisionBoom() {

    this.draw = function (renderingContext) {
        if (boomFrame <= boomSprite.length - 1) {
            boomSprite[boomFrame].draw(renderingContext, xloc, yloc);
            boomFrame++;
        }
    };
}

function MineCollection() {
    this._mines = [];

    this.reset = function () {
        this._mines = [];
    };

    this.add = function () {
        this._mines.push(new Mine());
    };

    this.update = function () {
        if (frames % 80 === 0) {
            this.add();
        }

        for (var i = 0, len = this._mines.length; i < len; i++) {
            var mine = this._mines[i];

			 mine.x -= 2;
            if (i === 0) {
                mine.detectCollision();
				if (mineCrash) {

				}
            }

            if (mine.x < -mine.width) {
                this._mines.splice(i,1);
                i--;
                len--;

            }
        }
    };
    this.draw = function () {
        for (var i = 0, len = this._mines.length; i < len; i++) {
            var mine = this._mines[i];
            mine.draw();
        }
    }
}

function Mine() {
    this.x = 500;
    this.y = height - (mineSprite.height + foregroundSprite.height + 200 * Math.random());
    this.width = mineSprite.width;
    this.height = mineSprite.height;

    /**
     * Determines if the fish has collided with the Coral.
     * Calculates x/y difference and use normal vector length calculation to determine
     */
    this.detectCollision = function () {
        xloc = this.x;
		yloc = this.y;

		// intersection
        var cx = Math.min(Math.max(fish.x, this.x), this.x + (this.width - 1));
        var cy1 = Math.min(Math.max(fish.y, this.y), this.y + (this.height - 1));


        // Closest difference
        var dx = fish.x - (cx + 5);
        var dy1 = fish.y - cy1;


        // Vector length
        var d1 = dx * dx + dy1 * dy1;

        var r = fish.radius * fish.radius;

        // Determine intersection
        if (r > d1) {
            currentState = states.Score;
			mineCrash = true;
        }
    };

    this.draw = function () {
        mineSprite.draw(renderingContext, this.x, this.y);
    }
}

function onpress(evt) {

    var mouseX = evt.offsetX, mouseY = evt.offsetY;

    switch (currentState) {

        case states.Splash: // Start the game and update the fish velocity.

            if (mouseX == null || mouseY == null) {
                mouseX = evt.touches[0].clientX;
                mouseY = evt.touches[0].clientY;
            }

            // Check if within the playButton
            if (playButton.x < mouseX && mouseX < playButton.x + playButton.width && playButton.y < mouseY && mouseY < playButton.y + playButton.height ) {
                currentState = states.Game;
                fish.jump();
            }

            break;

        case states.Game: // The game is in progress. Update fish velocity.
            fish.jump();
            break;

        case states.Score:
            // Change from score to splash state if event within okButton bounding box
            // Get event position
            //console.log(total);

            if (mouseX == null || mouseY == null) {
                mouseX = evt.touches[0].clientX;
                mouseY = evt.touches[0].clientY;
            }

            // Check if within the okButton
            if (okButton.x < mouseX && mouseX < okButton.x + okButton.width && okButton.y < mouseY && mouseY < okButton.y + okButton.height ) {
                //console.log('click');
                mines.reset();
				score = 0;

                crasher.x = 130;
                crasher.y = 280;
                boomFrame = 0;

                groundCrash = false;
				mineCrash = false;

                currentState = states.Splash;
            }
            break;
    }
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
    document.addEventListener(inputEvent, onpress);
}

function canvasSetup() {
    canvas = document.createElement("canvas");
    canvas.style.border = '10px solid #000';
    canvas.width = width;
    canvas.height =  height;
    renderingContext = canvas.getContext("2d");
}

function loadGraphics() {
    var img = new Image();
    img.src = "img/sheet.png";
    img.onload = function () {
        initSprites(this);
        renderingContext.fillStyle = backgroundSprite.color;
        renderingContext.fillRect(0, 0, width, height);

        okButton = {
            x: (width - okButtonSprite.width) / 2,
            y: height - 200,
            width: okButtonSprite.width,
            height: okButtonSprite.height
        };

        playButton = {
            x: (width - playButtonSprite.width) / 2,
            y: height - 200,
            width: playButtonSprite.width,
            height: playButtonSprite.height
        };
        gameOver = {
            x: (width - gameOverSprite.width) / 2,
            y: height - 250,
            width: gameOverSprite.width,
            height: gameOverSprite.height
        };

        gameLoop();
    }
}

function main() {
    windowSetup();
    canvasSetup();

    currentState = states.Splash;

    document.body.appendChild(canvas);
	$("canvas").after( "<div class='score'>Total: 0</div>" );
	$(".score").after( "<div class='gt'></div>" );

    fish = new Fish();
    mines = new MineCollection();
    crasher = new Boom();
	mineCrasher = new CollisionBoom();

    loadGraphics();
	checkCookie();
}

function gameLoop() {
    update();
    render();
    window.requestAnimationFrame(gameLoop);
}

function update() {
    frames++;

    if (currentState !== states.Score) {
        foregroundPosition = (foregroundPosition - 2) % 224; // Move left two px each frame. Wrap every 14px.
        backgroundPosition = (backgroundPosition - 0.3) % 274; // Move left 3/10ths px each frame. Wrap every 275px.
    }

    if (currentState === states.Game) {
        mines.update();
        //Set the score counter in here
        score++;
		$(".score").text("Total:" + score);
    }
	if (currentState === states.Score){
		if (score >= total) {
			total = score;
			document.cookie = "highScore=" + total;
			$(".gt").text("High Score:" + total);
		}
	}

    fish.update();

}

function render() {
    // Draw background color
    renderingContext.fillRect(0, 0, width, height);

    // Draw background sprites
    backgroundSprite.draw(renderingContext, backgroundPosition, 0);
    backgroundSprite.draw(renderingContext, backgroundPosition, backgroundSprite.height);
	backgroundSprite.draw(renderingContext, backgroundPosition + backgroundSprite.width - 1, 0);
	backgroundSprite.draw(renderingContext, backgroundPosition + backgroundSprite.width - 1, backgroundSprite.height);
    backgroundSprite.draw(renderingContext, backgroundPosition + (backgroundSprite.width * 2) - 1, 0);
	backgroundSprite.draw(renderingContext, backgroundPosition + (backgroundSprite.width * 2) - 1, backgroundSprite.height);

    fish.draw(renderingContext);
    mines.draw(renderingContext);

    if (currentState === states.Score) {
        if (groundCrash) {
            crasher.draw(renderingContext);
        }
		if (mineCrash) {
			mineCrasher.draw(renderingContext)
		}
        okButtonSprite.draw(renderingContext, okButton.x, okButton.y);
        gameOverSprite.draw(renderingContext, gameOver.x, gameOver.y);
        //crasher.reset();
    }
    if (currentState === states.Splash) {
        playButtonSprite.draw(renderingContext, playButton.x, playButton.y);
    }

    foregroundSprite.draw(renderingContext, foregroundPosition, height - foregroundSprite.height);
    foregroundSprite.draw(renderingContext, foregroundPosition + foregroundSprite.width, height - foregroundSprite.height);
	foregroundSprite.draw(renderingContext, foregroundPosition + (foregroundSprite.width * 2), height - foregroundSprite.height);

}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var highScore=getCookie("highScore");
    if (highScore != "") {
        $(".gt").text("High Score:" + highScore);
    }
}
