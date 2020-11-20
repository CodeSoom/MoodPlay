import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const { container } = render(<App />);

  expect(container).toHaveTextContent('오늘은 어떤 날인가요?');
});
