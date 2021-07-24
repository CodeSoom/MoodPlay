import _ from 'lodash';

import youtube from './youtube';

import categories from '../../data/categories';
import categoryDetails from '../../data/categoryDetails';

export function getCategories(mood) {
  if (_.isEmpty(mood)) {
    return [];
  }

  const category = categories[mood].map((title) => [title, mood]);

  return category;
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
