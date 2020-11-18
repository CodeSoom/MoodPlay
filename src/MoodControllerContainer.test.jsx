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
      todayMood: given.todayMood,
    }));
  });

  given('todayMood', () => []);

  it('renders mood submit button', () => {
    const { getByText } = render(<MoodControllerContainer />);

    fireEvent.click(getByText('Play your mood'));

    expect(dispatch).toBeCalled();
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

  context('with clientLocation', () => {
    given('todayMood', () => [['차분한', 40], ['밝은', 20]]);

    it("renders today's mood message", () => {
      const { container } = render(<MoodControllerContainer />);

      expect(container).toHaveTextContent('오늘의 기분은 차분한40% 밝은20% 입니다!');
    });
  });

  context('without clientLocation', () => {
    given('todayMood', () => []);

    it("renders no today's mood message", () => {
      const { container } = render(<MoodControllerContainer />);

      expect(container).not.toHaveTextContent('오늘의 기분은 차분한40% 밝은20% 입니다!');
    });
  });
});
