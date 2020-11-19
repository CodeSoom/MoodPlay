import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import MoodController from './MoodController';

describe('MoodController', () => {
  const handleClick = jest.fn();

  function renderMoodController(moodPointLocation) {
    return render(
      <MoodController
        onClick={handleClick}
        moodPointLocation={moodPointLocation}
      />,
    );
  }

  it('renders Mood controller', () => {
    const { getByText } = renderMoodController();

    expect(getByText('controller')).not.toBeNull();
  });

  it('listens click event', () => {
    const { getByText } = renderMoodController();

    fireEvent.click(getByText('controller'));

    expect(handleClick).toBeCalled();
  });

  context('with moodPointLocation', () => {
    const moodPointLocation = { x: 1, y: 2 };

    it('renders mood point', () => {
      const { getByTestId } = renderMoodController(moodPointLocation);

      expect(getByTestId('mood-point')).not.toBeNull();
    });
  });

  context('without moodPointLocation', () => {
    const moodPointLocation = null;

    it('renders no mood point', () => {
      const { queryByTestId } = renderMoodController(moodPointLocation);

      expect(queryByTestId('mood-point')).toBeNull();
    });
  });
});
