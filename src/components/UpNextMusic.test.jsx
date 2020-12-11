import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import UpNextMusic from './UpNextMusic';

import MUSICITEMS from '../../fixtures/musicItems';

describe('UpNextMusic', () => {
  const handleClick = jest.fn();

  function renderUpNextMusic(selectedMusic) {
    return render(
      <UpNextMusic
        selectedMusic={selectedMusic}
        nowPlayingMusicItems={MUSICITEMS}
        onClick={handleClick}
      />,
    );
  }

  context('with selectedMusic', () => {
    const selectedMusic = MUSICITEMS[3];

    it('renders up next music items', () => {
      const { container } = renderUpNextMusic(selectedMusic);

      expect(container).toHaveTextContent('Next songs');

      expect(container).toHaveTextContent(MUSICITEMS[4].snippet.title);
      expect(container).toHaveTextContent(MUSICITEMS[0].snippet.title);
      expect(container).toHaveTextContent(MUSICITEMS[1].snippet.title);
    });

    it('listens click event', () => {
      const { getByText } = renderUpNextMusic(selectedMusic);

      fireEvent.click(getByText(MUSICITEMS[4].snippet.title));
      fireEvent.click(getByText(MUSICITEMS[0].snippet.title));
      fireEvent.click(getByText(MUSICITEMS[1].snippet.title));

      expect(handleClick).toBeCalledTimes(3);
    });
  });

  context('without selectedMusic', () => {
    const selectedMusic = null;

    it('renders no up next music items', () => {
      const { container } = renderUpNextMusic(selectedMusic);

      expect(container).toHaveTextContent('Next songs');

      expect(container).not.toHaveTextContent(MUSICITEMS[4].snippet.title);
      expect(container).not.toHaveTextContent(MUSICITEMS[0].snippet.title);
      expect(container).not.toHaveTextContent(MUSICITEMS[1].snippet.title);
    });
  });
});
