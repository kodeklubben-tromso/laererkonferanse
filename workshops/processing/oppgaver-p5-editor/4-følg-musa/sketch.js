/*
I denne oppgaven skal du finne ut av hva som er galt i kodesnutten over. Vi har
lyst å lage et program som tegner sirkler der musa er, men noe er galt. Klarer
du å fikse feilen? Klarer du å legge til støtte for å tegne grønne sirkler om
musa trykkes? 

Tips: Du kan lese om de forskjellige funksjonene her: http://p5js.org/reference

*/

function setup() {
  createCanvas(500, 500)
  background(0)
}

function draw() {
  if (mouseIsPressed) {

  }
  ellipse(mouseY, mouseX, 20, 20)
}