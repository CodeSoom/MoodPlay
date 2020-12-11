import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import NavigationBar from './NavigationBar';

describe('NavigationBar', () => {
  const path = '/';

  function renderNavigationBar(moodCategories) {
    return render((
      <MemoryRouter>
        <NavigationBar
          moodCategories={moodCategories}
          path={path}
        />
      </MemoryRouter>
    ));
  }

  context('with moodCategories', () => {
    const moodCategories = [{}];

    it('renders all menus', () => {
      const { container } = renderNavigationBar(moodCategories);

      expect(container).toHaveTextContent('무드선택');
      expect(container).toHaveTextContent('홈');
      expect(container).toHaveTextContent('마이플레이');
    });
  });

  context('with empty moodCategories', () => {
    const moodCategories = [];

    it('renders menus without home', () => {
      const { container } = renderNavigationBar(moodCategories);

      expect(container).toHaveTextContent('무드선택');
      expect(container).not.toHaveTextContent('홈');
      expect(container).toHaveTextContent('마이플레이');
    });
  });
});
