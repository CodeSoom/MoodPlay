import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import MoodControllerPage from './MoodControllerPage';

jest.mock('react-redux');

describe('MoodControllerPage', () => {
  useSelector.mockImplementation((selector) => selector(
    {
      moodselectFields: {},
    },
  ));

  function renderMoodControllerPage() {
    return render(<MoodControllerPage />);
  }

  it('render title', () => {
    const { container } = renderMoodControllerPage();

    expect(container).toHaveTextContent('오늘은 어떤 날인가요?');
  });
});
