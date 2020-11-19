import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector(
    {
      moodPointLocation: null,
      todayMood: [],
    },
  ));

  const { container } = render(<App />);

  expect(container).toHaveTextContent('오늘은 어떤 날인가요?');
});
