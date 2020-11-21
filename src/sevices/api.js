import categories from '../../data/categories';

export function getMoodCategories(energy, brightness) {
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

// TODO DELETE
export function XX() {
}
