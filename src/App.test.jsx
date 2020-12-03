import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector(
    {
      moodselectFields: {
        energy: '',
        brightness: '',
      },
      moodCategories: [],
    },
  ));

  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  it('renders navigation bar', () => {
    const { container } = renderApp({ path: '/project-react-2-bbhye1' });
    expect(container).toHaveTextContent('무드 선택');
    expect(container).toHaveTextContent('홈');
  });

  context('with path /project-react-2-bbhye1', () => {
    it('renders the Mood controller page', () => {
      const { container } = renderApp({ path: '/project-react-2-bbhye1' });

      expect(container).toHaveTextContent('오늘은 어떤 날인가요?');
    });
  });

  context('with path /project-react-2-bbhye1//moodplay', () => {
    it('renders the Mood controller page', () => {
      const { container } = renderApp({ path: '/project-react-2-bbhye1/moodplay' });

      expect(container).toHaveTextContent('기분에 어울리는 장르들이에요!');
    });
  });
});
