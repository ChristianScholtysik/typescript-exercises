import IShape from "./IShape";

class Circle implements IShape {
  name: string;
  color: string;
  radius: number;

  constructor(name: string, color: string, radius: number) {
    this.name = name;
    this.color = color;
    this.radius = radius;
  }
  draw(): void {
    return console.log("Drawing Circle");
  }
  isRound(): boolean {
    return true;
  }
}
export default Circle;
