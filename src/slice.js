import { createSlice } from '@reduxjs/toolkit';

import {
  getMoodCategories,
  getCategoryKeyword,
  fetchMusic,
} from './sevices/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    moodselectFields: {
      energy: 'none',
      brightness: 'none',
    },
    moodCategories: [],
    selectedCategory: '',
    selectedMusic: null,
    selectedCategoryMusic: null,
  },
  reducers: {
    setMoodselectFields(state, { payload: { name, value } }) {
      return {
        ...state,
        moodselectFields: {
          ...state.moodselectFields,
          [name]: value,
        },
      };
    },

    setMoodCategories(state, { payload: moodCategories }) {
      return {
        ...state,
        moodCategories,
      };
    },

    setSelectedCategory(state, { payload: selectedCategory }) {
      return {
        ...state,
        selectedCategory,
      };
    },

    setCategoryMusic(state, { payload: { title, music } }) {
      return {
        ...state,
        [title]: state[title] ? [...state[title], ...music] : music,
      };
    },

    setSelectedMusic(state, { payload: selectedMusic }) {
      return {
        ...state,
        selectedMusic,
      };
    },
  },
});

export const {
  setMoodselectFields,
  setMoodCategories,
  setSelectedCategory,
  setCategoryMusic,
  setSelectedMusic,
} = actions;

export function loadMoodCategories() {
  return (dispatch, getState) => {
    const { moodselectFields: { energy, brightness } } = getState();

    const moodCategories = getMoodCategories(energy, brightness);

    dispatch(setMoodCategories(moodCategories));
  };
}

export function loadMusic({ title, tag }) {
  return async (dispatch) => {
    const categoryKeywords = getCategoryKeyword({ title, tag });

    const music = await fetchMusic(categoryKeywords);

    dispatch(setCategoryMusic({ title, music }));
  };
}

export default reducer;
