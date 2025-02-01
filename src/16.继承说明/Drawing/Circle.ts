import { IShape } from "./IShape";

export class Circle implements IShape {
    public draw() {
        console.log("Circle is drawn (external module)");
    }
}
