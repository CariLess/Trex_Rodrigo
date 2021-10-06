
var trex ,trex_running;

function preload(){
  //3 cargar archivos de imágenes o sonido
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

//sprite.loadImage("imagen.png");

}

function setup(){
  createCanvas(600,200)
  
  //1 crear sprite del t-rex.
 trex=createSprite(50,160,20,50);
 //2 agregar la imagen precargada

trex.addAnimation("running", trex_running);
trex.scale=0.5;
trex.x = 60;
edge = createEdgeSprites();

//sprite.addImage(variable de la imagen);
}

function draw(){
  background("white");

  if(keyDown("space")){
    trex.velocityY=-10;
  }
trex.velocityY = trex.velocityY+0.5;
trex.collide(edge[3]);
//trex.collide(edge[2]);
  //0 derecha
  //1 izquierda
  //2 arriba
  //3 abajo
drawSprites();
}
