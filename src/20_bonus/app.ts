console.clear();

import Series from "./Series";
import Episode from "./Episode";
import Actor from "./Actor";

//! OOP-Class-TS-Level-3_1
// Wir wollen die Grundlagen für eine Streaming-App schaffen.
// Hierzu brauchen wir die Klassen: Series (= Serie), Episode (=Episode) und Actor (=Darsteller:in)

// Es besteht folgender Zusammenhang
// - Serien haben Episoden
// - Episoden haben Darsteller:innen

// Ein Serie hat folgende Eigenschaften:

// - title
// - description
// - startYear
// - endYear
// - episodes

// Eine Episode hat folgende Eigenschaften:

// - title
// - length
// - description
// - actors

// Eine Actor hat folgende Eigenschaften

// - firstName
// - lastName
// - birthday
// - gender

// Überlege dir sinnvolle Datentypen für die Eigenschaften.

// Lege 3 Serien mit ein paar Episoden und Darsteller:innen an

// Schreibe eine Funktion printSeriesInfo(series: Series), die beispielhaft für eine Serie Folgendes auf der Konsole ausgibt.

// ```tsx
// Title: Breaking Bad
// Description: A high school chemistry teacher turned methamphetamine manufacturer
// Start Year: 2008
// End Year: 2013
// Number of Episodes: 2

// Actors:
// - Bryan Cranston
//   - Birthday: 1956-03-07
//   - Gender: Male
// - Aaron Paul
//   - Birthday: 1979-08-27
//   - Gender: Male
// - Anna Gunn
//   - Birthday: 1968-04-11
//   - Gender: Female
// ```

// Bei Actors sollen alle Darsteller:innen aus allen Episoden ausgegeben werden.

// # ✨ Bonus

// - zeige bei Actors keine doppelten Werte an

const theWireActor1 = new Actor("Dominic", "West", "1969-10-15", "male");
const theWireActor2 = new Actor("Lance", "Reddick", "1962-06-07", "male");
const theWireActor3 = new Actor("Idris", "Elba", "1972-09-06", "male");
const theWireActor4 = new Actor("Michael K.", "Williams", "1966-11-22", "male");
const theWireActor5 = new Actor("Sonja", "Sohn", "1964-05-09", "female");

const theWireActors: Actor[] = [
  theWireActor1,
  theWireActor2,
  theWireActor3,
  theWireActor4,
  theWireActor5,
];

const theWireEpisode1 = new Episode(
  "The Target",
  "63 minutes",
  "The episode begins with Detective Jimmy McNulty (Dominic West) attending a murder trial where he observes the acquittal of DAngelo Barksdale, a mid-level drug dealer, due to witness intimidation. This outcome frustrates McNulty, leading him to voice his concerns about the Barksdale organizations influence over the West Baltimore drug market to a judge, setting off a chain of events that results in the formation of a special detail tasked with investigating the Barksdale operation.",
  theWireActors
);

const theWireEpisode2 = new Episode(
  "The Detail",
  "59 minutes",
  "In The Detail the newly formed investigative unit, led by Lieutenant Cedric Daniels  begins to take shape. The team is tasked with building a case against the Barksdale organization. However, they face immediate challenges due to limited resources and lack of support from higher-ups.Detective Jimmy McNulty continues to push for a more comprehensive investigation into the Barksdale drug empire, while the detail struggles with the logistics of setting up wiretaps and surveillance. Meanwhile, DAngelo Barksdale (Lawrence Gilliard Jr.) tries to adjust to life back on the streets after his acquittal, and he begins to grapple with the moral ambiguities of his role in the drug trade.",
  theWireActors
);

const theWireEpisode3 = new Episode(
  "The Buys",
  "56 minutes",
  "In The Buys, the detail's investigation into the Barksdale organization progresses, albeit slowly. Lieutenant Cedric Daniels (Lance Reddick) faces increasing pressure from his superiors to deliver quick results, leading to tension within the team. Detective Jimmy McNulty (Dominic West) and his partner, Detective Bunk Moreland (Wendell Pierce), continue to dig deeper into the Barksdale operation. They make some headway by flipping a low-level dealer, who provides valuable, though limited, information about the organization's structure and operations. Meanwhile, D'Angelo Barksdale (Lawrence Gilliard Jr.) is further developed as a character, showing his internal conflict with the violent and ruthless nature of the drug trade. He begins to question his place in the family business, especially after witnessing a brutal punishment meted out by his uncle, Avon Barksdale (Wood Harris).The episode also introduces viewers to Omar Little (Michael K. Williams), a charismatic and feared stick-up man who robs drug dealers. Omar's introduction adds another layer of complexity to the street-level dynamics of the drug trade.The Buys continues to build the narrative tension, highlighting the challenges and ethical dilemmas faced by both the police and the criminals. The episode delves deeper into the systemic issues and personal stories that define the world of The Wire.",
  theWireActors
);

const theWireEpisodes: Episode[] = [
  theWireEpisode1,
  theWireEpisode2,
  theWireEpisode3,
];

const theWire = new Series(
  "The Wire",
  "American crime drama television series created by David Simon, which aired on HBO from 2002 to 2008. ",
  2002,
  2008,
  theWireEpisodes
);

const breakingBadEpisodes: Episode[] = [];

const breakingBad = new Series(
  "Breaking Bad",
  "American crime drama television series created by David Simon, which aired on HBO from 2002 to 2008. ",
  2002,
  2008,
  breakingBadEpisodes
);

const seriesCollection: Series[] = [theWire, breakingBad];

function printSeriesInfo() {
  seriesCollection.forEach((series) => {
    console.log("Title: ", series.title);
    console.log("Description: ", series.description);
    console.log("Start Year: ", series.startYear);
    console.log("End Year: ", series.endYear);
    console.log("Number of Episodes: ", series.episodes.length);

    console.log("Actors: ");
    // console.log(series.episodes[].actors[].firstName ' ' series.episodes[].actors[].lastName );

    series.episodes.forEach((episode) => {
      episode.actors.forEach((actor) => {
        console.log(actor.firstName + " " + actor.lastName);
        console.log(actor.birthday);
        console.log(actor.gender);
      });
    });
  });
}

printSeriesInfo();
