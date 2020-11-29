import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import UpNextMusic from './UpNextMusic';

import MUSICITEMS from '../fixtures/musicItems';

describe('UpNextMusic', () => {
  const handleClick = jest.fn();

  const nowPlayingMusicItems = MUSICITEMS;
  const selectedMusic = MUSICITEMS[3];

  function renderUpNextMusic() {
    return render(
      <UpNextMusic
        selectedMusic={selectedMusic}
        nowPlayingMusicItems={nowPlayingMusicItems}
        onClick={handleClick}
      />,
    );
  }

  it('renders up next music items', () => {
    const { container } = renderUpNextMusic();

    expect(container).toHaveTextContent(MUSICITEMS[4].snippet.title);
    expect(container).toHaveTextContent(MUSICITEMS[0].snippet.title);
    expect(container).toHaveTextContent(MUSICITEMS[1].snippet.title);
  });

  it('listens click event', () => {
    const { getByText } = renderUpNextMusic();

    fireEvent.click(getByText(MUSICITEMS[4].snippet.title));
    fireEvent.click(getByText(MUSICITEMS[0].snippet.title));
    fireEvent.click(getByText(MUSICITEMS[1].snippet.title));

    expect(handleClick).toBeCalledTimes(3);
  });
});
