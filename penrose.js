let dart;
let kite;
let PHI = (1 + Math.sqrt(5)) / 2; // The Golden Ratio constant

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  dart = new Dart(100, 0, 0, 0);
  kite = new Kite(100, 0, 0, 0);
}

function draw() {
  background(210);
  translate(width / 2, height / 2);
  kite.show();
  dart.show();
}

class Shape {
  constructor(l, x = 0, y = 0, rot = 0) {
    this.l = l;
    this.kiteLength = l;
    this.h = l / (1 / tan(36) + 1 / tan(72));
    this.x = x;
    this.y = y;
    this.rot = rot;
  }
  drawArcs(x, y, l, a1, a2, rot, arc1, arc2) {
    // Green Arc
    push();
    noFill();
    stroke("green");
    strokeWeight(2);
    arc(x, y, a1 * 2, a1 * 2, (rot - arc1) % 360, (rot + arc1) % 360);
    pop();

    // Red Arc
    push();
    noFill();
    stroke("red");
    strokeWeight(2);
    arc(
      x + l,
      y,
      a2 * 2,
      a2 * 2,
      (rot + 180 - arc2) % 360,
      (rot + 180 + arc2) % 360,
    );
    pop();
  }
}

class Dart extends Shape {
  constructor(kiteLength = 40, x = 0, y = 0, rot = 0) {
    super(kiteLength, x, y, rot);

    this.rot = rot + 180;
    this.l = kiteLength / PHI;
    this.p1 = createVector(this.l + x, y);
    this.p2 = createVector(x - this.h / tan(72), y - this.h);
    this.p3 = createVector(x, y);
    this.p4 = createVector(this.p2.x, y + this.h);
    this.a1 = this.l / PHI;
    this.a2 = this.l - this.a1;
    this.arc1 = 36;
    this.arc2 = 105;
  }
  show() {
    const { drawArcs, p1, p2, p3, p4, l, rot, a1, a2, arc1, arc2 } = this;
    push();
    stroke("black");
    strokeWeight(2);
    quad(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
    drawArcs(p1.x, p1.y, -l, a1, a2, rot, arc1, arc2);
    pop();
  }
}

class Kite extends Shape {
  constructor(kiteLength = 40, x = 0, y = 0, rot = 0) {
    super(kiteLength, x, y, rot);

    this.rot = rot;
    this.l = this.kiteLength;

    this.p1 = createVector(x, y);
    this.p2 = createVector(this.h / tan(36) + x, y + this.h);
    this.p3 = createVector(this.l + x, y);
    this.p4 = createVector(this.p2.x, y - this.h);
    this.a1 = this.l / PHI;
    this.a2 = this.l - this.a1;
    this.arc1 = 36;
    this.arc2 = 72;
  }
  show() {
    const { drawArcs, p1, p2, p3, p4, l, rot, a1, a2, arc1, arc2 } = this;
    push();
    stroke("black");
    strokeWeight(2);
    quad(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
    drawArcs(p1.x, p1.y, l, a1, a2, rot, arc1, arc2);
    pop();
  }
}
