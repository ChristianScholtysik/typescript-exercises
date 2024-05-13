//* break bricht Schleife sofort ab

for (let index = 0; index < 10; index++) {
  console.log(index);
  if (index === 6) {
    break;
  }
}

function dividableBySeven(startNumber: number, endNumber: number) {
  let result = 0;
  for (let index = startNumber; index < endNumber; index++) {
    if (index % 7 === 0) {
      result = index;
      break;
    }
  }
  return result;
}
const result1 = dividableBySeven(15, 23);
console.log({ result1 });

const result2 = dividableBySeven(300, 330);
console.log({ result2 });

//* continue = bricht an der Stelle den aktuellen Schleifendurchlauf ab, nicht die komplette Schleife

for (let index = 0; index < 10; index++) {
  if (index % 2 === 0) {
    continue;
  }
  console.log({ index });
  const sum = index + 33;
  console.log(sum);
}
