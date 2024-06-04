import IEmployee from "./contracts/IEmployee";

class Manager implements IEmployee {
  name: string;
  age: number;
  position: string;
  private _assignedEmployees: IEmployee[];
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
    this._assignedEmployees = [];
  }
  addSubordinate(subordinate: IEmployee) {
    this._assignedEmployees.push(subordinate);
  }
}

export default Manager;
