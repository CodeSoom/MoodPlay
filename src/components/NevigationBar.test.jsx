import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import NavigationBar from './NavigationBar';

test('NavigationBar', () => {
  const { container } = render(
    <MemoryRouter>
      <NavigationBar />
    </MemoryRouter>,
  );

  expect(container).toHaveTextContent('무드선택');
  expect(container).toHaveTextContent('홈');
  expect(container).toHaveTextContent('마이플레이');
});
