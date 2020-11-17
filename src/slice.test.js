import reducer, { setTest } from './slice';

describe('reducer', () => {
  it('reducer test', () => {
    const initialState = {
      test: null,
    };

    const test = 'test';

    const state = reducer(initialState, setTest(test));
    expect(state).toEqual({
      test: 'test',
    });
  });
});
