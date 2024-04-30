//? String Methods
const songTitle: string = "TheBeatles - Yesterday";
const songTitleLength: number = songTitle.length;
console.log({ songTitleLength });

//? indexOf
const indexOfY: number = songTitle.indexOf("Y");
console.log({ indexOfY });
const indexOfy: number = songTitle.indexOf("y");
console.log({ indexOfy });
const indexOfe: number = songTitle.indexOf("e");
console.log({ indexOfe });
const indexOfEFromTen: number = songTitle.indexOf("e", 10);
console.log({ indexOfEFromTen });

//? indexer
const letterAtIndex3: string = songTitle[4];
console.log({ letterAtIndex3 });

//?substring
const yesterday: string = songTitle.substring(13, 23);
console.log(yesterday);
const yesterday2: string = songTitle.substring(13);
console.log(yesterday2);
const beatles: string = songTitle.substring(3, 11);
console.log({ beatles });

//? trim
const userEmailFromInput: string = "suzy@gmx.de "; //Leerzeichen nach der Emailadresse!!
const userEmail: string = userEmailFromInput.trim();
console.log({ userEmail });

const userEmailFromInput2: string = "        suzy@gmx.de "; //Leerzeichen vor der Emailadresse!!
const userEmail2: string = userEmailFromInput.trim();
console.log({ userEmail2 });

// ? Slice
const bandName: string = songTitle.slice(0, 11);
console.log({ bandName });

//?search
const eat: number = songTitle.search("eat");
console.log({ eat });

//?replace
const differentBandName: string = songTitle.replace(
  "TheBeatles",
  "Rolling Stones"
);
console.log({ differentBandName });

//?toUpperCase
const songTitleUpperCase: string = songTitle.toUpperCase();
console.log({ songTitleUpperCase });

//?toLowerCase
const songTitleLowerCase: string = songTitle.toLowerCase();
console.log({ songTitleLowerCase });

//?concat
const favoriteSong = "My favorite song is:";
const concatSong = favoriteSong.concat(songTitle).concat("!!!!!");
console.log({ concatSong });
const favoriteSongWithPlus = favoriteSong + songTitle;
console.log({ favoriteSongWithPlus });
