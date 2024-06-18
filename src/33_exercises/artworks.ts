import { IArtWork } from "./contracts/IArtwork";

const BASE_URL = "https://api.artic.edu/api/v1/artworks";
// const gallery = document.getElementById("gallery");
// const searchField = document.getElementById("search-field") as HTMLInputElement;
// const searchButton = document.getElementById("search-btn") as HTMLButtonElement;

//*
function fetchAllArtworks() {
  fetch(BASE_URL)
    .then((response: Response) => {
      if (!response.ok) {
        throw Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((artworks: IArtWork[]) => {
      console.log(artworks);
      createGallery(artworks);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Done with fetching all artworks");
    });
}

//*
fetchAllArtworks();

//*

function createGallery(artworks: IArtWork[]) {
  const artworksData: IArtWork = artworks;
  const gallery = document.getElementById("gallery");
  if (gallery) {
    artworksData.forEach((artwork: IArtWork) => {
      const divElement = document.createElement("div");
      divElement.className = "div";
      const headline = document.createElement("h3");
      headline.innerHTML = artwork.title;
      const artist = document.createElement("h5");
      artist.innerHTML = artwork.artist_title;
      const image = document.createElement("img");
      image.className = "img";
      image.src = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;
      image.alt = artwork.title;
      divElement.appendChild(headline);
      divElement.appendChild(artist);
      divElement.appendChild(image);
      gallery.appendChild(divElement);
    });
  }
}
