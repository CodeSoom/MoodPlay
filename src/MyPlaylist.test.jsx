import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import MyPlaylist from './MyPlaylist';

import MUSICITEMS from '../fixtures/musicItems';

describe('MyPlaylist', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  function renderMyPlaylist(playlistTitle, playlists) {
    return render(
      <MyPlaylist
        playlistTitle={playlistTitle}
        playlists={playlists}
        onClick={handleClick}
      />,
    );
  }

  it('renders my playlist', () => {
    const playlistTitle = '집중할 때 들을 음악';
    const playlists = MUSICITEMS;

    const { container, getByAltText } = renderMyPlaylist(playlistTitle, playlists);

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

  it('listens onClick event', () => {
    const playlistTitle = '집중할 때 들을 음악';
    const playlists = MUSICITEMS;

    const { getByText } = renderMyPlaylist(playlistTitle, playlists);

    playlists.forEach(({ snippet: { title } }) => {
      fireEvent.click(getByText(title));
    });

    expect(handleClick).toBeCalledTimes(playlists.length);
  });
});
