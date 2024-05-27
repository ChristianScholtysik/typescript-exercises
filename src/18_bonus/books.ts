export namespace Fiction {
  const maxBooks = 10;
  let books: string[] = [];

  export function addBook(name: string): void {
    if (books.length >= maxBooks) {
      console.error("Fehler: Maximale Anzahl an Büchern erreicht.");
      return;
    }
    books.push(name);
  }

  export function removeBook(name: string): void {
    const index = books.indexOf(name);
    if (index === -1) {
      console.error(`Fehler: Buch "${name}" nicht gefunden.`);
      return;
    }
    books.splice(index, 1);
  }

  export function displayAllBooks(): void {
    console.log("Fiction Bücher:", books);
  }
}

export namespace NonFiction {
  const maxBooks = 10;
  let books: string[] = [];

  export function addBook(name: string): void {
    if (books.length >= maxBooks) {
      console.error("Fehler: Maximale Anzahl an Büchern erreicht.");
      return;
    }
    books.push(name);
  }

  export function removeBook(name: string): void {
    const index = books.indexOf(name);
    if (index === -1) {
      console.error(`Fehler: Buch "${name}" nicht gefunden.`);
      return;
    }
    books.splice(index, 1);
  }

  export function displayAllBooks(): void {
    console.log("NonFiction Bücher:", books);
  }
}

export namespace ScienceFiction {
  const maxBooks = 10;
  let books: string[] = [];

  export function addBook(name: string): void {
    if (books.length >= maxBooks) {
      console.error("Fehler: Maximale Anzahl an Büchern erreicht.");
      return;
    }
    books.push(name);
  }

  export function removeBook(name: string): void {
    const index = books.indexOf(name);
    if (index === -1) {
      console.error(`Fehler: Buch "${name}" nicht gefunden.`);
      return;
    }
    books.splice(index, 1);
  }

  export function displayAllBooks(): void {
    console.log("ScienceFiction Bücher:", books);
  }
}
