function setup() {

}

function draw() {
  ellipse(20, 20, 30, 30);
  rect(50, 10, 10, 20);

  // Her tegner vi inn en ellipse og et rektangel til. Begge
  // dekker over rektangelet over siden de tegnes etter rekangelet. 
  // Man må være obs på rekkefølgen ting tegnes i. Kommandoen som
  // kommer sist vil tegnes øverst. 
  ellipse(50, 20, 30, 30);
  rect(50, 10, 10, 20);

}