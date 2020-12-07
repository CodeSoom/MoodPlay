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

  expect(container).toHaveTextContent('무드 선택');
  expect(container).toHaveTextContent('홈');
  expect(container).toHaveTextContent('마이 플레이');
});
