export function showMaximum(
  numbers: number[],
  callback: (max: number) => number
): void {
  const max = Math.max(...numbers);
  console.log(`Das Maximum ist: ${max}`);
  const result = callback(max);
  console.log(`Das Ergebnis der Callback-Funktion ist: ${result}`);
  console.log("Finished with showMaximum");
}

export function powerOfTen(number: number): number {
  const result = Math.pow(number, 10);
  console.log(`Die Zahl ${number} hoch 10 ist: ${result}`);
  return result;
}

showMaximum([2, 5, 7, 9, 1, 8], powerOfTen);
