let backToATM;

function setup() {
    createImg("assets/noAttens.png");
    backToATM = createButton('back to atm');
    backToATM.position(243, 485);
    backToATM.size(435, 108);
    backToATM.mouseClicked(atmPressed);
}

function atmPressed() {
    location.assign('ATMinterface.html');
}