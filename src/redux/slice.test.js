import configureStore from 'redux-mock-store';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import reducer, {
  setMoodselectFields,
  setMoodCategories,
  setSelectedCategory,
  setSelectedMusic,
  setSelectedPlaylist,
  setCategoryMusic,
  setNowPlayingMusicItems,
  setMyPlaylists,
  setStoreOpenState,
  setStoreTextFormOpenState,
  setStoreTextInput,
  setSearchTextInput,
  setSearchMusic,
  addPlaylistTitle,
  addPlaylistMusic,
  removePlaylistMusic,
  loadMoodCategories,
  loadMusic,
  loadSearchMusic,
  storePlaylistTitle,
  storePlaylistMusic,
  deletePlaylistMusic,
  savePlaylist,
} from './slice';

const middlewares = getDefaultMiddleware();
const mockStore = configureStore(middlewares);

jest.mock('../sevices/api');

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

  describe('setSelectedCategory', () => {
    it('changes selectedCategory', () => {
      const initialState = {
        selectedCategory: '',
      };

      const selectedCategory = '뉴에이지';

      const state = reducer(initialState, setSelectedCategory(selectedCategory));

      expect(state.selectedCategory).toEqual(selectedCategory);
    });
  });

  describe('setSelectedMusic', () => {
    it('changes selectedMusic', () => {
      const initialState = {
        selectedMusic: null,
      };

      const selectedMusic = {
        id: {
          videoId: 'xxx',
        },
        snippet: {
          channelTitle: 'essential2',
          description: 'description2',
          title: 'title2',
          thumbnails: {
            default: {
              height: 90,
              url: 'https://bbb.com/default.jpg',
              width: 120,
            },
          },
        },
      };

      const state = reducer(initialState, setSelectedMusic(selectedMusic));

      expect(state.selectedMusic).toEqual(selectedMusic);
    });
  });

  describe('setSelectedPlaylist', () => {
    it('changes selectedPlaylist', () => {
      const initialState = {
        selectedPlaylist: '',
      };

      const selectedPlaylist = '운동할 때 플레이리스트';

      const state = reducer(initialState, setSelectedPlaylist(selectedPlaylist));

      expect(state.selectedPlaylist).toEqual(selectedPlaylist);
    });
  });

  describe('setNowPlayingMusicItems', () => {
    it('changes nowPlayingMusicItems', () => {
      const initialState = {
        selectedMusic: null,
      };

      const nowPlayingMusicItems = [
        {
          id: {
            videoId: 'xxx',
          },
          snippet: {
            channelTitle: 'essential2',
            description: 'description2',
            title: 'title2',
            thumbnails: {
              default: {
                height: 90,
                url: 'https://bbb.com/default.jpg',
                width: 120,
              },
            },
          },
        },
        {
          id: {
            videoId: 'xxx',
          },
          snippet: {
            channelTitle: 'essential2',
            description: 'description2',
            title: 'title2',
            thumbnails: {
              default: {
                height: 90,
                url: 'https://bbb.com/default.jpg',
                width: 120,
              },
            },
          },
        },
      ];

      const state = reducer(initialState, setNowPlayingMusicItems(nowPlayingMusicItems));

      expect(state.nowPlayingMusicItems).toEqual(nowPlayingMusicItems);
    });

    describe('setCategoryMusic', () => {
      it('creates each category music', () => {
        const initialState = {};

        const title = '뉴에이지';

        const music = [
          {
            snippet: {
              channelTitle: 'channelTitle1;',
              title: 'title1',
            },
          },
        ];

        const state = reducer(initialState, setCategoryMusic({ title, music }));

        expect(state[title]).toEqual(music);
      });

      context('when same title category is exist', () => {
        it('add music to same title category', () => {
          const initialState = {
            뉴에이지: [
              {
                snippet: {
                  channelTitle: 'channelTitle1;',
                  title: 'title1',
                },
              },
            ],
          };

          const title = '뉴에이지';

          const music = [
            {
              snippet: {
                channelTitle: 'channelTitle2;',
                title: 'title2',
              },
            },
          ];

          const state = reducer(initialState, setCategoryMusic({ title, music }));

          expect(state[title]).toEqual([
            {
              snippet: {
                channelTitle: 'channelTitle1;',
                title: 'title1',
              },
            },
            {
              snippet: {
                channelTitle: 'channelTitle2;',
                title: 'title2',
              },
            },
          ]);
        });
      });
    });
  });

  describe('setMyPlaylists', () => {
    it('changes myPlaylists', () => {
      const initialState = {
        myPlaylists: [],
      };

      const myPlaylists = [
        {
          playlistTitle: 'My Playlit 1',
          playlists: [
            {
              id: {
                videoId: 'xxx',
              },
              snippet: {
                channelTitle: 'essential2',
                description: 'description2',
                title: 'title2',
                thumbnails: {
                  default: {
                    height: 90,
                    url: 'https://bbb.com/default.jpg',
                    width: 120,
                  },
                },
              },
            },
          ],
        },
      ];

      const state = reducer(initialState, setMyPlaylists(myPlaylists));

      expect(state.myPlaylists).toEqual(myPlaylists);
    });
  });

  describe('setStoreOpenState', () => {
    it('changes storeOpenState', () => {
      const initialState = {
        storeOpenState: false,
      };

      const state = reducer(initialState, setStoreOpenState());

      expect(state.storeOpenState).toEqual(true);
    });
  });

  describe('setStoreTextFormOpenState', () => {
    it('changes storeTextFormOpenState', () => {
      const initialState = {
        storeTextFormOpenState: false,
      };

      const state = reducer(initialState, setStoreTextFormOpenState());

      expect(state.storeTextFormOpenState).toEqual(true);
    });
  });

  describe('setStoreTextInput', () => {
    it('changes storeTextInput', () => {
      const initialState = {
        storeTextInput: '',
      };

      const storeTextInput = '집중하고 싶을 때';

      const state = reducer(initialState, setStoreTextInput(storeTextInput));

      expect(state.storeTextInput).toEqual(storeTextInput);
    });
  });

  describe('setSearchTextInput', () => {
    it('changes searchTextInput', () => {
      const initialState = {
        searchTextInput: '',
      };

      const searchTextInput = '아이유';

      const state = reducer(initialState, setSearchTextInput(searchTextInput));

      expect(state.searchTextInput).toEqual(searchTextInput);
    });
  });

  describe('setSearchMusic', () => {
    it('changes setSearchMusic', () => {
      const initialState = {
        searchMusic: [],
      };

      const searchMusic = [
        { id: { videoId: 'xxx' } },
        { id: { videoId: 'xxx' } },
      ];

      const state = reducer(initialState, setSearchMusic(searchMusic));

      expect(state.searchMusic).toEqual(searchMusic);
    });
  });

  describe('addPlaylistTitle', () => {
    it('changes myPlaylists', () => {
      const initialState = {
        myPlaylists: [],
      };

      const playlistTitle = '집중하고 싶을 때 듣는 음악';

      const state = reducer(initialState, addPlaylistTitle(playlistTitle));

      expect(state.myPlaylists).toEqual([
        {
          playlistTitle,
          playlists: [],
        },
      ]);
    });
  });

  describe('addPlaylistMusic', () => {
    it('changes myPlaylists', () => {
      const initialState = {
        myPlaylists: [{
          playlistTitle: 'playlist 1',
          playlists: [],
        },
        {
          playlistTitle: 'playlist 2',
          playlists: [],
        }],
      };

      const playlistTitle = 'playlist 1';
      const selectedMusic = {
        id: {
          videoId: 'xxx',
        },
        snippet: {},
      };

      const state = reducer(initialState, addPlaylistMusic({ playlistTitle, selectedMusic }));

      expect(state.myPlaylists).toEqual([
        {
          playlistTitle: 'playlist 1',
          playlists: [selectedMusic],
        },
        {
          playlistTitle: 'playlist 2',
          playlists: [],
        },
      ]);
    });
  });

  describe('removePlaylistMusic', () => {
    it('changes myPlaylists', () => {
      const initialState = {
        myPlaylists: [{
          playlistTitle: 'playlist 1',
          playlists: [
            { id: { videoId: 'xxx1' } },
            { id: { videoId: 'xxx2' } },
          ],
        },
        {
          playlistTitle: 'playlist 2',
          playlists: [
            { id: { videoId: 'xxx1' } },
            { id: { videoId: 'xxx3' } },
          ],
        }],
      };

      const playlistTitle = 'playlist 1';
      const selectedMusic = { id: { videoId: 'xxx1' } };

      const state = reducer(initialState, removePlaylistMusic({ playlistTitle, selectedMusic }));

      expect(state.myPlaylists).toEqual([{
        playlistTitle: 'playlist 1',
        playlists: [
          {
            id: { videoId: 'xxx2' },
          },
        ],
      },
      {
        playlistTitle: 'playlist 2',
        playlists: [
          { id: { videoId: 'xxx1' } },
          { id: { videoId: 'xxx3' } },
        ],
      }]);
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
            ['장르1', 'mood', 'mood'],
            ['장르2', 'mood', 'mood'],
          ],
        },
      ]);
    });
  });

  describe('loadMusic', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    context('when music items in the same title category exist', () => {
      it('runs nothing', async () => {
        store = mockStore({
          어쿠스틱: [{ id: 1 }, { id: 2 }],
        });

        await store.dispatch(loadMusic({
          title: '어쿠스틱',
          tag: '차분한',
        }));

        const actions = store.getActions();
        expect(actions).toEqual([]);
      });
    });

    context('when music items in the same title category do not exist and with only one category', () => {
      it('runs setCategoryMusic once', async () => {
        store = mockStore({});

        await store.dispatch(loadMusic({
          title: '어쿠스틱',
          tag1: '차분한',
        }));

        const actions = store.getActions();

        expect(actions).toEqual([
          {
            type: 'application/setCategoryMusic',
            payload: {
              title: '어쿠스틱',
              music: [],
            },
          },
        ]);
      });
    });

    context('when music items in the same title category do not exist and with two category', () => {
      it('runs setCategoryMusic twice', async () => {
        store = mockStore({});

        await store.dispatch(loadMusic({
          title: '어쿠스틱',
          tag1: '차분한',
          tag2: '밝은',
        }));

        const actions = store.getActions();

        expect(actions).toEqual([
          {
            type: 'application/setCategoryMusic',
            payload: {
              title: '어쿠스틱',
              music: [],
            },
          },
          {
            type: 'application/setCategoryMusic',
            payload: {
              title: '어쿠스틱',
              music: [],
            },
          },
        ]);
      });
    });
  });

  describe('loadSearchMusic', () => {
    context('with searchTextInput', () => {
      beforeEach(() => {
        store = mockStore({
          searchTextInput: '아이유',
        });
      });

      it('runs setSearchMusic', async () => {
        store = mockStore({
          searchTextInput: '아이유',
        });

        await store.dispatch(loadSearchMusic());

        const actions = store.getActions();

        expect(actions).toEqual([{
          type: 'application/setSearchMusic',
          payload: [],
        }]);
      });
    });

    context('without searchTextInput', () => {
      beforeEach(() => {
        store = mockStore({
          searchTextInput: '',
        });
      });

      it("doesn't run setSearchMusic", async () => {
        await store.dispatch(loadSearchMusic());

        const actions = store.getActions();

        expect(actions).toEqual([]);
      });
    });
  });

  describe('storePlaylistTitle', () => {
    beforeEach(() => {
      store = mockStore({
        storeTextInput: '집중할 때 들는 음악',
        myPlaylists: [],
      });
    });

    it('runs addPlaylistTitle and setStoreTextInput', () => {
      store.dispatch(storePlaylistTitle());

      const actions = store.getActions();

      expect(actions).toEqual([
        {
          type: 'application/addPlaylistTitle',
          payload: '집중할 때 들는 음악',
        },
        {
          type: 'application/setStoreTextInput',
          payload: '',
        },
      ]);
    });
  });

  describe('storePlaylistMusic', () => {
    beforeEach(() => {
      store = mockStore({
        myPlaylists: [],
        selectedMusic: {
          id: {
            videoId: 'xxx',
          },
          snippet: {},
        },
      });
    });

    it('runs addPlaylistTitle and setStoreTextInput', () => {
      const playlistTitle = '플레이리스트';

      store.dispatch(storePlaylistMusic(playlistTitle));

      const actions = store.getActions();

      expect(actions).toEqual([
        {
          type: 'application/addPlaylistMusic',
          payload: {
            playlistTitle,
            selectedMusic: {
              id: {
                videoId: 'xxx',
              },
              snippet: {},
            },
          },
        },
      ]);
    });
  });

  describe('deletePlaylistMusic', () => {
    beforeEach(() => {
      store = mockStore({
        myPlaylists: [],
        selectedMusic: { id: { videoId: 'xxx1' } },
      });
    });

    it('runs removePlaylistMusic', () => {
      const playlistTitle = 'playlist 1';

      store.dispatch(deletePlaylistMusic(playlistTitle));

      const actions = store.getActions();

      expect(actions).toEqual([
        {
          type: 'application/removePlaylistMusic',
          payload: {
            playlistTitle,
            selectedMusic: { id: { videoId: 'xxx1' } },
          },
        },
      ]);
    });
  });

  describe('savePlaylist', () => {
    beforeEach(() => {
      store = mockStore({
        myPlaylists: [],
        selectedMusic: { id: { videoId: 'xxx1' } },
      });
    });

    it('runs setStoreOpenState', () => {
      store.dispatch(savePlaylist());

      const actions = store.getActions();

      expect(actions).toEqual([{
        payload: undefined,
        type: 'application/setStoreOpenState',
      }]);
    });
  });
});
