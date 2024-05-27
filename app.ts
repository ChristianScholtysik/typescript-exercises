import { DISCOUNT } from "./src/18_modules/customer";

import { calculatePrice } from "./src/18_modules/customer";
import CustomerStatus from "./src/18_modules/models/customer-status";
import { Customer } from "./src/18_modules/models/types";

console.log(calculatePrice(200));
console.log(DISCOUNT);

const customer33: Customer = {
  number: 3455,
  status: CustomerStatus,
  name: "Max Mustermann",
  address: { street: " HaUPTSTRASSSE", postalCode: "78965", city: "Munich" },
};

console.log(customer33);

//* aus legacyCode
