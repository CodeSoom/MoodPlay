import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import { loadItem } from './sevices/storage';

import MYPLAYLISTS from '../fixtures/myplaylists';

jest.mock('react-redux');
jest.mock('./sevices/storage');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector(
      {
        moodselectFields: {
          energy: '',
          brightness: '',
        },
        moodCategories: [],
        selectedPlaylist: '플레이리스트',
        myPlaylists: [{
          playlistTitle: '플레이리스트',
          playlists: [],
        }],
        nowPlayingMusicItems: [],
        selectedMusic: null,
      },
    ));
  });

  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  it('renders navigation bar', () => {
    const { container } = renderApp({ path: '' });
    expect(container).toHaveTextContent('Moodplay');
    expect(container).toHaveTextContent('무드선택');
    expect(container).toHaveTextContent('마이플레이');
  });

  context('with path /', () => {
    it('renders the Mood controller page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('오늘은 어떤 날인가요?');
    });
  });

  context('with path /moodplay', () => {
    it('renders the Mood controller page', () => {
      const { container } = renderApp({ path: '/moodplay' });

      expect(container).toHaveTextContent('기분에 어울리는 장르들이에요!');
    });

    it('renders Music player', () => {
      const { container } = renderApp({ path: '/moodplay' });

      expect(container).toHaveTextContent('Playing now');
      expect(container).toHaveTextContent('Next songs');
    });
  });

  context('with path /myplay', () => {
    it('renders the Mood controller page', () => {
      const { container } = renderApp({ path: '/myplay' });

      expect(container).toHaveTextContent('마이 플레이리스트');
    });

    it('renders Music player', () => {
      const { container } = renderApp({ path: '/moodplay' });

      expect(container).toHaveTextContent('Playing now');
      expect(container).toHaveTextContent('Next songs');
    });
  });

  context('with stored myPlaylists', () => {
    const myplaylists = MYPLAYLISTS;

    beforeEach(() => {
      loadItem.mockImplementation(() => myplaylists);
    });

    it('calls dispatch with "setMyPlaylists" action', () => {
      renderApp({ path: '/' });

      expect(dispatch).toBeCalledWith({
        type: 'application/setMyPlaylists',
        payload: myplaylists,
      });
    });
  });

  context('without stored myPlaylists', () => {
    beforeEach(() => {
      loadItem.mockImplementation(() => null);
    });

    it('calls dispatch with "setMyPlaylists" action', () => {
      renderApp({ path: '/' });

      expect(dispatch).not.toBeCalled();
    });
  });
});
