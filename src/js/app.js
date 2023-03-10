import getLocation from './location';

import { createLoader } from './loader';

document.addEventListener('DOMContentLoaded', () => {
  createLoader();
  getLocation();
});
