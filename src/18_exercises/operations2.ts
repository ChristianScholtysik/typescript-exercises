function add(a: number, b: number) {
  const result = a + b;
  return result;
}

function substract(a: number, b: number) {
  const result = a - b;
  return result;
}

function multiply(a: number, b: number) {
  const result = a * b;
  return result;
}

function divide(a: number, b: number) {
  const result = a / b;
  return result;
}

export {
  add as addNumbers,
  substract as subtractNumbers,
  multiply as multiplyNumbers,
  divide as divideNumbers,
};
