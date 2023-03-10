import { API_KEY } from './constants';
import { removeLoader } from './loader';

import create404 from './404';

async function getWeather({ latitude, longitude }) {
  try {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    const json = await data.json();

    console.log(json);
  } catch (e) {
    console.log(e.message);
  }
}

export default getWeather;
