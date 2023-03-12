import { FADE_IN } from './constants';
import createHeader from './header';
import createSlider, { createButton } from './slider';

const createWidget = ({ city, list }) => {
  const slider = createSlider(list);
  const wrap = document.createElement('main');

  wrap.classList.add(FADE_IN);
  wrap.classList.add('widget');
  wrap.append(createHeader(city));
  wrap.append(slider);

  document.body.append(wrap);

  wrap.append(createButton(slider, false));
  wrap.append(createButton(slider, true));
};

export default createWidget;
