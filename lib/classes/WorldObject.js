"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldObject = exports.Point = void 0;
const Point_1 = require("./Point");
Object.defineProperty(exports, "Point", { enumerable: true, get: function () { return Point_1.Point; } });
class WorldObject {
    constructor({ coord, type = '#' }) {
        this.coord = coord;
        this.type = type;
        this.color = 'red';
    }
    toString() {
        return `${this.coord.x} , ${this.coord.x}`;
    }
}
exports.default = WorldObject;
exports.WorldObject = WorldObject;
