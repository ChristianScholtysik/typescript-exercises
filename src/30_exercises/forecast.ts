import { weather } from "../11_exercises/weather";
import WeatherType from "./weather-type";

const forecastPromise: Promise<WeatherType> = new Promise((resolve, reject) => {
  const randomWeather = Math.floor(Math.random() * 9);

  if (randomWeather <= 6) {
    resolve(randomWeather as WeatherType);
  } else {
    reject("Weather forecast could not be determined");
  }
});

forecastPromise
  .then((weather) => {
    console.log("---resolve---");
    console.log(WeatherType[weather]);
  })
  .catch((error: string) => {
    console.log(error);
  })
  .finally(() => {});
