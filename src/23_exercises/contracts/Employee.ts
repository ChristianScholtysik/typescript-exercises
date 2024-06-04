import IEmployee from "./IEmployee";

class Employee implements IEmployee {
  name: string;
  age: number;
  position: string;
  startDate: Date;

  constructor(name: string, age: number, position: string, startDate: Date) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.startDate = startDate;
  }

  public getYearsOfService(): number {
    const currentDate = new Date().getFullYear();
    const yearsOfService = currentDate - this.startDate.getFullYear();
    return yearsOfService;
  }
}

export default Employee;
