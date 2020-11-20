import reducer, { setMoodselectFields } from './slice';

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
});
