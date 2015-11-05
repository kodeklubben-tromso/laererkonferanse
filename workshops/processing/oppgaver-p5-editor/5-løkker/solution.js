function setup() {
  createCanvas(500, 500)
  background(200)
}

function draw() {
  var numColumns = 8;
  var numRows = 8; // antall rader, et brett er 8x8 ruter stort 

  var squareHeight = 50;
  var squareWidth = squareHeight;

  for (var i = 1; i <= numColumns; i++) { // for hver kolonne
    for (var j = 1; j <= numRows; j++) { // for hver rad 

      // Tanken bak fargelegginga er at vi kan se for oss at hver
      // rute har en koordinat. (1,1) for ruta øverst til venstre
      // og (8,8) nederst til høyre. Brettet ser da noe slik ut: 
      // (1,1) (1,2) ... (1,8) 
      // (2,1) (2,2) ... (2,8) 
      // ... 
      // (8,1) (8,2) ... (8,8) 
      // og idéen er at om begge er et partall, eller om begge er odde
      // farger vi  ruta sort, hvis kun én er par eller odde farger
      // vi den hvit. 

      if ((j % 2 == 0) && (i % 2 == 0)) {
        fill(0)
      } else {
        if ((j % 2 == 1) && (i % 2 == 1)) {
          fill(0)
        } else {
          fill(255)
        }
      }

      x = i * squareWidth;
      y = j * squareHeight;

      rect(x, y, squareHeight, squareWidth)
    }
  }
}