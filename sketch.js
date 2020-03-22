var database,playerCount,gameState,form,game,player
playerCount=0
gameState=0
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

}

function draw(){
  background("white");
  
}