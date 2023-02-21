import { World, WorldObject, Point } from "../classes/World";
console.log('new game')
let game = new World();
game.addObject({x: 10, y: 10});
game.addObject({x: 50, y: 10});
console.log(game.objects);
let selector = (wObject: WorldObject) => wObject.coord.x > 10
game.printObjects(selector, console.log);