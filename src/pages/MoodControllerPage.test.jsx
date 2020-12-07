import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import MoodControllerPage from './MoodControllerPage';

jest.mock('react-redux');

test('MoodControllerPage', () => {
  useSelector.mockImplementation((selector) => selector(
    {
      moodselectFields: {
        energy: '',
        brightness: '',
      },
      moodCategories: [],
    },
  ));

  const { container } = render(
    <MemoryRouter>
      <MoodControllerPage />
    </MemoryRouter>,
  );

  expect(container).toHaveTextContent('오늘은 어떤 날인가요?');
  expect(container).toHaveTextContent('차분하고 싶으세요 아니면 신나고 싶으세요?');
  expect(container).toHaveTextContent('밝은 느낌이 좋으세요? 아니면 어두운 느낌이 좋으세요?');
});
