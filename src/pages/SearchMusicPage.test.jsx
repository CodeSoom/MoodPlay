import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import SearchMusicPage from './SearchMusicPage';

jest.mock('react-redux');

test('SearchMusicPage', () => {
  useSelector.mockImplementation((selector) => selector({
    searchTextInput: '아이유',
    searchMusic: [],
  }));

  const { container } = render(
    <MemoryRouter>
      <SearchMusicPage />
    </MemoryRouter>,
  );

  expect(container).toHaveTextContent('원하는 플레이리스트가 없다면 더 찾아볼까요?');
});
