let backToATM;
let totalAttens;
let url;

function setup() {
    url = getURL()
    
    
    totalAttens = url.substr(-1);
    console.log(totalAttens);
    console.log(url)
    createImg("assets/noAttens.png");
    backToATM = createButton('back to atm');
    backToATM.position(243, 485);
    backToATM.size(435, 108);
    backToATM.mouseClicked(atmPressed);
}

function atmPressed() {
    location.assign('ATMinterface.html' +'?'+totalAttens);
}