import getWeather from './api';
import createLoader from './loader';

document.addEventListener('DOMContentLoaded', () => {
  createLoader();

  window.navigator?.geolocation.getCurrentPosition(({ coords }) => getWeather(coords));
});
