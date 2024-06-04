// import IEmployee from "./IEmployee";

// class Trainee implements IEmployee {
//   name: string;
//   age: number;
//   position: string = "Trainee";
//   startDate: Date;

//   constructor(name: string, age: number, startDate: Date) {
//     this.name = name;
//     this.age = age;
//     this.position = "Trainee";
//     this.startDate = startDate;
//   }
// }
// export default Trainee;

import Employee from "./Employee";
class Trainee extends Employee {
  constructor(name: string, age: number, startDate: Date) {
    super(name, age, "Trainee", startDate);
  }
}

export default Trainee;
