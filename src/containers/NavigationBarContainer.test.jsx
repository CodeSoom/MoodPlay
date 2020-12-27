import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import NavigationBarContainer from './NavigationBarContainer';

jest.mock('react-redux');

describe('NavigationBarContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    moodCategories: [],
  }));

  it('renders navigation menus', () => {
    const { container } = render((
      <MemoryRouter>
        <NavigationBarContainer />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('Moodplay');
    expect(container).toHaveTextContent('무드선택');
    expect(container).toHaveTextContent('마이플레이');
    expect(container).toHaveTextContent('검색');
  });
});
