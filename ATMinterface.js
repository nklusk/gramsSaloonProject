let ATMinterface;
let randomAd;
let watchAd;
let displayImage;
var totalAttens;
let displayAttens;
let attensDiv;
let randomNumber;
let shownAd;
let backToGramPage;

// function preload() {

//     ATMinterface = loadImage("assets/ATMinterface.png");
//     randomAd =loadImage("assets/gramAd1.png");
// }


function setup() {
    
    createImg("assets/ATMinterface.png");
   
    backToGram = createButton("back to gram")
    watchAd = createButton("watch ad");
    totalAttens = 1;
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

    randomNumber = floor(random(1,6))
    shownAd = createImg("assets/gramAd"+randomNumber+".png");
    shownAd.position(506, 67);

    if (totalAttens == 9){
        location.assign('thirdDialogue.html' +'?'+totalAttens);
    }
}

function backToGramClicked() {
   
    //location.assign('secondDialogue.html?attens=' + totalAttens);
location.assign('thirdDialogue.html' +'?'+totalAttens);



}

