"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    static create(x = 0, y = 0) {
        return new Point(x, y);
    }
}
exports.Point = Point;
