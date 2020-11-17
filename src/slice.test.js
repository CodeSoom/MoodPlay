import reducer, { setClientLocation } from './slice';

describe('reducer', () => {
  describe('setClientLocationt', () => {
    it('changes clientLocation', () => {
      const initialState = {
        clientLocation: null,
      };

      const clientLocation = {
        x: '15',
        y: '22',
      };

      const state = reducer(initialState, setClientLocation(clientLocation));

      expect(state.clientLocation).toEqual(clientLocation);
    });
  });
});
