// * Registrierte Kunden

type NewCustomer = {
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone?: string;
};
//? Pflichtfelder im Registrierformular: firstName, lastName, email
//? Optional kann eine Mobilfunkummer angegeben werden

const customer1: NewCustomer = {
  firstName: "Franny",
  lastName: "Salinger",
  email: "f.salinger@gmx.de",
  mobilePhone: "0175-235698",
};

console.log(customer1.firstName);
const customer2: NewCustomer = customer1;
// customer2.firstName = "Danny";
// console.log(customer2.firstName);
// console.log(customer1.firstName);

//? Spread Operator ... kopieren ohne das Oriinalobjekt zu verändern
const realCopyCustomer2: NewCustomer = { ...customer1 };
console.log(realCopyCustomer2);
realCopyCustomer2.firstName = "Danny";
console.log(realCopyCustomer2.firstName);
console.log(customer1.firstName);

//? mit Object.assign
const copyCustomer3 = Object.assign({}, customer1);
copyCustomer3.firstName = "Sanny";
console.log(copyCustomer3.firstName);

const customer3: NewCustomer = {
  firstName: "Jochen",
  lastName: "Schweitzer",
  email: "jochen@schweitzer.com",
};
console.log(customer3.mobilePhone);

const customers: NewCustomer[] = [customer1, customer3];
customers.forEach((customer: NewCustomer) => {
  //? nur wenn es eine mobilfunknummer gibt, will ich sie ausgeben
  if (customer.mobilePhone) {
    console.log("Es gibt eine Mobilfunknummer: ", customer.mobilePhone);
  }
});
