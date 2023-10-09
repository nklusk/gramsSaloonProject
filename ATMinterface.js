let ATMinterface;
let dialogue1;
let randomAd;
let watchAd;
let displayImage;
let totalAttens;

function preload() {

    ATMinterface = loadImage("assets/ATMinterface.png");
    randomAd =loadImage("assets/gramAd1.png");
}


function setup() {
watchAd = createButton("watch ad");
totalAttens = 0
  createCanvas(900, 632);
  image(ATMinterface, 0, 0);
  
  watchAd.mouseClicked(clicked);

}


function draw() {
  // background(125);
  watchAd.position(98, 240);
  watchAd.size(346, 89);
}

function clicked(){
    image(randomAd, 506, 67);
    console.log(clicks);

}
  
