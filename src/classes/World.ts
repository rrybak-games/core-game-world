import { Point } from './Point';
import { WorldObject } from './WorldObject';

/*
         T y
         |
         |
         |        
<-------0,0------->
         |        x
         |
         |
         V
*/
class World {
  RUNNING: boolean = false;
  dx: number;
  dy: number;
  objects: WorldObject[] = [];
  // map: [][]
  gameTick: number = 0;
  constructor(dx = 10, dy = 10) {
    this.dx = dx;
    this.dy = dy;
    // this.constructMap(dx, dy)
  }
  objectIdExist(id: number) {
    if (!this.objects[id]) {
      return false;
    }
    return true;
  }
  getObject(id: number) {
    if (this.objectIdExist(id)) {
      return this.objects[id];
    }
    return null;
  }
  printObjects(selector: Function, printer: Function) {
    this.objects.forEach(person => selector(person) ? printer(person) : null)
  }
  /**
   * 
   * @param {Point} point - Coordinates of an object 
   * @param {string} type  - Type of an object???
   * @returns {WorldObject} Created WorldObject
   */
  addObject(point: Point, type?: string): WorldObject {
    const obj = new WorldObject({ coord: point, type });
    this.objects.push(obj);
    return obj;
  }
  // printToConsole(dx: number, dy: number) {
  //     let consoleOutput = ""
  //     for (let y = 0; y < dy; y++) {
  //         for (let x = 0; x < dx; x++) {
  //             consoleOutput += this.map[x][y]
  //         }
  //         consoleOutput += "\n";
  //     }
  //     console.table(consoleOutput);
  //     // console.log(this.map);
  // }
  // printToMap(x: number, y: number, char: string) {
  //     this.map[x][y] = char
  // }
  createRandomObject() {
    this.addObject({ x: this.random(300), y: this.random(300) });
  }
  /**
   * Create random positioned objects
   * @param {number} num number of objects to create
   * @returns void
   */
  createRandomObjects(num: number) {
    for (let i = 0; i < num; i++) {
      this.createRandomObject();
    }
  }
  // constructMap(dx, dy) {
  //     this.map = []

  //     for (let y = 0; y < dy; y++) {
  //         let row = []
  //         for (let x = 0; x < dx; x++) {
  //             let sign = "."
  //             // empty
  //             if (y == 0 && x == 0) {
  //                 sign = "0"
  //             }
  //             row.push(sign)
  //             // console.log("row", row)
  //         }
  //     this.map.push(row)
  //     }
  //     // console.log("map", this.map)
  // }
  moveObjects() {
    this.objects.forEach((gObj) => {
      // console.log(6 - this.random(12))
      gObj.coord.x = gObj.coord.x + 1 - this.random(3);
      gObj.coord.y = gObj.coord.y + 1 - this.random(3);
    });
    if (this.RUNNING) {
      setTimeout(() => this.moveObjects(), 100);
    }
  }
  random(x: number): number {
    return Math.floor(Math.random() * x);
  }
  start() {
    this.RUNNING = true;
    this.moveObjects();
  }
  stop() {
    this.RUNNING = false;
  }
}

export { Point, World, WorldObject };
