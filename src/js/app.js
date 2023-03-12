import { createLoader } from './loader';

import getWeather from './api';

document.addEventListener('DOMContentLoaded', () => {
  createLoader();

  window.navigator?.geolocation.getCurrentPosition(({ coords }) => getWeather(coords));
});
