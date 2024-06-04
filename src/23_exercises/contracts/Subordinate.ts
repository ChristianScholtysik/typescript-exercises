// import IEmployee from "./IEmployee";

// class Subordinate implements IEmployee {
//   name: string;
//   age: number;
//   position: string;
//   startDate: Date;

//   constructor(name: string, age: number, position: string, startDate: Date) {
//     this.name = name;
//     this.age = age;
//     this.position = position;
//     this.startDate = startDate;
//   }
// }

// export default Subordinate;

import Employee from "./Employee";

class Subordinate extends Employee {
  constructor(name: string, age: number, position: string, startDate: Date) {
    super(name, age, position, startDate);
  }
}

export default Subordinate;
