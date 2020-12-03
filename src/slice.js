import { createSlice } from '@reduxjs/toolkit';

import {
  getMoodCategories,
  getCategoryKeyword,
  fetchMusic,
} from './sevices/api';

import MYPLAYLISTS from '../fixtures/myplaylists';

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
    nowPlayingMusicItems: [],
    myPlaylists: MYPLAYLISTS,
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

    setNowPlayingMusicItems(state, { payload: nowPlayingMusicItems }) {
      return {
        ...state,
        nowPlayingMusicItems,
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
  setNowPlayingMusicItems,
} = actions;

export function loadMoodCategories() {
  return (dispatch, getState) => {
    const { moodselectFields: { energy, brightness } } = getState();

    const moodCategories = getMoodCategories(energy, brightness);

    dispatch(setMoodCategories(moodCategories));
  };
}

export function loadMusic({ title, tag1, tag2 }) {
  return async (dispatch, getState) => {
    const state = getState();

    if (state[title]) return;

    const firstCateGoryKeywords = getCategoryKeyword({ title, tag: tag1 });

    const firstCategoryMusic = await fetchMusic(firstCateGoryKeywords);

    dispatch(setCategoryMusic({ title, music: firstCategoryMusic }));

    if (tag2) {
      const secondCategoryKeywords = getCategoryKeyword({ title, tag: tag2 });

      const secondCategoryMusic = await fetchMusic(secondCategoryKeywords);

      dispatch(setCategoryMusic({ title, music: secondCategoryMusic }));
    }
  };
}

export default reducer;
