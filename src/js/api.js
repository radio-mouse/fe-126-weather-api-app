import { API_KEY } from './constants';
import { removeLoader } from './loader';

import create404 from './404';
import createWidget from './widget';

async function getWeather({ latitude, longitude }) {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
  const json = await data.json();

  await removeLoader();

  if (!data.ok) {
    create404();
  }

  createWidget(json);
}

export default getWeather;
