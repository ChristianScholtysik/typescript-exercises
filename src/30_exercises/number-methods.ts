const numberMethodsPromise: Promise<number[]> = new Promise<number[]>(
  (resolve, reject) => {
    let randomNumbersArray: number[] = [];
    for (let i = 0; i < 3; i++) {
      let generateRandomNumber = Math.floor(Math.random() * 130) + 1;
      randomNumbersArray.push(generateRandomNumber);

      if (generateRandomNumber > 100) {
        reject("Error: Not greater than 100");
        return;
      }
    }
    resolve(randomNumbersArray);
  }
);

const addSeven = (numbers: number[]): number[] => {
  const result = numbers.map((num) => num + 7);
  console.log("After adding 7:", result);
  return result;
};

const multiplyByTwo = (numbers: number[]): number[] => {
  const result = numbers.map((num) => num * 2);
  console.log("After multiplying by 2:", result);
  return result;
};

const subtractOne = (numbers: number[]): number[] => {
  const result = numbers.map((num) => num - 1);
  console.log("After subtracting 1:", result);
  return result;
};

const moduloTwo = (numbers: number[]): number[] => {
  const result = numbers.map((num) => num % 2);
  console.log("After modulo 2:", result);
  return result;
};

numberMethodsPromise
  .then((numbers) => {
    console.log("Initial values:", numbers);
    return addSeven(numbers);
  })
  .then((numbers) => {
    return multiplyByTwo(numbers);
  })
  .then((numbers) => {
    return subtractOne(numbers);
  })
  .then((numbers) => {
    return moduloTwo(numbers);
  })
  .then((numbers) => {
    console.log("Final values:", numbers);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Finished");
  });
