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
    const { getByTestId } = renderMoodController();

    expect(getByTestId('controller')).not.toBeNull();
  });

  it('listens click event', () => {
    const { getByTestId } = renderMoodController();

    fireEvent.click(getByTestId('controller'));

    expect(handleClick).toBeCalled();
  });

  context('with clientLocation', () => {
    const clientLocation = { x: 1, y: 2 };

    it('renders pointer', () => {
      const { getByTestId } = renderMoodController(clientLocation);

      expect(getByTestId('pointer')).not.toBeNull();
    });
  });

  context('without clientLocation', () => {
    const clientLocation = null;

    it('renders no pointer', () => {
      const { queryByTestId } = renderMoodController(clientLocation);

      expect(queryByTestId('pointer')).toBeNull();
    });
  });
});
