import IShape from "./contracts/IShape";

class Rectangle implements IShape {
  name: string;
  color: string;
  width: number;
  height: number;
  constructor(name: string, color: string, width: number, height: number) {
    this.name = name;
    this.color = color;
    this.width = width;
    this.height = height;
  }
  draw(): void {
    return console.log("drawing rectangle ");
  }

  isRound(): boolean {
    return false;
  }
}

export default Rectangle;
