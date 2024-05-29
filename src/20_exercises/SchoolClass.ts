class SchoolClass {
  name: string;
  id: string;
  endDate?: Date;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;

    console.log("School class creation successful");
  }
}
export default SchoolClass;
