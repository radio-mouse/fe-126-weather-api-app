import { FADE_IN } from './constants';
import { getTime, getDayAndTime } from './time';

import sun from '../assets/sun.svg';
import arrow from '../assets/arrow.svg';

const createHeader = ({
  sunset, sunrise, name, country,
}) => {
  const html = `
    <h1 class="text">${name} ${country}</h1>
    <div class="sunset-wrap">
      <div class="sunset">
        <img class="sunset__sun" src="${sun}">
        <img class="sunset__arrow sunset__arrow_up" src="${arrow}">
        <span class="sunset__text">${getTime(sunrise)}</span>
      </div>
      <div class="sunset">
        <img class="sunset__sun" src="${sun}">
        <img class="sunset__arrow" src="${arrow}">
        <span class="sunset__text">${getTime(sunset)}</span>
      </div>
    </div>
  `;

  const header = document.createElement('header');
  header.classList.add('header');
  header.insertAdjacentHTML('afterbegin', html);

  return header;
};

const createSlide = ({
  weather, main, dt_txt: time, wind,
}) => {
  const { description, icon } = weather[0];
  const { temp, feels_like: feels, humidity } = main;
  const { speed } = wind;

  const html = `
    <span class="slide__time">${getDayAndTime(time)}</span>
    <span class="slide__main">${description}</span>
    <div class="slide__img-wrap">
      <img class="slide__img" src="https://openweathermap.org/img/wn/${icon}@4x.png" />
      <span class="slide__temp">${Math.floor(temp)}°C</span>
    </div>
    <span class="slide__humidity">Feels like: <b>${feels}°C</b></span>
    <span class="slide__humidity">Humidity: <b>${humidity}%</b></span>
    <span class="slide__humidity">Wind speed: <b>${speed}m/s</b></span>
  `;

  const slide = document.createElement('li');
  slide.classList.add('slide');
  slide.insertAdjacentHTML('afterbegin', html);

  return slide;
};

const createSlider = (list) => {
  const slider = document.createElement('ul');
  slider.classList.add('slider');

  list.map((item) => slider.append(createSlide(item)));
  return slider;
};

const createWidget = ({ city, list }) => {
  const wrap = document.createElement('section');
  wrap.classList.add(FADE_IN);
  wrap.classList.add('widget');
  wrap.append(createHeader(city));
  wrap.append(createSlider(list));

  document.body.append(wrap);
};

export default createWidget;
