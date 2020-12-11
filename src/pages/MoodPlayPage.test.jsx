import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import MoodPlayPage from './MoodPlayPage';

test('MoodPlayPage', () => {
  useSelector.mockImplementation((selector) => selector({
    moodCategories: [
      ['뉴에이지', 'calm', 'happy'],
      ['어쿠스틱', 'calm', 'happy'],
    ],
    myPlaylists: [],
  }));

  const { container } = render(
    <MemoryRouter>
      <MoodPlayPage />
    </MemoryRouter>,
  );

  expect(container).toHaveTextContent('기분에 어울리는 장르들이에요!');
});
