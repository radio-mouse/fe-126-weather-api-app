import { API_KEY } from './constants';
import { removeLoader } from './loader';

async function getWeather({ latitude, longitude }) {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
  const json = await data.json();

  await removeLoader();

  if (!data.ok) {
    throw new Error();
  }

  return json;
}

export default getWeather;
