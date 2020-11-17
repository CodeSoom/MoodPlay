import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import MoodControllerContainer from './MoodControllerContainer';

jest.mock('react-redux');

describe('MoodControllerContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      clientLocation: given.clientLocation,
    }));
  });

  it('renders mood submit button', () => {
    const { container } = render(<MoodControllerContainer />);

    expect(container).toHaveTextContent('Play your mood');
  });

  it('renders mood controller', () => {
    const { getByTestId } = render(<MoodControllerContainer />);

    fireEvent.click(getByTestId('controller'));

    expect(dispatch).toBeCalledWith({
      payload: {
        x: 0,
        y: 0,
      },
      type: 'application/setClientLocation',
    });
  });

  context('with clientLocation', () => {
    given('clientLocation', () => ({ x: 1, y: 1 }));

    it('renders mood controller pointer', () => {
      const { getByTestId } = render(<MoodControllerContainer />);

      expect(getByTestId('pointer')).not.toBeNull();
    });
  });

  context('without clientLocation', () => {
    given('clientLocation', () => null);

    it('renders no mood controller pointer', () => {
      const { queryByTestId } = render(<MoodControllerContainer />);

      expect(queryByTestId('pointer')).toBeNull();
    });
  });
});
