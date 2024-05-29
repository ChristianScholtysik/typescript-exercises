class Owner {
  name: string;
  address: string;
  postalCode: string;
  city: string;
  birthday?: Date;

  constructor(name: string, address: string, postalCode: string, city: string) {
    this.name = name;
    this.address = address;
    this.postalCode = postalCode;
    this.city = city;
  }
}

export default Owner;
