import configureStore from 'redux-mock-store';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import reducer, {
  setMoodselectFields,
  setMoodCategories,
  setSelectedCategory,
  setSelectedMusic,
  setCategoryMusic,
  loadMoodCategories,
  loadMusic,
} from './slice';

const middlewares = getDefaultMiddleware();
const mockStore = configureStore(middlewares);

jest.mock('./sevices/api');

describe('reducer', () => {
  describe('setMoodselectFields', () => {
    it('changes moodselectFields', () => {
      const initialState = {
        moodselectFields: {
          energy: '',
          brightness: '',
        },
      };

      const moodselectFields = {
        name: 'energy',
        value: 'calm',
      };

      const state = reducer(initialState, setMoodselectFields(moodselectFields));

      expect(state.moodselectFields.energy).toBe('calm');
    });
  });

  describe('setMoodCategories', () => {
    it('changes moodCategories', () => {
      const initialState = {
        moodCategories: [],
      };

      const moodCategories = [
        ['뉴에이지', 'calm', 'happy'],
        ['지브리', 'calm'],
        ['재즈', 'calm'],
        ['어쿠스틱', 'happy'],
        ['팝', 'happy'],
      ];

      const state = reducer(initialState, setMoodCategories(moodCategories));

      expect(state.moodCategories).toEqual(moodCategories);
    });
  });

  describe('setSelectedCategory', () => {
    it('changes selectedCategory', () => {
      const initialState = {
        selectedCategory: '',
      };

      const selectedCategory = '뉴에이지';

      const state = reducer(initialState, setSelectedCategory(selectedCategory));

      expect(state.selectedCategory).toEqual(selectedCategory);
    });
  });

  describe('setSelectedMusic', () => {
    it('changes selectedMusic', () => {
      const initialState = {
        selectedMusic: null,
      };

      const selectedMusic = {
        id: {
          videoId: 'xxx',
        },
        snippet: {
          channelTitle: 'essential2',
          description: 'description2',
          title: 'title2',
          thumbnails: {
            default: {
              height: 90,
              url: 'https://bbb.com/default.jpg',
              width: 120,
            },
          },
        },
      };

      const state = reducer(initialState, setSelectedMusic(selectedMusic));

      expect(state.selectedMusic).toEqual(selectedMusic);
    });
  });

  describe('setCategoryMusic', () => {
    it('creates each category music', () => {
      const initialState = {};

      const title = '뉴에이지';

      const music = [
        {
          snippet: {
            channelTitle: 'channelTitle1;',
            title: 'title1',
          },
        },
      ];

      const state = reducer(initialState, setCategoryMusic({ title, music }));

      expect(state[title]).toEqual(music);
    });

    context('when same title category is exist', () => {
      it('add music to same title category', () => {
        const initialState = {
          뉴에이지: [
            {
              snippet: {
                channelTitle: 'channelTitle1;',
                title: 'title1',
              },
            },
          ],
        };

        const title = '뉴에이지';

        const music = [
          {
            snippet: {
              channelTitle: 'channelTitle2;',
              title: 'title2',
            },
          },
        ];

        const state = reducer(initialState, setCategoryMusic({ title, music }));

        expect(state[title]).toEqual([
          {
            snippet: {
              channelTitle: 'channelTitle1;',
              title: 'title1',
            },
          },
          {
            snippet: {
              channelTitle: 'channelTitle2;',
              title: 'title2',
            },
          },
        ]);
      });
    });
  });
});

describe('actions', () => {
  let store;

  describe('loadMoodCategories', () => {
    beforeEach(() => {
      store = mockStore({
        moodselectFields: {
          energy: 'mood1',
          brightness: 'mood2',
        },
        moodCategories: [],
      });
    });

    it('runs setMoodCategories', () => {
      store.dispatch(loadMoodCategories());

      const actions = store.getActions();

      expect(actions).toEqual([
        {
          type: 'application/setMoodCategories',
          payload: [
            ['장르1', 'mood1', 'mood2'],
            ['장르2', 'mood1'],
          ],
        },
      ]);
    });
  });

  describe('loadMusic', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setCategoryMusic', async () => {
      await store.dispatch(loadMusic({
        title: '어쿠스틱',
        tag: '차분한',
      }));

      const actions = store.getActions();

      expect(actions).toEqual([
        {
          type: 'application/setCategoryMusic',
          payload: {
            title: '어쿠스틱',
            music: [],
          },
        },
      ]);
    });
  });
});
