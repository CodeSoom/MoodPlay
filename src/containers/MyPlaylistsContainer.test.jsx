import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import MyPlaylistsContainer from './MyPlaylistsContainer';

import MUSICITEMS from '../../fixtures/musicItems';

jest.mock('react-redux');

describe('MyPlaylistsContainer', () => {
  const dispatch = jest.fn();

  const playlistTitle = '공부할 때 들을 음악';
  const playlists = MUSICITEMS;

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      myPlaylists: [{
        playlistTitle,
        playlists,
      }],
    }));
  });

  it('renders my playlists', () => {
    const { container, getByAltText } = render(<MyPlaylistsContainer />);

    expect(container).toHaveTextContent('마이 플레이리스트');

    expect(container).toHaveTextContent(playlistTitle);

    playlists.forEach(({
      snippet: {
        title, channelTitle, description, thumbnails,
      },
    }) => {
      expect(container).toHaveTextContent(title);
      expect(container).toHaveTextContent(channelTitle);
      expect(getByAltText(description)).toHaveAttribute('src', thumbnails.default.url);
    });
  });

  it('calls dispatch twice', () => {
    const { getByText } = render(<MyPlaylistsContainer />);

    playlists.forEach(({ snippet: { title } }) => {
      fireEvent.click(getByText(title));
    });

    expect(dispatch).toBeCalledTimes(playlists.length * 2);
  });
});
