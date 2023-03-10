import getWeather from './api';

const getLocation = () => window.navigator?.geolocation
  .getCurrentPosition(({ coords }) => getWeather(coords));

export default getLocation;
