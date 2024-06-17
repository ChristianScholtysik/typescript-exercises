export {};

interface Currency {
  name: string;
  symbol: string;
}

interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [key: string]: Currency;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms: object;
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  postalCode: {
    format: string;
    regex: string;
  };
}

const searchField = document.getElementById("search-field") as HTMLInputElement;
const searchButton = document.getElementById("search-button");

//?--------------
function fetchAllCountries() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response: Response) => {
      if (!response.ok) {
        console.log("Response was not ok");
      }
      return response.json();
    })
    .then((countries: Country[]) => {
      console.log(countries);
      displayCountries(countries);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Done with fetching all countries");
    });
}

fetchAllCountries();

function displayCountries(countries: Country[]) {
  const gallery = document.getElementById("gallery-countries");
  if (!gallery) return;
  countries.forEach((country: Country) => {
    const divElement = document.createElement("div");
    divElement.className = "div";
    const headline = document.createElement("h3");
    headline.innerHTML = country.name.official;
    const img = document.createElement("img");
    img.className = "img";
    img.src = country.flags.png;
    img.alt = country.name.official;
    const capital = document.createElement("p");
    capital.innerHTML = `Capital: ${country.capital}`;
    const population = document.createElement("p");
    const language = document.createElement("p");
    language.textContent = `Language: ${Object.values(country.languages).join(
      ", "
    )}`;

    population.innerHTML = `Population: ${country.population.toString()} inhabitants`;
    const region = document.createElement("p");
    region.innerHTML = `Region: ${country.region}`;
    const subRegion = document.createElement("p");
    subRegion.innerHTML = `Subregion: ${country.subregion}`;
    const currency = document.createElement("p");
    const currencies = Object.values(country.currencies);
    if (currencies.length > 0) {
      currency.textContent = `Currency: ${currencies[0].name} (${currencies[0].symbol})`;
    }

    const carSigns = document.createElement("p");
    carSigns.innerHTML = `Car Sign: ${country.car.signs} `;

    divElement.appendChild(headline);
    divElement.appendChild(img);
    divElement.appendChild(capital);
    divElement.appendChild(language);
    divElement.appendChild(population);
    divElement.appendChild(region);
    divElement.appendChild(subRegion);
    divElement.appendChild(currency);
    divElement.appendChild(carSigns);
    gallery.appendChild(divElement);
  });
}

//?--------------
searchButton?.addEventListener("click", (event: Event) => {
  event.preventDefault();
  const gallery = document.getElementById("gallery-countries");
  const searchValue = searchField.value.trim().toLowerCase();
  if (searchValue === "") {
    fetchAllCountries();
  }
  fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then((response: Response) => {
      if (!response.ok) {
        console.log("Search was not ok");
      }

      return response.json();
    })
    .then((countries: Country[]) => {
      if (gallery) {
        gallery.innerHTML = "";
      }

      console.log(countries);
      displayCountries(countries);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Done with fetching the searchValue");
    });
});
