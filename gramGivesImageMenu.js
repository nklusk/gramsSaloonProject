let yesButton;
let noButton;
let sampleGramPic;
let sampleGramPic2;

function setup() {

    createImg("assets/gramShowsImageMenu.png");
    sampleGramPic = createImg("assets/sampleGramPic.png");
  sampleGramPic.position(504, 89)
  

    yesButton = createButton("yes")
    yesButton.position(353, 551)
    yesButton.size(198, 62)

    noButton = createButton("no")
    noButton.position(603, 551)
    noButton.size(205, 62)

    noButton.mouseClicked(noButtonPressed);
    yesButton.mouseClicked(yesButtonPressed);

  }
  
  function draw() {
    noCanvas();
  }
  
  function noButtonPressed() {
    location.assign("optionMenu.html"); 
    
  }
  
  function yesButtonPressed(){
sampleGramPic2 = createImg("assets/sampleGramPic2.png")
    sampleGramPic2.position(504, 89)

  }