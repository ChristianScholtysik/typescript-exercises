import { IBook } from "./IBooks";

type ReadOnlyBook = Readonly<IBook>;

const readonlyBook: ReadOnlyBook = {
  author: "George Orwell",
  name: "1984",
  publishingYear: "1949",
  shortDescription: "A dystopian novel by George Orwell.",
  numberOfPages: 328,
};

interface IReadOnlyBook extends Readonly<IBook> {}

const readonlyBook2: IReadOnlyBook = {
  author: "Harper Lee",
  name: "To Kill a Mockingbird",
  publishingYear: "1960",
  shortDescription: "A novel by Harper Lee.",
  numberOfPages: 281,
};

console.log(readonlyBook);
console.log(readonlyBook2);
