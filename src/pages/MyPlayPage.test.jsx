import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import MyPlayPage from './MyPlayPage';

jest.mock('react-redux');

test('MyPlayPage', () => {
  useSelector.mockImplementation((selector) => selector({
    selectedPlaylist: '플레이리스트',
    myPlaylists: [{
      playlistTitle: '플레이리스트',
      playlists: [],
    }],
  }));

  const { container } = render(
    <MemoryRouter>
      <MyPlayPage />
    </MemoryRouter>,
  );

  expect(container).toHaveTextContent('마이 플레이리스트');
});
