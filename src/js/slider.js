import { getDayAndTime } from './time';
import arrow from '../assets/arrow.svg';

const createSlide = ({
  dt_txt: date, main, weather, wind,
}) => {
  const { description, icon } = weather[0];
  const { temp, feels_like: feels, humidity } = main;
  const { speed } = wind;

  const html = `
    <span class="slide__time">${getDayAndTime(date)}</span>
    <span class="slide__main">${description}</span>
    <div class="slide__img-wrap">
      <img class="slide__img" src="https://openweathermap.org/img/wn/${icon}@4x.png" />
      <span class="slide__temp">${Math.floor(temp)}°C</span>
    </div>
    <span class="slide__humidity">Feels like: <b>${Math.floor(feels)}°C</b></span>
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

export const createButton = (slider, isNext) => {
  const button = document.createElement('button');
  button.classList.add('button');
  if (isNext) {
    button.classList.add('button_next');
  }
  const html = `<img class="sunset__arrow button__img ${isNext ? 'button__img_next' : ''}" src="${arrow}">`;
  button.insertAdjacentHTML('afterbegin', html);

  const slideWidth = slider.querySelector('.slide').offsetWidth;

  button.addEventListener('click', () => {
    slider.scrollTo({
      top: 0,
      left: Math.floor(slider.scrollLeft) + (isNext ? slideWidth : -slideWidth),
      behavior: 'smooth',
    });
  });

  return button;
};

export default createSlider;
