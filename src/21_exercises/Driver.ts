import Car from "./Car";
import { CarType } from "./carType";
class Driver {
  firstName: string;
  lastName: string;
  age: number;
  car: Car;
  private _licenseFromYear: number;
  _carType: CarType;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    car: Car,
    licenseFromYear: number,
    carType: CarType
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.car = car;
    this._licenseFromYear = licenseFromYear;
    this._carType = carType;
  }

  get licenseFromYear() {
    return this._licenseFromYear;
  }

  get carType() {
    return console.log(this._carType);
  }
}

export default Driver;
