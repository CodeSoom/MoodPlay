import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import MoodControllerContainer from './MoodControllerContainer';

jest.mock('react-redux');

describe('MoodControllerContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders mood energy select fields', () => {
    const { container } = render(<MoodControllerContainer />);

    expect(container).toHaveTextContent('차분하고 싶으세요 아니면 신나고 싶으세요?');
  });

  it('renders mood brightness select fields', () => {
    const { container } = render(<MoodControllerContainer />);

    expect(container).toHaveTextContent('밝은 느낌이 좋으세요? 아니면 어두운 느낌이 좋으세요?');
  });

  context('when select mood', () => {
    it('calls dispatch', () => {
      const { getByLabelText } = render(<MoodControllerContainer />);

      fireEvent.click(getByLabelText('차분한'));

      expect(dispatch).toBeCalledWith({
        type: 'application/setMoodselectFields',
        payload: {
          name: 'energy',
          value: 'calm',
        },
      });

      fireEvent.click(getByLabelText('밝은'));

      expect(dispatch).toBeCalledWith({
        type: 'application/setMoodselectFields',
        payload: {
          name: 'brightness',
          value: 'happy',
        },
      });
    });
  });
});
