var mouse,mouseIdle,mouseTease,mouseCollide;
var cat,catIdle,catWalk,catCollide;
var garden,gardenImg;

function preload() {
    gardenImg=loadImage("images/garden.png");

    mouseIdle=loadImage("images/mouse1.png");
    mouseTease=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseCollide=loadImage("images/mouse4.png");

    catIdle=loadImage("images/cat1.png");
    catWalk=loadAnimation("images/cat2.png","images/cat3.png");
    catCollide=loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1400,700);
    garden=createSprite(200,200);
    garden.addImage(gardenImg);

    //creating the Jerry Sprite
    mouse=createSprite(100,450);
    mouse.addImage(mouseIdle);
    mouse.scale=0.1;
    //mouse.debug=true;
    mouse.addAnimation("mouseTeasing",mouseTease);
    mouse.addImage("mouseCollided",mouseCollide);
    mouse.setCollider("circle",0,0,370);

    //creating the Tom Sprite
    cat=createSprite(550,450);
    cat.addImage(catIdle);
    cat.scale=0.15;
    //cat.debug=true;
    cat.addAnimation("catWalking",catWalk);
    cat.addImage("catCollided",catCollide);
    cat.setCollider("circle",0,0,600);
}

function draw() {
    background(255);
    
    //Algorithm for isTouching 
    if(cat.x-mouse.x<(cat.width/2+mouse.width/2)-100){
        mouse.changeAnimation("mouseCollided",mouseCollide);
        cat.changeAnimation("catCollided",catCollide);
        cat.velocityX=0;
    }

    keyPressed();
    drawSprites();
}

function keyPressed(){
if(keyDown("left")){
    mouse.changeAnimation("mouseTeasing",mouseTease);
    cat.changeAnimation("catWalking",catWalk);
    cat.velocityX=-2;
}
}