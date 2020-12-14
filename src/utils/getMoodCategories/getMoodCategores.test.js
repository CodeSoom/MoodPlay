import {
  reduceCategories,
  getRandomMood,
  getMoodCategories,
} from './getMoodCategores';

test('reduceCategories', () => {
  expect(reduceCategories([], ['a', '1']))
    .toStrictEqual([['a', '1']]);
  expect(reduceCategories([['a', '1']], ['a', '2']))
    .toStrictEqual([['a', '1', '2']]);
  expect(reduceCategories([['a', '1']], ['b', '1']))
    .toStrictEqual([['a', '1'], ['b', '1']]);
});

test('getRandomMood', () => {
  const randomArray = ['calm', 'uplifting', 'happy', 'sad'];

  expect(randomArray).toContain(getRandomMood());
});

test('getMoodCategories', () => {
  expect(getMoodCategories('calm', 'happy'))
    .toStrictEqual(
      [
        ['뉴에이지', 'calm', 'happy'],
        ['어쿠스틱', 'calm', 'happy'],
        ['지브리', 'calm'],
        ['재즈', 'calm'],
        ['로파이', 'calm'],
        ['사극감성', 'calm'],
        ['발라드', 'calm'],
        ['팝', 'happy'],
      ],
    );

  expect(getMoodCategories('calm', ''))
    .toStrictEqual(
      [
        ['뉴에이지', 'calm'],
        ['지브리', 'calm'],
        ['재즈', 'calm'],
        ['로파이', 'calm'],
        ['어쿠스틱', 'calm'],
        ['사극감성', 'calm'],
        ['발라드', 'calm'],
      ],
    );

  expect(getMoodCategories('', 'happy'))
    .toStrictEqual(
      [
        ['뉴에이지', 'happy'],
        ['어쿠스틱', 'happy'],
        ['팝', 'happy'],
      ],
    );

  getMoodCategories('', '')
    .forEach((category) => {
      expect(category).toHaveLength(2);
    });
});
