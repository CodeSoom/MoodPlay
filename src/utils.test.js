import {
  get,
  getSelectedMusicIndex,
  getUpNextItems,
  getTime,
} from './utils';

test('get', () => {
  const state = {
    text: 'hi',
  };

  const f = get('text');
  const g = get('title');

  expect(f(state)).toBe('hi');
  expect(g(state)).toBeUndefined();
});

test('getSelectedMusicIndex', () => {
  const musicItems = [
    { id: { videoId: 'x1' } },
    { id: { videoId: 'x2' } },
    { id: { videoId: 'x3' } },
    { id: { videoId: 'x4' } },
    { id: { videoId: 'x5' } },
  ];

  const a = { id: { videoId: 'x3' } };
  const b = { id: { videoId: 'x4' } };

  expect(getSelectedMusicIndex(musicItems, a)).toBe(2);
  expect(getSelectedMusicIndex(musicItems, b)).toBe(3);
});

test('getUpNextItems', () => {
  const musicItems = [
    { id: { videoId: 'x1' } },
    { id: { videoId: 'x2' } },
    { id: { videoId: 'x3' } },
    { id: { videoId: 'x4' } },
    { id: { videoId: 'x5' } },
  ];

  expect(getUpNextItems(musicItems, 3)).toStrictEqual([
    { id: { videoId: 'x5' } },
    { id: { videoId: 'x1' } },
    { id: { videoId: 'x2' } },
  ]);
  expect(getUpNextItems(musicItems, 0)).toStrictEqual([
    { id: { videoId: 'x2' } },
    { id: { videoId: 'x3' } },
    { id: { videoId: 'x4' } },
  ]);
});

test('getTimes', () => {
  expect(getTime(20304)).toBe('5:38:24');
  expect(getTime(10203)).toBe('2:50:03');
  expect(getTime(0)).toBe('0:00:00');
});
