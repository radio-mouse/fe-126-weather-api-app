import getWeather from './api';
import create404 from './404';

import { createLoader } from './loader';

document.addEventListener('DOMContentLoaded', () => {
  createLoader();

  window.navigator?.geolocation.getCurrentPosition(({ coords }) => {
    getWeather(coords)
      .then((weather) => console.log(weather))
      .catch(create404);
  });
});
