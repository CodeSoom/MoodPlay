import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import MyPlayPage from './MyPlayPage';

import MYPLAYLISTS from '../fixtures/myplaylists';

jest.mock('react-redux');

test('MyPlayPage', () => {
  useSelector.mockImplementation((selector) => selector({
    myPlaylists: MYPLAYLISTS,
  }));

  const { container } = render(
    <MemoryRouter>
      <MyPlayPage />
    </MemoryRouter>,
  );

  expect(container).toHaveTextContent('마이 플레이리스트');
});
