import { World } from "../src/classes/World";
describe("test class: World", () => {
    let game = new World();
    it("typeof game should be object", () => {
        expect(typeof game).toBe('object');
    });
    game.addObject({x: 10, y: 10});
    it("typeof game should be object", () => {
        expect(game.objects.length).toBe(1);
    });
    let obj = game.getObject(0);
    it("check coords of created object", () => {
        if (obj) {
            expect(obj.coord.x).toBe(10);
            expect(obj.coord.y).toBe(10);
        }
        
    });
});
