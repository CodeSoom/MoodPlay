import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import MyPlaylistsContainer from './MyPlaylistsContainer';

import MUSICITEMS from '../../fixtures/musicItems';

jest.mock('react-redux');

describe('MyPlaylistsContainer', () => {
  const dispatch = jest.fn();

  const myPlaylists = [{
    playlistTitle: '플레이리스트 1',
    playlists: [],
  },
  {
    playlistTitle: '플레이리스트 2',
    playlists: MUSICITEMS,
  },
  {
    playlistTitle: '플레이리스트 3',
    playlists: [],
  }];
  const selectedPlaylist = '플레이리스트 2';

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      myPlaylists,
      selectedPlaylist,
    }));
  });

  it('renders title', () => {
    const { container } = render(<MyPlaylistsContainer />);

    expect(container).toHaveTextContent('마이 플레이리스트');
  });

  it('renders playlist titles', () => {
    const { container } = render(<MyPlaylistsContainer />);

    myPlaylists.forEach(({ playlistTitle }) => {
      expect(container).toHaveTextContent(playlistTitle);
    });
  });

  it('renders selected playlist musics', () => {
    const { container } = render(<MyPlaylistsContainer />);

    MUSICITEMS.forEach(({
      snippet: { title, channelTitle },
    }) => {
      expect(container).toHaveTextContent(title);
      expect(container).toHaveTextContent(channelTitle);
    });
  });

  it('calls dispatch', () => {
    const { getByText, getAllByText } = render(<MyPlaylistsContainer />);

    MUSICITEMS.forEach(({
      snippet: { title },
    }) => {
      fireEvent.click(getByText(title));
    });

    expect(dispatch).toBeCalledTimes(MUSICITEMS.length * 2);

    myPlaylists.forEach(({ playlistTitle }) => {
      const clickablePlaylistTitle = getAllByText(playlistTitle)[0];

      fireEvent.click(clickablePlaylistTitle);

      expect(dispatch).toBeCalledWith({
        payload: playlistTitle,
        type: 'application/setSelectedPlaylist',
      });
    });
  });
});
