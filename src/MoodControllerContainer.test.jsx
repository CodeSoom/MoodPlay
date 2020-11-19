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
      moodPointLocation: given.moodPointLocation,
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
    const { getByText } = render(<MoodControllerContainer />);

    fireEvent.click(getByText('controller'));

    expect(dispatch).toBeCalledWith({
      payload: {
        x: 0,
        y: 0,
      },
      type: 'application/setMoodPointLocation',
    });
  });

  context('with moodPointLocation', () => {
    given('moodPointLocation', () => ({ x: 1, y: 1 }));

    it('renders mood controller mood point', () => {
      const { getByTestId } = render(<MoodControllerContainer />);

      expect(getByTestId('mood-point')).not.toBeNull();
    });
  });

  context('without moodPointLocation', () => {
    given('moodPointLocation', () => null);

    it('renders no mood controller mood point', () => {
      const { queryByTestId } = render(<MoodControllerContainer />);

      expect(queryByTestId('mood-point')).toBeNull();
    });
  });

  context('with todayMood', () => {
    given('todayMood', () => [['차분한', 40], ['밝은', 20]]);

    it("renders today's mood message", () => {
      const { container } = render(<MoodControllerContainer />);

      expect(container).toHaveTextContent('오늘의 기분은 차분한40% 밝은20% 입니다!');
    });
  });

  context('without todayMood', () => {
    given('todayMood', () => []);

    it("renders no today's mood message", () => {
      const { container } = render(<MoodControllerContainer />);

      expect(container).not.toHaveTextContent('오늘의 기분은 차분한40% 밝은20% 입니다!');
    });
  });
});
