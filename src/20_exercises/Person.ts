class Person {
  id: string;
  firstName: string;
  lastName: string;
  birthday?: Date;

  constructor(id: string, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;

    console.log("Student was created successfully");
  }
}

export default Person;
