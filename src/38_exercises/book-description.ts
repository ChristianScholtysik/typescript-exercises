import { IBook } from "./IBooks";

type BookDescription = Pick<IBook, "name" | "shortDescription">;

const bookDescription: BookDescription = {
  name: "1984",
  shortDescription: "A dystopian novel by George Orwell.",
};

interface IBookDescription extends Pick<IBook, "name" | "shortDescription"> {}

const bookDescription2: IBookDescription = {
  name: "To Kill a Mockingbird",
  shortDescription: "A novel by Harper Lee.",
};

console.log(bookDescription);
console.log(bookDescription2);
