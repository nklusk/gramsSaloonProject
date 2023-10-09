let ATMinterface;
let dialogue1;
let randomAd;
let watchAd;
let displayImage;

function preload() {

    ATMinterface = loadImage("assets/ATMinterface.png");
    randomAd =loadImage("assets/gramAd1.png");
}


function setup() {
    displayImage = image(randomAd, 506, 67)
  createCanvas(900, 632);
  image(ATMinterface, 0, 0);
  watchAd = createButton("watch ad");
  watchAd.mousePressed(displayImage);

}


function draw() {
  // background(125);
  watchAd.position(98, 240);
  watchAd.size(346, 89);
}

  
