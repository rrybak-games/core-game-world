import Point from "./Point";
import WorldObject from "./WorldObject";

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
    constructor(dx = 10, dy = 10) {
        this.dx = dx;
        this.dy = dy
        this.objects = [];
        this.map = [];
        this.gameTick = 0;
        this.constructMap(dx, dy);
    }
    addObject(point, type) {
       const obj = new WorldObject(point, type);
       this.objects.push(obj);
    }
    printToConsole(dx, dy) {
        let consoleOutput = "";
        for (let y = 0; y < dy; y++) {
            for (let x = 0; x < dx; x++) {
                consoleOutput += this.map[x][y]
            }
            consoleOutput += "\n";
        }
        console.table(consoleOutput);
        // console.log(this.map);      
    }
    
    printToMap(x, y, char) {
        this.map[x][y] = char;
    }
    
    constructMap(dx, dy) {
        this.map = [];
        
        for (let y = 0; y < dy; y++) {
            let row = [];
            for (let x = 0; x < dx; x++) {
                let sign = ".";
                // empty
                if (y == 0 && x == 0) {
                    sign = "0";
                }
                row.push(sign)
                // console.log("row", row);
            }
        this.map.push(row);
        }
        // console.log("map", this.map)
    }
}

export {
  Point,
  World,
  WorldObject
}