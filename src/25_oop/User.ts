import IUser from "./contracts/IUSer";

class User implements IUser {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  phone: string = "";
}

export default User;
