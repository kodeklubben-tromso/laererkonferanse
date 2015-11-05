function setup() {
  createCanvas(500, 500)
  background(0)
}

function draw() {
  if (mouseIsPressed) {
    fill(0, 200, 0)
  }

  // her hadde vi byttet om på mouseX og mouseY. Husk at 
  // ellipse-funksjonen tar først inn x-koordinat så y. 
  ellipse(mouseX, mouseY, 20, 20)
}