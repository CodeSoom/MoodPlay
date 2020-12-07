import {
  get,
  getSelectedMusicIndex,
  getUpNextItems,
  getTime,
  getProgressTime,
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

describe('getUpNextItems', () => {
  context('with more than four music items', () => {
    const musicItems = [
      { id: { videoId: 'x1' } },
      { id: { videoId: 'x2' } },
      { id: { videoId: 'x3' } },
      { id: { videoId: 'x4' } },
      { id: { videoId: 'x5' } },
    ];

    it('returns next three items', () => {
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
  });

  context('with less than three music items', () => {
    const musicItems = [
      { id: { videoId: 'x1' } },
      { id: { videoId: 'x2' } },
      { id: { videoId: 'x3' } },
    ];

    it('returns all next items', () => {
      expect(getUpNextItems(musicItems, 2)).toStrictEqual([
        { id: { videoId: 'x1' } },
        { id: { videoId: 'x2' } },
      ]);
      expect(getUpNextItems(musicItems, 1)).toStrictEqual([
        { id: { videoId: 'x3' } },
        { id: { videoId: 'x1' } },
      ]);
    });
  });
});

test('getTimes', () => {
  expect(getTime(20304)).toBe('5:38:24');
  expect(getTime(10203)).toBe('2:50:03');
  expect(getTime(0)).toBe('0:00:00');
});

test('getProgressTime', () => {
  const duration = 20730;
  const progressRatio = [20, 50, 80];

  expect(getProgressTime(duration, progressRatio[0])).toBe(4146);
  expect(getProgressTime(duration, progressRatio[1])).toBe(10365);
  expect(getProgressTime(duration, progressRatio[2])).toBe(16584);
});
