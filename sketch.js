var backgroundImage, bg;
var astraea, astraeaImage;
var invisibleGround;
var block,blockImage, blockGroup;
var coinImage, coin, coin1,coinsGroup;
var score = 0;
var lifeImage, life1, life2, life3, lives;
var gameState = "play";
var whiteheartImage,resetButton, resetButtonImage;

function preload(){
  backgroundImage = loadImage("fullbg.jpg");
  astraeaImage = loadAnimation("girl standing.png","girl walking.png");
  blockImage = loadImage("twoblocks.jpg");
  blockImage2 = loadImage("dirt block.png");
  coinImage = loadImage("coin.png");
  lifeImage = loadImage("red heart.png");
  whiteheartImage = loadImage("whiteheart.png");
  resetButtonImage = loadImage("reset.png");
}

function setup() {
  createCanvas(1000,360);
  createSprite(400, 200, 50, 50);

  bg = createSprite(645,180,500,200);
  bg.addImage(backgroundImage);
  bg.scale = 1.5;
  bg.x = bg.width/2;
  bg.velocityX = -4;

  astraea = createSprite(200,250,30,60);
  astraea.addAnimation("girl",astraeaImage);
  astraea.scale = 0.2;

  invisibleGround = createSprite(500,300,1000,20);
  invisibleGround.visible = false;
  //astraea.debug = true;
  astraea.setCollider("rectangle",0,0,width-800,height-10);
  blockGroup = new Group();
  coinsGroup = new Group();

  life1 = createSprite(900,20,10,10);
  life1.addImage(lifeImage);
  life1.scale = 0.2;

  life2 = createSprite(930,20,10,10);
  life2.addImage(lifeImage);
  life2.scale = 0.2;

  life3 = createSprite(960,20,10,10);
  life3.addImage(lifeImage);
  life3.scale = 0.2;

  resetButton = createSprite(930,50,30,10);
  resetButton.addImage(resetButtonImage);
  resetButton.scale = 0.6
  resetButton.visible = false;

}

function draw() {
  background("black");  

  if(bg.x<0+50){
    bg.x = bg.width/2;
  }

  if(keyDown(UP_ARROW)){
    astraea.velocityY = -7;
  }

  astraea.velocityY = astraea.velocityY + 0.8;
  astraea.collide(invisibleGround);
  astraea.collide(blockGroup);
  drawSprites();
  spawnOneBlock();
  spawnTwoBlocks();
}

function spawnTwoBlocks(){
  if(frameCount%200===0){
    block = createSprite(2000,random(190,200),20,20);
    block.addImage(blockImage);
    block.scale = 0.4;
    block.velocityX = -4;
    blockGroup.add(block);
    coin1 = createSprite(2000,block.y-45,20,20);
    coin1.addImage(coinImage);
    coin1.scale = 0.2;
    coin1.velocityX = -4;
    coinsGroup.add(coin1);
  }
}

function spawnOneBlock(){
  if(frameCount%170===0){
    block = createSprite(1000,random(190,200),20,20);
    block.addImage(blockImage2);
    block.scale = 0.4;
    block.velocityX = -4;
    blockGroup.add(block);
    coin = createSprite(1000,block.y-45,20,20);
    coin.addImage(coinImage);
    coin.scale = 0.2;
    coin.velocityX = -4;
    coinsGroup.add(coin);
  }
}