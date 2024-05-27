export type Address = {
  street: string;
  postalCode: string;
  city: string;
};

export type Customer = {
  number: number;
  status: CustomerStatus;
  name: string;
  address: Address;
};
export { Address, Customer };
