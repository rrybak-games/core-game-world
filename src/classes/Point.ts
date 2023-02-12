class Point {
  x: number;
  y: number;
  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }
  static create(x = 0, y = 0) {
    return new Point(x, y);
  }
}

export { Point };
