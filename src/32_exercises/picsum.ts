export {};

type Image = {
  author: string;
  download_url: string;
  height: number;
  id: number;
  url: string;
  width: number;
};

fetch("https://picsum.photos/v2/list")
  .then((response: Response) => {
    if (!response.ok) {
      console.log("Response was not ok");
    }
    return response.json();
  })
  .then((images: Image[]) => {
    console.log(images);
    // images.forEach((image: Image) => {
    //   const figure = document.createElement("figure");

    //   const img = document.createElement("img");
    //   img.className = "img";
    //   img.src = image.url;
    //   img.alt = image.author;

    //   const figcaption = document.createElement("figcaption");
    //   figcaption.textContent = image.author;

    //   figure.appendChild(img);
    //   figure.appendChild(figcaption);
    // });
    displayImages(images);
  })

  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Done with fetching the images");
  });

function displayImages(images: Image[]) {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;
  images.forEach((image: Image) => {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.className = "img";
    img.src = image.download_url;
    img.alt = image.author;

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = image.author;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    gallery.appendChild(figure);
  });
}
