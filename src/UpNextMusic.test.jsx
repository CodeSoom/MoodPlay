import React from 'react';

import { render } from '@testing-library/react';

import UpNextMusic from './UpNextMusic';

import MUSICITEMS from '../fixtures/musicItems';

test('UpNextMusic', () => {
  const nowPlayingMusicItems = MUSICITEMS;

  const selectedMusic = MUSICITEMS[3];

  const { container } = render(<UpNextMusic
    selectedMusic={selectedMusic}
    nowPlayingMusicItems={nowPlayingMusicItems}
  />);

  expect(container).toHaveTextContent(MUSICITEMS[4].snippet.title);
  expect(container).toHaveTextContent(MUSICITEMS[0].snippet.title);
  expect(container).toHaveTextContent(MUSICITEMS[1].snippet.title);
});
