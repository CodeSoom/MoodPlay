import configureStore from 'redux-mock-store';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import reducer, {
  setMoodselectFields,
  setMoodCategories,
  loadMoodCategories,
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
});
