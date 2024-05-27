function twoPrint(end: number) {
  for (let index = 0; index < end; index++) {
    if (index % 2 !== 0) {
      console.log(index);
    }
  }
}

export { twoPrint as PrintOddNumbers };
