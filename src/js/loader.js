import loaderImg from '../assets/loader.svg';
import { FADE_IN, FADE_OUT } from './constants';

const loader = document.createElement('img');

export const createLoader = () => {
  loader.setAttribute('src', loaderImg);
  loader.classList.add(FADE_IN);

  document.body.append(loader);
};

export const removeLoader = () => new Promise((resolve) => {
  loader.classList.remove(FADE_IN);
  loader.classList.add(FADE_OUT);

  loader.addEventListener('animationend', () => {
    loader.remove();
    resolve();
  });
});
