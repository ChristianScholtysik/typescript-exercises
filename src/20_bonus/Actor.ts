class Actor {
  firstName: string;
  lastName: string;
  //   birthday:Date;
  birthday: string;
  gender: string;

  constructor(
    firstName: string,
    lastName: string,
    // birthday: Date,
    birthday: string,
    gender: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.gender = gender;
  }
}

export default Actor;
