console.clear();

//!String-Methods-TS-Level-1_1

const firstName: string = "James";
const lastName: string = "Bond";

const firstNameLength = firstName.length;
console.log({ firstNameLength });

const lastNameLength = lastName.length;
console.log({ lastNameLength });

const fullName: string = firstName + lastName;
console.log({ fullName });
const fullNameLength = fullName.length;
console.log({ fullNameLength });

//!String-Methods-TS-Level-1_2

const earthQuote =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";
const indexOfH: number = earthQuote.indexOf("h");
console.log({ indexOfH });

const indexOfEarth: number = earthQuote.indexOf("Earth");
console.log({ indexOfEarth });

const indexOfMoon: number = earthQuote.indexOf("Moon");
console.log({ indexOfMoon });

//! String-Methods-TS-Level-1_3

let oceanQuote =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

const searchOf: number = oceanQuote.search(";");
console.log({ searchOf });

const searchOfGreen: number = oceanQuote.search("green");
console.log({ searchOfGreen });

const searchOfBlue: number = oceanQuote.search("blue");
console.log({ searchOfBlue });

//! String-Methods-TS-Level-1_4

const susisStatus = "Susi is going to codingschool";
const susi = susisStatus.slice(0, 4);
console.log({ susi });
const susiResult = document.getElementById("susiResult");
if (susiResult) {
  susiResult.innerHTML = susi;
}

const is = susisStatus.slice(5, 7);
console.log({ is });
const isResult = document.getElementById("isResult");
if (isResult) {
  isResult.innerHTML = is;
}

const isGoingToSchool = susisStatus.slice(5);
console.log({ isGoingToSchool });
const isGoingToSchoolResult = document.getElementById("isGoingToSchoolResult");
if (isGoingToSchoolResult) {
  isGoingToSchoolResult.innerHTML = isGoingToSchool;
}

const school = susisStatus.slice(23);
console.log({ school });
const schoolResult = document.getElementById("schoolResult");
if (schoolResult) {
  schoolResult.innerHTML = school;
}

const susiIsSchool = susisStatus.slice(0, 7);
const susiIsSchool2 = susisStatus.slice(23);
console.log({ susiIsSchool });
const susiIsSchoolResult = document.getElementById("susiIsSchoolResult");
if (susiIsSchoolResult) {
  susiIsSchoolResult.innerHTML = susiIsSchool + " " + susiIsSchool2;
}

//! String-Methods-TS-Level-1_5

const whereIsSusi = "Susi is back from codingschool";

const susiBack = whereIsSusi.substring(0, 4);

console.log(susiBack);
const susiIs = whereIsSusi.substring(5, 7);
console.log(susiIs);

const susiSchool = whereIsSusi.substring(24);
console.log(susiSchool);

const susiAll = whereIsSusi.substring(0, 7);
const susiCombined = susiAll + " " + susiSchool;
console.log(susiAll);

const susiBackResult = document.getElementById("susiBack");
if (susiBackResult) {
  //   document.write(
  //     susiBack + " " + susiIs + " " + susiSchool + " " + susiCombined
  //   );
  susiBackResult.innerHTML =
    susiBack + " " + susiIs + " " + susiSchool + " " + susiCombined;
}
console.log(susiBackResult);

//! String-Methods-TS-Level-1_6
const susisJob = "Sam is working at codingschool";

const sam = susisJob.substr(0, 4);
console.log({ sam });

const samIs = susisJob.substr(3, 4);
console.log({ samIs });

const samAtSchool = susisJob.substr(17);
console.log({ samAtSchool });

const samWorks = susisJob.substr(0, 3);
const samWorks1 = susisJob.substr(7, 4);
const samWorks2 = susisJob.substr(15, 2);
const samWorks3 = susisJob.substr(24);
console.log({ samWorks });
console.log({ samWorks1 });
console.log({ samWorks2 });
console.log({ samWorks3 });

//!String-Methods-TS-Level-1_7
const samsStatus = "Sam is good at codingschool";

const bad = samsStatus.replace("good", "bad");
const samResult = document.getElementById("samsStatus");
if (samResult) {
  samResult.innerHTML = bad;
}

const susiGood = samsStatus.replace("Sam", "Susi");
const susiGoodResult = document.getElementById("susiGood");
if (susiGoodResult) {
  susiGoodResult.innerHTML = susiGood;
}

const samTennis = samsStatus.replace("codingschool", "tennis");
const samTennisResult = document.getElementById("samTennis");
if (samTennisResult) {
  samTennisResult.innerHTML = samTennis;
}

//! String-Methods-TS-Level-1_9

const infoAboutSam = "Sam is going to codingschool";
const susiI = "Susi";
const and = "and";

const infoAboutSamResult = document.getElementById("infoAboutSam");
if (samTennisResult) {
  samTennisResult.innerHTML = "KEINEN BOCK mehr das alles zu tippen";
}
