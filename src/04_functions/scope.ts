const pi2 = Math.PI;

function calculateTax(percentage: number, isMarried: boolean): void {
  const myTax = 2000;
  console.log(pi2);
  if (isMarried) {
    const resultMarried = percentage * 50 * myTax;
    console.log(resultMarried);
    console.log(pi2);
  } else {
    const resultUnMarried = percentage * 80 * myTax;
    console.log(resultUnMarried);
    console.log(pi2);
  }
}
