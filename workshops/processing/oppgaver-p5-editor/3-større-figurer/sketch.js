/*
I denne oppgaven har vi tegnet to sirkler, en grønn og en rød. Vi har også brukt
funksjonen createCanvas(500,500) til å lage et større vindu å tegne i.
Med funksjonen background(0) har vi satt bakgrunnsfargen til svart. 
Klarer du å tegne en blå sirkel til høyre for den grønne? 
*/

function setup() {
  createCanvas(500, 500)
  background(2)
}

function draw() {
  fill(200, 0, 0);
  ellipse(100, 200, 150, 150);

  fill(0, 200, 0);
  ellipse(250, 200, 150, 150);

}