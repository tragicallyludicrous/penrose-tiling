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
    this.x = x;
    this.y = y;
    this.rot = rot;

    this.rot = this.rot + 180;
    this.l = this.kiteLength / PHI;
    this.x1 = this.l + this.x;
    this.y1 = this.y;
    this.x2 = this.x - this.h / tan(72);
    this.y2 = this.y - this.h;
    this.x3 = this.x;
    this.y3 = this.y;
    this.x4 = this.x2;
    this.y4 = this.y + this.h;
    this.a1 = this.l / PHI;
    this.a2 = this.l - this.a1;
    this.arc1 = 36;
    this.arc2 = 105;
  }
  show() {
    push();
    stroke("black");
    strokeWeight(2);
    quad(
      this.x1,
      this.y1,
      this.x2,
      this.y2,
      this.x3,
      this.y3,
      this.x4,
      this.y4,
    );
    this.drawArcs(
      this.x1,
      this.y1,
      -this.l,
      this.a1,
      this.a2,
      this.rot,
      this.arc1,
      this.arc2,
    );
    pop();
  }
}

class Kite extends Shape {
  constructor(kiteLength = 40, x = 0, y = 0, rot = 0) {
    super(kiteLength, x, y, rot);
    this.l = this.kiteLength;
    this.x = x;
    this.y = y;
    this.rot = rot;

    this.rot = this.rot;
    this.l = this.kiteLength;
    this.x1 = this.x;
    this.y1 = this.y;
    this.x2 = this.h / tan(36) + this.x;
    this.y2 = this.y + this.h;
    this.x3 = this.l + this.x;
    this.y3 = this.y;
    this.x4 = this.x2;
    this.y4 = this.y - this.h;
    this.a1 = this.l / PHI;
    this.a2 = this.l - this.a1;
    this.arc1 = 36;
    this.arc2 = 72;
  }
  show() {
    push();
    stroke("black");
    strokeWeight(2);
    quad(
      this.x1,
      this.y1,
      this.x2,
      this.y2,
      this.x3,
      this.y3,
      this.x4,
      this.y4,
    );
    this.drawArcs(
      this.x1,
      this.y1,
      -this.l,
      this.a1,
      this.a2,
      this.rot,
      this.arc1,
      this.arc2,
    );
    pop();
  }
}
