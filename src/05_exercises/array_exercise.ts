console.clear();
//! Array-TS-Level-1_1
const bucketList: string[] = ["Japan", "USA", "Schweden"];
const luckyNumbers: number[] = [3, 5, 11];
const favoritePeople: string[] = ["Adeline", "Meriam", "Nick"];

console.log(bucketList);
console.log(luckyNumbers);
console.log(favoritePeople);

//! Array-TS-Level-1_2

console.log(bucketList[2]);
console.log(luckyNumbers[2]);
console.log(favoritePeople[2]);

//! Array-TS-Level-1_3 (length)
console.log(bucketList.length);
console.log(luckyNumbers.length);
console.log(favoritePeople.length);

//! Array-TS-Level-1_4 (push)
const favoriteCities: string[] = ["Stockholm", "Reykjavik", "Malbork"];
console.log("vor Push:", favoriteCities.length);
console.log({ favoriteCities });
favoriteCities.push("Los Angeles", "New York");
console.log("nach Push:", favoriteCities.length);
console.log({ favoriteCities });

//! Array-TS-Level-1_5 (pop)
console.log("vor pop:", favoriteCities);
const deleteItemAtEnd = favoriteCities.pop();
console.log({ deleteItemAtEnd });
console.log("nach pop:", favoriteCities);

//!Array-TS-Level-1_6 (shift)
console.log("vor shift: ", favoriteCities);
const deleteItemAtStart = favoriteCities.shift();
console.log("nach dem shift: ", favoriteCities);
console.log({ deleteItemAtStart });

//!Array-TS-Level-1_7 (unshift)
console.log("vor unshift", favoriteCities);
favoriteCities.unshift("Singapure", "Vancouver");
console.log("nach unshift: ", favoriteCities);

//! Array-TS-Level-1_8 (slice)
const lieblingsReiseZiele: string[] = [
  "Bilbao",
  "Bielefeld",
  "Moskau",
  "Stockholm",
];
console.log("vor dem Slice:", lieblingsReiseZiele);
const slicedCities = lieblingsReiseZiele.slice(1, 3);
console.log("nach dem Slice:", slicedCities);

//! Array-TS-Level-1_9 (push/pop shift/unshift)
const exampleNumberArray: number[] = [23, 54, 75];
console.log(exampleNumberArray);
exampleNumberArray.push(1, 8, 99, 122, 369);
console.log(exampleNumberArray);
exampleNumberArray.unshift(44.2, 8, 78, 987, 23, 54);
console.log(exampleNumberArray);
exampleNumberArray.pop();
exampleNumberArray.pop();
console.log(exampleNumberArray);
exampleNumberArray.shift();
exampleNumberArray.shift();
console.log(exampleNumberArray);

//!Array-TS-Level-1_10 (split)
const futuramaQuote: string =
  "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";
const splitQuote = futuramaQuote.split(".");
console.log({ splitQuote });
const splitQuote2 = futuramaQuote.split(" ");
console.log({ splitQuote2 });
const splitQuote3 = futuramaQuote.split("");
console.log({ splitQuote3 });
