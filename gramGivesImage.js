let totalAttens;
let url;
let sampleGramPic;

function setup() {
  url = getURL()
  
  
  totalAttens = url.substr(-1);
  console.log(totalAttens);
  console.log(url)

  createImg("assets/gramShowsImage.png");
  sampleGramPic = createImg("assets/sampleGramPic.png");
  sampleGramPic.position(504, 89)
  noCanvas();
}


function mousePressed() {
  location.assign("gramGivesImageMenu.html" +'?'+totalAttens); 
  
}
