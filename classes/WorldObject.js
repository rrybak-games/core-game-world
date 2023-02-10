import Point from './Point';

export default class WorldObject {
    constructor(coord = {x: 0, y: 0}, type = "#") {
      this.coord = new Point(coord.x, coord.y);
      this.type = type;
      this.color = "red";
    }
}
export {
  Point,
  WorldObject
}
