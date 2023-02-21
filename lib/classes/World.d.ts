import { Point } from './Point';
import { WorldObject } from './WorldObject';
declare class World {
    RUNNING: boolean;
    dx: number;
    dy: number;
    objects: WorldObject[];
    gameTick: number;
    constructor(dx?: number, dy?: number);
    objectIdExist(id: number): boolean;
    getObject(id: number): WorldObject | null;
    printObjects(selector: Function, printer: Function): void;
    /**
     *
     * @param {Point} point - Coordinates of an object
     * @param {string} type  - Type of an object???
     * @returns {WorldObject} Created WorldObject
     */
    addObject(point: Point, type?: string): WorldObject;
    createRandomObject(): void;
    /**
     * Create random positioned objects
     * @param {number} num number of objects to create
     * @returns void
     */
    createRandomObjects(num: number): void;
    moveObjects(): void;
    random(x: number): number;
    start(): void;
    stop(): void;
}
export { Point, World, WorldObject };
