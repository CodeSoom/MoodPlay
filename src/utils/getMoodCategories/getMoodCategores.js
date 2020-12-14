import _ from 'lodash';

import { getCategories } from '../../sevices/api';

export function reduceCategories(acc, cur) {
  const duplicateCategory = acc.find((item) => item[0] === cur[0]);

  if (duplicateCategory) {
    acc[acc.indexOf(duplicateCategory)].push(cur[1]);
    return acc;
  }

  return [...acc, cur];
}

export function getRandomMood() {
  const randomMood = _.shuffle(['calm', 'uplifting', 'happy', 'sad'])[0];

  return randomMood;
}

export function getMoodCategories(energy, brightness) {
  if (_.isEmpty(energy) && _.isEmpty(brightness)) {
    return getCategories(getRandomMood());
  }

  const energyTitle = getCategories(energy);
  const brightnessTitle = getCategories(brightness);

  const moodCategories = _(energyTitle)
    .union(brightnessTitle)
    .reduce(reduceCategories, [])
    .sort((a, b) => b.length - a.length);

  return moodCategories;
}
