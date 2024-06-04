// import IEmployee from "./contracts/IEmployee";

// class Manager implements IEmployee {
//   name: string;
//   age: number;
//   position: string;
//   private _assignedEmployees: IEmployee[];
//   constructor(name: string, age: number, position: string) {
//     this.name = name;
//     this.age = age;
//     this.position = position;
//     this._assignedEmployees = [];
//   }
//   addSubordinate(subordinate: IEmployee) {
//     this._assignedEmployees.push(subordinate);
//   }
// }

// export default Manager;
import Employee from "./Employee";
import IEmployee from "./IEmployee";

class Manager extends Employee {
  private assignedEmployees: IEmployee[];

  constructor(name: string, age: number, startDate: Date) {
    super(name, age, "Manager", startDate);
    this.assignedEmployees = [];
  }

  public addSubordinate(subordinate: IEmployee): void {
    this.assignedEmployees.push(subordinate);
  }
}

export default Manager;
