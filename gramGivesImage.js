let sampleGramPic;

function setup() {

  createImg("assets/gramShowsImage.png");
  sampleGramPic = createImg("assets/sampleGramPic.png");
  sampleGramPic.position(504, 89)
}

function draw() {
  noCanvas();
}

function mousePressed() {
  location.assign("gramGivesImageMenu.html"); 
  
}
