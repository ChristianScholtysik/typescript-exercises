import { IBook } from "./IBooks";

type PartialBook = Partial<IBook>;

const partialBook: PartialBook = {
  author: "George Orwell",
  name: "1984",
};

interface IPartialBook extends Partial<IBook> {}

const partialBook2: IPartialBook = {
  name: "To Kill a Mockingbird",
};

console.log(partialBook);
console.log(partialBook2);
