function setup() {
  createCanvas(500, 500)
  background(200)
}

function draw() {
  var numColumns = 8;
  var numRows = 8;
  var cellId = 1;

  var squareHeight = 50;
  var squareWidth = 50;

  for (var i = 1; i <= numColumns; i++) {
    for (var j = 1; j <= numRows; j++) {
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

      if (floor(mouseX / squareWidth) == i) {
        if (floor(mouseY / squareHeight) == j) {
          fill(200, 15, 0)
        }
      }

      rect(x, y, squareHeight, squareWidth)
    }
  }
}