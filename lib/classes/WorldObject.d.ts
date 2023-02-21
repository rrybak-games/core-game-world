import { Point } from './Point';
export default class WorldObject {
    coord: Point;
    type: string;
    color: string;
    constructor({ coord, type }: {
        coord: Point;
        type?: string;
    });
    toString(): string;
}
export { Point, WorldObject };
