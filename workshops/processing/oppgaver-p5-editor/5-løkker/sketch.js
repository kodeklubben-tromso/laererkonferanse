/*
I denne oppgaven skal du lære deg for-løkker. Dette er kode som kjører et
antall ganger og er kjekk å ha om vi skal gjøre noe flere ganger. I denne
oppgaven skal du lage et ferdig sjakkbrett. Over har vi laget én av radene,
så din oppgave er å lage de 7 neste radene. Husk at rutene skal farges sort/hvit
om en annen.

Tips: Det er mulig å ha for-løkker inni hverandre! 
*/


function setup() {
  createCanvas(500, 500)
  background(200)
}

function draw() {
  var numColumns = 8; // antall ruter bortover 

  var squareHeight = 50; // Rutestørrelse, vi setter 50 pixler
  var squareWidth = squareHeight;

  // Dette er ei for-løkke. Den gjør noe så lenge at variablen i
  // som starter på 1 er mindre enn eller lik numColumns. Dette betyr
  // at den kjører koden under 8 ganger, først når i = 1, så i = 2 osv.
  // helt til i = 8. 
  for (var i = 1; i <= numColumns; i++) {
    if (i % 2) {
      fill(0)
    } else {
      fill(255)
    }

    var x = i * squareWidth;

    rect(x, 50, squareHeight, squareWidth)
  }
}