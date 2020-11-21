import { getMoodCategories } from './api';

describe('api', () => {
  describe('getMoodCategories', () => {
    context('with two moods', () => {
      it('returns categories about two moods', () => {
        const categoreies = getMoodCategories('calm', 'happy');

        expect(categoreies).toEqual([
          ['뉴에이지', 'calm', 'happy'],
          ['어쿠스틱', 'calm', 'happy'],
          ['지브리', 'calm'],
          ['재즈', 'calm'],
          ['로파이', 'calm'],
          ['사극감성', 'calm'],
          ['발라드', 'calm'],
          ['팝', 'happy'],
        ]);
      });
    });

    context('with only mood energy', () => {
      it('returns categories about only mood energy', () => {
        const categoreies = getMoodCategories('calm', 'none');

        expect(categoreies).toEqual([
          ['뉴에이지', 'calm'],
          ['지브리', 'calm'],
          ['재즈', 'calm'],
          ['로파이', 'calm'],
          ['어쿠스틱', 'calm'],
          ['사극감성', 'calm'],
          ['발라드', 'calm'],
        ]);
      });
    });

    context('with only mood brightness ', () => {
      it('returns categories about only mood brightness', () => {
        const categoreies = getMoodCategories('none', 'happy');

        expect(categoreies).toEqual([
          ['뉴에이지', 'happy'],
          ['어쿠스틱', 'happy'],
          ['팝', 'happy'],
        ]);
      });
    });
  });
});
