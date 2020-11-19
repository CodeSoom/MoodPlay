import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import MoodController from './MoodController';

describe('MoodController', () => {
  const handleClick = jest.fn();

  function renderMoodController(clientLocation) {
    return render(
      <MoodController
        onClick={handleClick}
        clientLocation={clientLocation}
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

  context('with clientLocation', () => {
    const clientLocation = { x: 1, y: 2 };

    it('renders mood point', () => {
      const { getByTestId } = renderMoodController(clientLocation);

      expect(getByTestId('mood-point')).not.toBeNull();
    });
  });

  context('without clientLocation', () => {
    const clientLocation = null;

    it('renders no mood point', () => {
      const { queryByTestId } = renderMoodController(clientLocation);

      expect(queryByTestId('mood-point')).toBeNull();
    });
  });
});
