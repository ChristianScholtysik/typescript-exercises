import Validator from "./Validator";

class Customer {
  _name: string;
  _email: string;
  address: string;
  _postalCode: number;
  city: string;

  constructor(
    name: string,
    email: string,
    address: string,
    postalCode: number,
    city: string
  ) {
    this._name = name;
    this._email = email;
    this.address = address;
    this._postalCode = postalCode;
    this.city = city;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    if (value.length <= 60) {
      this._name = value;
    } else {
      console.log("Name is much too long, Try again");
    }
  }

  get email() {
    return this._email;
  }
  //   set email(value: string) {
  //     if (value.includes("@") && value.includes(".")) {
  //       this._email = value;
  //     } else {
  //       console.log("Invalid Email. Try again!");
  //     }
  //   }

  set email(value: string) {
    if (Validator.validateEmail(value)) {
      this._email = value;
    } else {
      console.log("Invalid email format. Try again ");
    }
  }
  get postalCode() {
    return this._postalCode;
  }

  set postalCode(value) {
    if (value >= 0 && value <= 99999) {
      const postalCodeToString = value.toString();
      if (postalCodeToString.length === 5) {
        this._postalCode = value;
      } else {
        console.log("Invalid postalCode. Try again!");
      }
    } else {
      console.log("Invalid postalCode. Try again!");
    }
  }
}
export default Customer;
