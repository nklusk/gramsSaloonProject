let saloonEntrance;
let dialogue1;

function preload() {

  dialogue1 = loadImage("assets/gramDialogue2.png");

}


function setup() {
  createCanvas(900, 632);
  image(dialogue1, 0, 0);

}

function draw() {
  // background(125);
}

function mousePressed() {
    location.assign("ATMinterface.html" +'?'+totalAttens); 
    
  }
  
