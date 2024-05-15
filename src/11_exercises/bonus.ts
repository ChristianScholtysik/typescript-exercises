type PeriodActiveTwo = {
  start: number;
  end: number | string;
  extra?: number;
};

type SingerTwo = {
  name: string;
  country: string;
  period_active: PeriodActiveTwo;
  genre: string;
};

const singersTwo: SingerTwo[] = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

// ? Get all Elements
let searchButton = document.getElementById("searchBtn");
let searchInput = document.getElementById("searchInput") as HTMLInputElement;
let resultList = document.getElementById("table-container");
const singerOutput = document.getElementById("singer-output");
// ? Add Eventlistener
if (searchButton && searchInput) {
  searchButton.addEventListener("click", handleSearchClicked);
  searchInput.addEventListener("input", handleInputSearch);
}

//? Search
function handleSearchClicked(event: MouseEvent) {
  event.preventDefault();
  if (!searchInput || !searchInput.value) {
    return;
  }
  const inputLowerCase = searchInput.value.toLowerCase();
  searchSingersTwo(inputLowerCase);
}

function searchSingersTwo(searchText: string) {
  const inputLowerCase = searchText.toLowerCase();
  const resultSingersTwo = singersTwo.filter((singer) =>
    singer.name.toLowerCase().includes(inputLowerCase)
  );
  renderResultSingersTwo(resultSingersTwo);
}

function renderResultSingersTwo(singersToRender: SingerTwo[]): void {
  if (singerOutput) {
    singerOutput.innerHTML = "";

    if (!singersToRender.length) {
      singerOutput.innerHTML = "No singer found.";
    }

    singersToRender.forEach((singer) => {
      const singerContainer = document.createElement("div");
      singerContainer.classList.add("singer");

      const nameElement = document.createElement("h3");
      nameElement.innerText = singer.name;
      singerContainer.appendChild(nameElement);

      singerContainer.appendChild(createParagraph("Country", singer.country));
      singerContainer.appendChild(
        createParagraph("started", singer.period_active.start)
      );
      singerContainer.appendChild(
        createParagraph("ended", singer.period_active.end)
      );
      singerContainer.appendChild(createParagraph("Genre", singer.genre));

      singerOutput.appendChild(singerContainer);
    });
  }
}

function createParagraph(label: string, text: string): HTMLElement {
  const paragraphElement = document.createElement("p");
  paragraphElement.innerText = `${label}: ${text}`;
  return paragraphElement;
}

function handleInputSearch(event: Event) {
  event.preventDefault();
  if (searchInput.value === "") {
    renderResultSingersTwo(singersTwo);
  }
}

//! Math-TS-Level-2_4
// - Erstelle eine Function, die aus dem vorgegeben weather Objekt (siehe Code-Snippet) die Rekordtemperatur (niedrigste und höchste) des Jahres anzeigt.
// - **Bitte halte dich an den Typescript-Standard.**
// - Um diese Aufgabe zu erledigen, verwende ggf.:
//     - map()
//     - spread operator
//     - Math.min()
//     - Math.max()
import { weather } from "./weather";
import { WeatherData } from "./weather";
function findYearlyTemperatureRecords(weatherData: WeatherData[]): {
  lowest: number;
  highest: number;
} {
  // Extract all minimum and maximum temperatures into arrays
  const minTemperatures = weatherData.map((data) => data.temperature_min);
  const maxTemperatures = weatherData.map((data) => data.temperature_max);

  // Find the lowest and highest temperatures using Math.min() and Math.max()
  const lowestTemperature = Math.min(...minTemperatures);
  const highestTemperature = Math.max(...maxTemperatures);

  return { lowest: lowestTemperature, highest: highestTemperature };
}

const yearlyTemperatureRecords = findYearlyTemperatureRecords(weather.data);
console.log("Lowest Temperature of the Year:", yearlyTemperatureRecords.lowest);
console.log(
  "Highest Temperature of the Year:",
  yearlyTemperatureRecords.highest
);
