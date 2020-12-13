import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import PlaylistTitles from './PlaylistTitles';

import { PLAYLIST_CARD_WIDTH } from '../styles/constants';

describe('PlaylistTitles', () => {
  const handleClick = jest.fn();

  const myPlaylists = [{
    playlistTitle: '플레이리스트 1',
    playlists: [],
  },
  {
    playlistTitle: '플레이리스트 2',
    playlists: [],
  },
  {
    playlistTitle: '플레이리스트 3',
    playlists: [],
  }];

  function renderPlaylistTitles(selectedPlaylist) {
    return render(
      <PlaylistTitles
        myPlaylists={myPlaylists}
        selectedPlaylist={selectedPlaylist}
        onClick={handleClick}
      />,
    );
  }

  it('renders playlist titles', () => {
    const { container } = renderPlaylistTitles();

    myPlaylists.forEach(({ playlistTitle }) => {
      expect(container).toHaveTextContent(playlistTitle);
    });
  });

  it('renders selected playlist title with different styles', () => {
    const selectedPlaylistTitle = myPlaylists[1].playlistTitle;

    const { getByTestId } = renderPlaylistTitles(selectedPlaylistTitle);

    expect(getByTestId(myPlaylists[1].playlistTitle)).toHaveStyle({
      width: '285px',
      border: '3px solid #F89428',
    });

    expect(getByTestId(myPlaylists[0].playlistTitle)).toHaveStyle({
      width: `${PLAYLIST_CARD_WIDTH}px`,
      border: 'none',
    });

    expect(getByTestId(myPlaylists[2].playlistTitle)).toHaveStyle({
      width: `${PLAYLIST_CARD_WIDTH}px`,
      border: 'none',
    });
  });

  it('listens click event', () => {
    const { getByText } = renderPlaylistTitles();

    myPlaylists.forEach(({ playlistTitle }) => {
      fireEvent.click(getByText(playlistTitle));
    });

    expect(handleClick).toBeCalledTimes(3);
  });

  it('moves selected playlist title to first', () => {
    const { getByText, getByTestId } = renderPlaylistTitles();

    expect(getByTestId('cards')).toHaveStyle({
      transform: 'translateX(-0px)',
    });

    myPlaylists.forEach(({ playlistTitle }, index) => {
      fireEvent.click(getByText(playlistTitle));

      expect(getByTestId('cards')).toHaveStyle({
        transform: `translateX(-${(PLAYLIST_CARD_WIDTH + 4) * index}px)`,
      });
    });
  });

  it('renders silder control buttons', () => {
    const { container } = renderPlaylistTitles();

    expect(container).toHaveTextContent('Next');
    expect(container).toHaveTextContent('Previous');
  });

  it('playlist titles move as much as card width', () => {
    const { getByText, getByTestId } = render(
      <PlaylistTitles
        myPlaylists={
          [{
            playlistTitle: '플레이리스트 1',
            playlists: [],
          },
          {
            playlistTitle: '플레이리스트 2',
            playlists: [],
          },
          {
            playlistTitle: '플레이리스트 3',
            playlists: [],
          },
          {
            playlistTitle: '플레이리스트 4',
            playlists: [],
          },
          {
            playlistTitle: '플레이리스트 5',
            playlists: [],
          },
          ]
        }
        onClick={handleClick}
      />,
    );

    fireEvent.click(getByText('Next'));

    expect(getByTestId('cards')).toHaveStyle({
      transform: `translateX(-${PLAYLIST_CARD_WIDTH}px)`,
    });

    fireEvent.click(getByText('Previous'));
    expect(getByTestId('cards')).toHaveStyle({
      transform: 'translateX(-0px)',
    });
  });

  context('when playlist titles are at the end', () => {
    it("playlist titles don't move when click the next button", () => {
      const { getByText, getByTestId } = renderPlaylistTitles();

      fireEvent.click(getByText('Next'));

      expect(getByTestId('cards')).toHaveStyle({
        transform: `translateX(-${PLAYLIST_CARD_WIDTH}px)`,
      });

      fireEvent.click(getByText('Next'));

      expect(getByTestId('cards')).toHaveStyle({
        transform: `translateX(-${PLAYLIST_CARD_WIDTH}px)`,
      });
    });
  });

  context('when playlist titles are at the first', () => {
    it("playlist titles don't move when click the previous button", () => {
      const { getByText, getByTestId } = renderPlaylistTitles();

      expect(getByTestId('cards')).toHaveStyle({
        transform: 'translateX(-0px)',
      });

      fireEvent.click(getByText('Previous'));

      expect(getByTestId('cards')).toHaveStyle({
        transform: 'translateX(-0px)',
      });
    });
  });
});
