let ATMinterface;
let randomAd;
let watchAd;
let displayImage;
let totalAttens = 1;
let displayAttens;
let attensDiv;


// function preload() {

//     ATMinterface = loadImage("assets/ATMinterface.png");
//     randomAd =loadImage("assets/gramAd1.png");
// }


function setup() {
    createImg("assets/ATMinterface.png");
    let ad = createImg("assets/gramAd1.png");
    ad.position(506, 67);
    backToGram = createButton("back to gram")
    watchAd = createButton("watch ad");
    totalAttens = 0;
    attensDiv = createDiv();
    attensDiv.position(230 ,500);
    attensDiv.id("attens");

    noCanvas();
    //createCanvas(900, 632);
    //image(ATMinterface, 0, 0);


    watchAd.mouseClicked(watchAdclicked);
    backToGram.mouseClicked(backToGramClicked);
}


function draw() {

    
    // button positions and sizes:
    watchAd.position(98, 240);
    watchAd.size(346, 89);
    backToGram.size(346, 89);
    backToGram.position(96, 345);
}
// when "watch ad" is clicked
function watchAdclicked() {

    displayAttens = createP(totalAttens);
    displayAttens.position(400, 528);
    displayAttens.style('color', 'black');

    //image(randomAd, 506, 67);
    console.log(totalAttens);
    attensDiv.html(totalAttens);
    totalAttens += 1

}

function backToGramClicked() {
    //location.assign('secondDialogue.html?attens=' + totalAttens);
location.assign('thirdDialogue.html');

}
