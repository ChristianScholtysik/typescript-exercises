import { IBook } from "./IBooks";

type BasicBook = Omit<IBook, "publishingYear" | "shortDescription">;

const basicBook: BasicBook = {
  author: "George Orwell",
  name: "Animal Farm",
  numberOfPages: 112,
};

interface IBasicBook
  extends Omit<IBook, "publishingYear" | "shortDescription"> {}

const basicBook2: IBasicBook = {
  author: "Harper Lee",
  name: "To Kill a Mockingbird",
  numberOfPages: 281,
};

console.log(basicBook);
console.log(basicBook2);
