import { createSlice } from '@reduxjs/toolkit';

import { saveItem } from '../sevices/storage';

import {
  getMoodCategories,
  getCategoryKeyword,
  fetchMusic,
} from '../sevices/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    moodselectFields: {
      energy: '',
      brightness: '',
    },
    moodCategories: [],
    selectedCategory: '',
    selectedMusic: null,
    selectedCategoryMusic: null,
    nowPlayingMusicItems: [],
    selectedPlaylist: '플레이리스트',
    myPlaylists: [{
      playlistTitle: '플레이리스트',
      playlists: [],
    }],
    storeOpenState: false,
    storeTextFormOpenState: false,
    storeTextInput: '',
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

    setSelectedPlaylist(state, { payload: selectedPlaylist }) {
      return {
        ...state,
        selectedPlaylist,
      };
    },

    setNowPlayingMusicItems(state, { payload: nowPlayingMusicItems }) {
      return {
        ...state,
        nowPlayingMusicItems,
      };
    },

    setMyPlaylists(state, { payload: myPlaylists }) {
      return {
        ...state,
        myPlaylists,
      };
    },

    setStoreOpenState(state) {
      return {
        ...state,
        storeOpenState: !state.storeOpenState,
      };
    },

    setStoreTextFormOpenState(state) {
      return {
        ...state,
        storeTextFormOpenState: !state.storeTextFormOpenState,
      };
    },

    setStoreTextInput(state, { payload: storeTextInput }) {
      return {
        ...state,
        storeTextInput,
      };
    },

    addPlaylistTitle(state, { payload: playlistTitle }) {
      return {
        ...state,
        myPlaylists: [
          ...state.myPlaylists,
          {
            playlistTitle,
            playlists: [],
          },
        ],
      };
    },

    addPlaylistMusic(state, { payload: { playlistTitle, selectedMusic } }) {
      return {
        ...state,
        myPlaylists: state.myPlaylists.map((playlist) => {
          if (playlist.playlistTitle === playlistTitle) {
            return ({
              playlistTitle,
              playlists: [...playlist.playlists, selectedMusic],
            });
          }
          return playlist;
        }),
      };
    },

    removePlaylistMusic(state, { payload: { playlistTitle, selectedMusic } }) {
      return {
        ...state,
        myPlaylists: state.myPlaylists.map((playlist) => {
          if (playlist.playlistTitle === playlistTitle) {
            return ({
              playlistTitle,
              playlists: playlist.playlists
                .filter(({ id: { videoId } }) => videoId !== selectedMusic.id.videoId),
            });
          }
          return playlist;
        }),
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
  setSelectedPlaylist,
  setNowPlayingMusicItems,
  setMyPlaylists,
  setStoreOpenState,
  setStoreTextFormOpenState,
  setStoreTextInput,
  addPlaylistTitle,
  addPlaylistMusic,
  removePlaylistMusic,
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

export function storePlaylistTitle() {
  return (dispatch, getState) => {
    const { storeTextInput } = getState();

    dispatch(addPlaylistTitle(storeTextInput));

    const { myPlaylists } = getState();

    saveItem('moodPlay', myPlaylists);

    dispatch(setStoreTextInput(''));
  };
}

export function storePlaylistMusic(playlistTitle) {
  return (dispatch, getState) => {
    const { selectedMusic } = getState();

    dispatch(addPlaylistMusic({ playlistTitle, selectedMusic }));

    const { myPlaylists } = getState();

    saveItem('moodPlay', myPlaylists);
  };
}

export function deletePlaylistMusic(playlistTitle) {
  return (dispatch, getState) => {
    const { selectedMusic } = getState();

    dispatch(removePlaylistMusic({ playlistTitle, selectedMusic }));

    const { myPlaylists } = getState();

    saveItem('moodPlay', myPlaylists);
  };
}

export default reducer;
