console.clear();

//! Number-Methods-TS-Level-1_2

const one: number = 15.16698;
const two: number = 7.78714;
const three: number = 12.3;
const four: boolean = true;
const five: boolean = false;
const six: string = "321";
const seven: string = "Supercode";

const one1 = one.toFixed(2);
console.log({ one1 });
const two1 = two.toFixed(2);
console.log({ two1 });
const three1 = three.toFixed(2);
console.log({ three1 });
// const four1 = four.toFixed(2);
// console.log({ four1 });
const six1 = Number(six);
console.log({ six1 });
const six2 = six1.toFixed(2);
console.log({ six2 });

const seven1 = Number(seven);
console.log({ seven1 });
const seven2 = seven1.toFixed(2);
console.log({ seven2 });

//!Number-Methods-TS-Level-1_3

const a1: number = 15.16698;
const b1: number = 7.78714;
const c1: string = "12.3";
const d1: string = "3.14random";
const e1: boolean = true;
const f1: boolean = false;
const g1: string = "321";
const h1: string = "Supercode";

const test = a1.toString();
const test1 = a1.toString(2);
const test2 = a1.toString(8);
const test3 = a1.toString(16);

console.log({ test });
console.log({ test1 });
console.log({ test2 });
console.log({ test3 });

const testA = b1.toString();
const testA1 = b1.toString(2);
const testA2 = b1.toString(8);
const testA3 = b1.toString(16);

console.log({ testA });
console.log({ testA1 });
console.log({ testA2 });
console.log({ testA3 });

//! Number-Methods-TS-Level-1_4

const convert = Number(c1);
console.log({ convert });

const convert2 = Number(d1);
console.log({ convert2 });

const convert3 = Number(g1);
console.log({ convert3 });

const convert4 = Number(h1);
console.log({ convert4 });
