import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import MoodControllerPage from './MoodControllerPage';

jest.mock('react-redux');

describe('MoodControllerPage', () => {
  useSelector.mockImplementation((selector) => selector(
    {
      clientLocation: null,
      todayMood: [],
    },
  ));

  function renderMoodControllerPage() {
    return render(<MoodControllerPage />);
  }

  it('render title', () => {
    const { container } = renderMoodControllerPage();

    expect(container).toHaveTextContent('오늘은 어떤 날인가요?');
  });

  it('render mood controller', () => {
    const { getByText, getByTestId } = renderMoodControllerPage();

    expect(getByText('Play your mood')).not.toBeNull();
    expect(getByTestId('controller')).not.toBeNull();
  });
});
