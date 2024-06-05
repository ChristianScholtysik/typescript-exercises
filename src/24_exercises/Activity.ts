class Activity {
  private _name: string;
  private _difficulty: number;
  constructor(name: string, difficulty: number) {
    this._name = name;
    this._difficulty = difficulty;
  }
  get difficulty(): number {
    return this._difficulty;
  }

  set difficulty(value: number) {
    if (value >= 1 && value <= 6) {
      this._difficulty = value;
    } else {
      console.error("Difficulty must be between 1 and 6");
    }
  }
  execute(): void {
    console.log(`Executing ${this._name}`);
  }
}
export default Activity;
