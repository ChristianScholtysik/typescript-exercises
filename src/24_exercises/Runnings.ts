import Activity from "./Activity";

class Running extends Activity {
  private _distance: number;
  constructor(name: string, difficulty: number, distance: number) {
    super(name, difficulty);
    this._distance = distance;
  }
  get distance() {
    return this._distance;
  }
  warmUp() {
    const timeInMinutes = this.getTime();
    console.log(`Warming up for ${timeInMinutes} minutes`);
  }

  coolDown() {
    const timeInMinutes = this.getTime();
    console.log(`Cooling down  for ${timeInMinutes} minutes`);
  }

  getTime(): number {
    if (this._distance > 10) {
      return 5;
    } else if (this._distance >= 7) {
      return 4;
    } else if (this._distance >= 4.5) {
      return 3;
    } else if (this._distance >= 3) {
      return 2;
    } else {
      return 1;
    }
  }
}
export default Running;
