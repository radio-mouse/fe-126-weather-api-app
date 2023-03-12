import sun from '../assets/sun.svg';
import arrow from '../assets/arrow.svg';
import { getTime } from './time';

const createHeader = (city) => {
  const {
    name, country, sunset, sunrise,
  } = city;

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

export default createHeader;
