import { IShape } from "./IShape";

export class Triangle implements IShape {
    public draw() {
        console.log("Triangle is drawn (external module)");
    }
}
