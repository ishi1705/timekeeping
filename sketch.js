function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('lavender');

  let h = hour();
  let m = minute();
  let s = second();
  translate(width / 2, height / 2);
  strokeWeight(8);
  noFill();
  ellipse(0, 0, 300, 300);
  push();
  rotate(radians(map(h % 12, 0, 12, 0, 360) - 90));
  strokeWeight(8);
  line(0, 0, 0, -50);
  pop();
  push();
  rotate(radians(map(m, 0, 60, 0, 360) - 90));
  strokeWeight(6);
  line(0, 0, 0, -70);
  pop();
  push();
  rotate(radians(map(s, 0, 60, 0, 360) - 90));
  strokeWeight(2);
  stroke(255, 0, 0);
  line(0, 0, 0, -90);
  pop();
}

