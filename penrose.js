let shape;
let PHI = (1 + Math.sqrt(5)) / 2; // The Golden Ratio constant

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  shape = new Shape(100);
}

function draw() {
  background(210);
  translate(width / 2, height / 2);
  shape.kite();
  // shape.dart();
}

class Shape {
  constructor(l, x = 0, y = 0) {
    this.kiteLength = l;
    this.h = l / (1 / tan(36) + 1 / tan(72));
    this.x = x;
    this.y = y;
    this.rot = 0;
  }
  #drawArcs(x, y, l, a1, a2, rot, arc1, arc2) {
    // Red Arc
    push();
    noFill();
    stroke("red");
    strokeWeight(2);
    arc(x + l, y, a2 * 2, a2 * 2, (rot + arc2) % 360, (rot + arc2) % 360);
    pop();

    // Green Arc
    push();
    noFill();
    stroke("green");
    strokeWeight(2);
    arc(x, y, a1 * 2, a1 * 2, (rot - arc1) % 360, (rot + arc1) % 360);
    pop();
  }

  dart() {
    let rot = this.rot + 180;
    let l = this.kiteLength / PHI;
    let x1 = l + this.x;
    let y1 = this.y;
    let x2 = this.x - this.h / tan(72);
    let y2 = this.y - this.h;
    let x3 = this.x;
    let y3 = this.y;
    let x4 = x2;
    let y4 = this.y + this.h;
    let a1 = l / PHI;
    let a2 = l - a1;
    let arc = 36;
    // atan(this.h / l);

    push();
    stroke("black");
    strokeWeight(2);
    quad(x1, y1, x2, y2, x3, y3, x4, y4);
    this.#drawArcs(x1, y1, -l, a1, a2, rot, arc);
    pop();
  }

  kite() {
    let l = this.kiteLength;
    let x1 = this.x;
    let y1 = this.y;
    let x2 = this.h / tan(36) + this.x;
    let y2 = this.y - this.h;
    let x3 = l + this.x;
    let y3 = this.y;
    let x4 = x2;
    let y4 = this.y + this.h;
    let a1 = l / PHI;
    let a2 = l - a1;
    let arc1 = 36;
    let arc2 = 72;

    // Kite Body
    push();
    stroke("black");
    strokeWeight(2);
    quad(x1, y1, x2, y2, x3, y3, x4, y4);
    this.#drawArcs(x1, y1, l, a1, a2, arc1, arc2);
    pop();
  }
}
