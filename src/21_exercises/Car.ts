import { CarType } from "./carType";

class Car {
  brand: string;
  private _constructionYear: number;
  _currentSpeed: number;
  carType: CarType;

  constructor(
    brand: string,
    constructionYear: number,
    currentSpeed: number,
    cartype: CarType
  ) {
    this.brand = brand;
    this._constructionYear = constructionYear;
    this._currentSpeed = currentSpeed;
    this.carType = cartype;
  }
  get constructionYear() {
    return this._constructionYear;
  }

  get currentSpeed() {
    if (this._currentSpeed <= 40) {
      console.log("Driving slowly");
    }
    if (this._currentSpeed > 40 && this._currentSpeed <= 70) {
      console.log("Driving fast");
    }
    if (this._currentSpeed > 70 && this._currentSpeed <= 120) {
      console.log("Driving really fast");
    }
    if (this._currentSpeed > 120 && this._currentSpeed <= 190) {
      console.log("WTF");
    }
    return this._currentSpeed;
  }

  set currentSpeed(value: number) {
    this._currentSpeed = value;
  }
}

export default Car;
