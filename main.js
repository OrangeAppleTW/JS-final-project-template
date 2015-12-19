var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var heroImg = document.createElement("img");
heroImg.src = "images/jason.gif";
var towerImg = document.createElement("img");
towerImg.src = "images/tower-btn.png";
var SmallTowerImg = document.createElement("img");
SmallTowerImg.src = "images/tower.png";

var isBuilding = false;
$("#game-canvas").click(
  function(){
    if(cursor.x > 0 && cursor.x < 64 && cursor.y > 0 && cursor.y < 64){
      isBuilding = !isBuilding
    }
  }
);


var hero = {
  x: 0,
  y: 0
};

var cursor = {
  x: 0, 
  y: 0 
};

var tower = {
  x: 0, 
  y: 0 
};

if(isBuilding === true){
  $("#SmallTowerImg").show();
}else{
  $("#SmallTowerImg").hide();
}

$("#game-canvas").mousemove( 
  function(event){
    cursor.x = event.offsetX;
    cursor.y = event.offsetY;
  }
);

function draw(){
  ctx.drawImage(bgImg,0,0);
  ctx.drawImage(heroImg, hero.x, hero.y);
  ctx.drawImage(towerImg, 0, 0, 64, 64 );
  if(isBuilding === true){
    ctx.drawImage(SmallTowerImg, cursor.x, cursor.y);
  }
}


// setTimeout(draw,1000);
setInterval(draw, 16);
