export {};

export function calculateSumAndMore(
  a: number,
  b: number,
  callback1: (result1: number) => number,
  callback2: (result2: number) => number
) {
  let sum = a + b;
  console.log(`Die Summe von ${a} und ${b} ist: ${sum}`);
  let result = callback1(sum);
  console.log(`Verdoppeln: ${result1}`);

  let result2 = callback2(result);
  console.log(`Binärumwandlung: ${result2}`);
}

export const doubleSum = (number: number): number => {
  return number * 2;
};

export const changeToBinary = (number: number): number => {
  return parseInt(number.toString(2));
};
