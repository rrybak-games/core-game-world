export default class Point {
    constructor (x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
    static create(x = 0, y = 0) {
      return new Point(x, y);
    }
}