import { get } from './utils';

test('get', () => {
  const state = {
    text: 'hi',
  };

  const f = get('text');
  const g = get('title');

  expect(f(state)).toBe('hi');
  expect(g(state)).toBeUndefined();
});
