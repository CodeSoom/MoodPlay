import {
  getCategories,
  getCategoryKeyword,
  fetchMusic,
} from './api';

jest.mock('./youtube.js');

describe('api', () => {
  describe('getCategories', () => {
    context('with mood', () => {
      const mood = 'happy';

      it('returns categories', () => {
        const categories = getCategories(mood);

        expect(categories).toEqual([
          ['뉴에이지', 'happy'],
          ['어쿠스틱', 'happy'],
          ['팝', 'happy'],
        ]);
      });
    });

    context('without mood', () => {
      const mood = '';

      it('returns empty array', () => {
        const categories = getCategories(mood);

        expect(categories).toEqual([]);
      });
    });
  });

  describe('getCategoryKeyword', () => {
    it('returns keyword', () => {
      const keyword = getCategoryKeyword({
        title: '뉴에이지',
        tag: 'calm',
      });

      expect(keyword).toEqual('차분한 뉴에이지');
    });
  });

  describe('fetchMusic', () => {
    it('returns category music', async () => {
      const data = await fetchMusic('차분한 뉴에이지');

      expect(data).toEqual([{
        snippet: {
          channelTitle: 'channelTitle1',
          description: 'description1',
          title: 'title1',
          thumbnails: {},
        },
      }]);
    });
  });
});
