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
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Done with fetching the images");
  });
