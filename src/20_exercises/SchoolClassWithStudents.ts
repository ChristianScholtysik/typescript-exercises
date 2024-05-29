import Person from "./Person";
class SchoolClassWithStudents {
  name: string;
  id: string;
  endDate?: Date;
  students: Person[];

  constructor(name: string, id: string, students: Person[]) {
    this.name = name;
    this.id = id;
    this.students = students;
    console.log("School class with students creation successful");
  }
}
export default SchoolClassWithStudents;
