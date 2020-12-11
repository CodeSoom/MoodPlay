import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import MusicPlayerPage from './MusicPlayerPage';

test('MusicPlayerPage', () => {
  useSelector.mockImplementation((selector) => selector({
    myPlaylists: [],
    selectedMusic: null,
    nowPlayingMusicItems: [],
  }));

  const { container } = render(
    <MemoryRouter>
      <MusicPlayerPage />
    </MemoryRouter>,
  );

  expect(container).toHaveTextContent('Playing now');
  expect(container).toHaveTextContent('Next songs');
});
