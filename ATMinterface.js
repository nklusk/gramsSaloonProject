let ATMinterface;
let dialogue1;
let randomAd;
let watchAd;
let displayImage;
let totalAttens;
let displayAttens;


function preload() {

    ATMinterface = loadImage("assets/ATMinterface.png");
    randomAd =loadImage("assets/gramAd1.png");
}


function setup() {
backToGram = createButton("back to gram")
watchAd = createButton("watch ad");
totalAttens = 0
  createCanvas(900, 632);
  image(ATMinterface, 0, 0);
  
  
  watchAd.mouseClicked(watchAdclicked);
    backToGram.mouseClicked(backToGramClicked);
}


function draw() {
  
  watchAd.position(98, 240);
  watchAd.size(346, 89);
backToGram.size(346,89);
backToGram.position(96, 345);
}

function watchAdclicked(){
    // fill('black');
    rect(250, 500, 100, 100)
 displayAttens = createP(totalAttens);
  displayAttens.position(260, 518);
    displayAttens.style('color', 'black');

    image(randomAd, 506, 67);
    console.log(totalAttens);
    totalAttens += 1

}
  
function backToGramClicked(){
    location.assign('secondDialogue.html');
}
