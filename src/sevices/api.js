import youtube from './youtube';

import categories from '../../data/categories';
import categoryDetails from '../../data/categoryDetails';

export function getMoodCategories(energy, brightness) {
  if (energy === 'none' && brightness === 'none') {
    const randomMood = ['calm', 'uplifting', 'happy', 'sad'][Math.floor(Math.random() * 4)];

    const randomMoodCategories = categories[randomMood].map((title) => [title, randomMood]);

    return randomMoodCategories;
  }

  const energyTitle = energy !== 'none'
    ? categories[energy].map((title) => [title, energy])
    : [];
  const brightnessTitle = brightness !== 'none'
    ? categories[brightness].map((title) => [title, brightness])
    : [];

  const moodCategories = [];

  energyTitle
    .concat(brightnessTitle)
    .forEach((categorie) => {
      const duplicateCategorie = moodCategories.find((item) => item[0] === categorie[0]);

      if (duplicateCategorie) {
        moodCategories[moodCategories.indexOf(duplicateCategorie)].push(categorie[1]);
        return;
      }

      moodCategories.push(categorie);
    });

  moodCategories.sort((a, b) => b.length - a.length);

  return moodCategories;
}

export function getCategoryKeyword({ title, tag }) {
  const categoryKeyword = categoryDetails[tag]
    .find((category) => category.title === title).keyword;

  return categoryKeyword[0];
}

export async function fetchMusic(term) {
  const response = await youtube.get('./search', {
    params: {
      q: term,
    },
  });

  const data = response.data.items;
  return data;
}
