import { IPokemon } from "./contracts/IPokemon";

// function fetchPokemon() {
//   fetch("https://pokeapi.co/api/v2/pokemon")
//     .then((response: Response) => {
//       if (!response.ok) {
//         throw Error(`${response.status} ${response.statusText}`);
//       }
//       return response.json();
//     })
//     .then((pokemons: IPokemon[]) => {
//       console.log(pokemons);
//       generatePokemon(pokemons);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// fetchPokemon();

// function generatePokemon(pokemons: IPokemon[]) {
//   pokemons.forEach((pokemon: IPokemon) => {
//     let allPokemonContainer = document.getElementById("poke-container");
//     if (allPokemonContainer) {
//       let pokeContainer = document.createElement("div");
//       let pokeName = document.createElement("h4");
//       pokeName.innerText = pokemon.name;
//       let pokeNumber = document.createElement("p");
//       pokeNumber.innerText = `#${pokemon.id}`;
//       let pokeImage = document.createElement("img");
//       pokeImage.className = "img";
//       pokeImage.src = pokemon.sprites.front_shiny;
//       pokeImage.alt = pokemon.name;

//       pokeContainer.append(pokeName, pokeNumber);

//       allPokemonContainer.appendChild(pokeContainer);
//     }
//   });
// }

function fetchPokemonList(): Promise<IPokemon[]> {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=200")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data.results as IPokemon[]);
}

function fetchPokemonData(pokemon: IPokemon): Promise<void> {
  return fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // console.log(`${[data]}`);
      const test = Object.values(data);
      // console.log(test);
      test.forEach((pokemon) => {
        console.log(pokemon);
      });
      // console.log(`Pokemon ${pokemon.name} data:`, data);
    })
    .catch((error) => {
      console.error(`Error fetching data for ${pokemon.name}:`, error);
    });
}

function mainFetch() {
  fetchPokemonList()
    .then((pokemons) => {
      console.log("List of Pokemons:", pokemons);

      pokemons.forEach((pokemon) => {
        fetchPokemonData(pokemon);
        let allPokemonContainer = document.getElementById("gallery");
        if (allPokemonContainer) {
          let pokeContainer = document.createElement("div");
          pokeContainer.className = "container";
          let pokeName = document.createElement("h4");
          pokeName.innerHTML = pokemon.name.toLocaleUpperCase();
          let pokemonHeight = document.createElement("p");
          pokemonHeight.innerHTML = `${pokemon.height}`;
          // let pokemonWeight = document.createElement("p");
          // const weight = pokemon.weight;
          // console.log(weight);
          // pokemonWeight.innerHTML = `${weight}`;
          let pokeImage = document.createElement("img");
          pokeImage.className = "img";
          pokeImage.src = `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`;

          pokeContainer.append(
            pokeName,
            pokemonHeight,
            // pokemonWeight,
            pokeImage
          );

          allPokemonContainer.appendChild(pokeContainer);
        }
      });
    })
    .catch((error) => {
      console.error("Error fetching Pokemon list:", error);
    });
}

mainFetch();

const button = document.getElementById("search-btn");

button?.addEventListener("click", (event: Event) => {
  event.preventDefault();
  searchPokemon();
});

const input = document.getElementById("searchInput") as HTMLInputElement;

function searchPokemon() {
  const input = (
    document.getElementById("searchInput") as HTMLInputElement
  ).value.toLowerCase();
  const allPokemonContainers = document.getElementsByClassName("container");

  for (let i = 0; i < allPokemonContainers.length; i++) {
    const pokemonName = (
      allPokemonContainers[i].querySelector("h4") as HTMLHeadingElement
    ).innerHTML.toLowerCase();

    if (pokemonName.includes(input)) {
      (allPokemonContainers[i] as HTMLElement).style.display = "flex";
    } else {
      (allPokemonContainers[i] as HTMLElement).style.display = "none";
    }
  }
}
input.addEventListener("input", () => {
  const searchValue = input.value.trim().toLowerCase();

  if (searchValue === "") {
    mainFetch();
  }
});
