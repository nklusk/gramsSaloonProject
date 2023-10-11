let dialogue3;
let totalAttens;
let url;


function setup() {
  url = getURL()
  createImg("assets/gramDialogue3.png");
  
  totalAttens = url.substr(-1);
  console.log(totalAttens);
  console.log(url)

}

function draw() {
  noCanvas();
}

if(totalAttens <1){
  location.assign("noAttens.html" +'?'+totalAttens);
}

function mousePressed() {
  location.assign("optionMenu.html" +'?'+totalAttens); 
  
}

