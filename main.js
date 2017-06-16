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

// building button
var buildImg = document.createElement("img");
buildImg.src = "images/tower-btn.png"

// Tower
var towerImg = document.createElement("img");
towerImg.src = "images/tower.png";


//enemy objects
var enemy = {
    x: 32 * 3,
    y: 480 - 32,
};

//cursor get
var cursor = {
    x: 0,
    y: 0,
}

//tower cursor
var tower = {
    x: 0,
    y: 0,
}

//isBuilding
var isBuilding = false;


function draw() {
    ctx.drawImage(bgImg, 0, 0);
    ctx.drawImage(characterImg, 640 - 32, 480 - 32 * 3);
    ctx.drawImage(enemyImg, enemy.x, enemy.y);
    ctx.drawImage(buildImg, 640 - 32 * 2, 480 - 32 * 2, 32 * 2, 32 * 2);
    ctx.drawImage(towerImg, tower.x, tower.y)
}

// delay loading
setTimeout(draw, 100);
// repeat loading
setInterval(draw, 30)

//get cursor on canvas
$("#canvas").on("mousemove",
    function(event) {
        cursor.x = event.offsetX;
        cursor.y = event.offsetY;

        if (isBuilding) {
            tower.x = event.offsetX - event.offsetX % 32;
            tower.y = event.offsetY - event.offsetY % 32;
        }
    }
);

//judge click on buildingImg
$("#canvas").on("click",
    function(event) {
        if (cursor.x > 640 - 32 * 2 && cursor.y > 480 - 32 * 2) {
            if (isBuilding) {
                isBuilding = false;
            } else {
                isBuilding = true;
            }
        } else {
            if (isBuilding) {
                isBuilding = false;
            }
        }
    }
);



/* 
canvas drawImg:
ctx.drawImage(img, x, y, width, height) 

mouse offset in target:
$("#target").on("mousemove",
    function(event) {
        console.log("x: " + event.offsetX + ",y: " + event.offsetY)
    }
);
$("#target").on("click",
    function(event) {
        console.log("x: " + event.offsetX + ",y: " + event.offsetY)
    }
);
*/