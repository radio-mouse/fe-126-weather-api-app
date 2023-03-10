import { FADE_IN } from './constants';
import sun from '../assets/sun.svg';
import arrow from '../assets/arrow.svg';
import { getTime } from './time';

const wrap = document.createElement('section');

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

const createWidget = ({ city, list }) => {
  wrap.classList.add(FADE_IN);
  wrap.classList.add('widget');
  wrap.append(createHeader(city));

  console.log(list);

  document.body.append(wrap);
};

export default createWidget;
