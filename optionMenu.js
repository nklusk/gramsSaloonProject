
let payGram;
let backToATM;
let getOut;
let totalAttens;
let url;


function setup() {
    url = getURL()
    
    
    totalAttens = url.substr(-1);
    console.log(totalAttens);
    console.log(url)
  noCanvas();
  createImg('assets/gramOptionMenu.png');
  payGram = createButton("pay gram");
  backToATM = createButton("back to atm");
  getOut = createButton("get out of this estapplishment")

payGram.mouseClicked(payGramClicked);
backToATM.mouseClicked(backToATMclicked);
getOut.mouseClicked(getOutClicked);
}

function draw() {
    payGram.position(51, 290)
    payGram.size(276, 79)

    backToATM.position(51, 402)
    backToATM.size(338, 79)

    getOut.position(51, 511)
    getOut.size(412, 79)

}

function payGramClicked(){
    location.assign('gramGivesImage.html' +'?'+totalAttens)

}

function backToATMclicked(){
    location.assign('ATMinterface.html' +'?'+totalAttens)
}

function getOutClicked(){
    location.assign('index.html' +'?'+totalAttens)
}
