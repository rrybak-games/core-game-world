import { Point } from './Point';

export default class WorldObject {
  coord: Point;
  type: string;
  color: string;
  constructor({ coord, type = '#' }: { coord: Point; type?: string }) {
    this.coord = coord;
    this.type = type;
    this.color = 'red';
  }
  toString() {
    return `${this.coord.x} , ${this.coord.x}`
  }
}
export { Point, WorldObject };
