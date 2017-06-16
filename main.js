// Html img element
var bgImg = document.createElement("img");
bgImg.src = "images/map.png";

// find canvas in html
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// character jason
var characterImg = document.createElement("img");
characterImg.src = "images/jason.gif"

// enemy
var enemyImg = document.createElement("img");
enemyImg.src = "images/slime.gif"

//enemy objects
var enemy = {
    x: 32 * 3,
    y: 480 - 32,
};


function draw() {
    ctx.drawImage(bgImg, 0, 0);
    ctx.drawImage(characterImg, 640 - 32, 480 - 32);
    ctx.drawImage(enemyImg, enemy.x, enemy.y);
}

// delay loading
setTimeout(draw, 100);
// repeat loading
setInterval(draw, 1000)