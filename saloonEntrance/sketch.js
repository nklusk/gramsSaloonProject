let saloonEntrance;
let dialogue1;

function preload() {
  saloonEntrance = loadImage("assets/gramsSaloonEntrance.png");
}


function setup() {
  createCanvas(900, 632);
  image(saloonEntrance, 0, 0);
}

function draw() {
  // background(125);
}

function mousePressed() {
  location.assign("firstDialogue.html"); 
  
}

