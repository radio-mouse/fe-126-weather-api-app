import img404 from '../assets/404.webp';
import { FADE_IN } from './constants';

const create404 = () => {
  const image404 = document.createElement('img');
  image404.setAttribute('src', img404);
  image404.classList.add(FADE_IN);

  document.body.append(image404);
};

export default create404;
