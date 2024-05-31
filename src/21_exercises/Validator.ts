import * as EmailValidator from "email-validator";

class Validator {
  static validateEmail(value: string) {
    return EmailValidator.validate(value);
  }
}

export default Validator;
