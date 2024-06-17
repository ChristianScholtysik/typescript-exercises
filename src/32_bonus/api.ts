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

//* fetch
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
//*
fetchAllCountries();

//*
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

    const language = document.createElement("p");
    language.className = "p-grey";
    language.textContent = `Language: ${Object.values(country.languages).join(
      ", "
    )}`;
    const population = document.createElement("p");
    population.innerHTML = `Population: ${country.population.toString()} inhabitants`;
    const demonym = document.createElement("p");
    demonym.className = "p-grey";
    demonym.textContent = `Demonym: ${Object.values(
      country.demonyms.eng.f
    ).join(" ")} `;
    const region = document.createElement("p");

    region.innerHTML = `Region: ${country.region}`;
    const subRegion = document.createElement("p");
    subRegion.className = "p-grey";
    subRegion.innerHTML = `Subregion: ${country.subregion}`;
    const currency = document.createElement("p");

    const currencies = Object.values(country.currencies);
    if (currencies.length > 0) {
      currency.textContent = `Currency: ${currencies[0].name} (${currencies[0].symbol})`;
    }

    const carSigns = document.createElement("p");
    carSigns.className = "p-grey";
    carSigns.innerHTML = `Car Sign: ${country.car.signs} `;
    // const mapRegion = document.createElement("href");
    // mapRegion.className = "country-map";
    // mapRegion.innerText = country.maps.openStreetMaps;
    // mapRegion.alt = `Map of ${country.name.official}`;
    const regionLinkMap = document.createElement("a");
    regionLinkMap.className = "country-map";
    regionLinkMap.innerText = `Link to map`;
    regionLinkMap.href = country.maps.openStreetMaps;
    regionLinkMap.target = "_blank";

    divElement.appendChild(headline);
    divElement.appendChild(img);
    divElement.appendChild(capital);
    divElement.appendChild(language);
    divElement.appendChild(population);
    divElement.appendChild(demonym);
    divElement.appendChild(region);
    divElement.appendChild(subRegion);
    divElement.appendChild(currency);
    divElement.appendChild(carSigns);
    divElement.appendChild(regionLinkMap);
    gallery.appendChild(divElement);
  });
}

//* Event Listener:
searchButton?.addEventListener("click", (event: Event) => {
  event.preventDefault();
  const gallery = document.getElementById("gallery-countries");
  const searchValue = searchField.value.trim().toLowerCase();
  if (searchValue === "") {
    fetchAllCountries();
    return;
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

//* refetch all countries when searchField is cleared
searchField.addEventListener("input", () => {
  const searchValue = searchField.value.trim().toLowerCase();

  if (searchValue === "") {
    fetchAllCountries();
  }
});
