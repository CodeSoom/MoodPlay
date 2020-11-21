import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import MoodControllerContainer from './MoodControllerContainer';

jest.mock('react-redux');

describe('MoodControllerContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      moodselectFields: given.moodselectFields,
      moodCategories: [],
    }));
  });

  given('moodselectFields', () => ({
    energy: '',
    brightness: '',
  }));

  describe('mood select field', () => {
    it('renders mood select fields', () => {
      const { container } = render(<MoodControllerContainer />);

      expect(container).toHaveTextContent('차분하고 싶으세요 아니면 신나고 싶으세요?');
      expect(container).toHaveTextContent('밝은 느낌이 좋으세요? 아니면 어두운 느낌이 좋으세요?');
    });

    context('when select mood energy', () => {
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

  describe('submit button', () => {
    it('renders submit button', () => {
      const { container } = render(<MoodControllerContainer />);
      expect(container).toHaveTextContent('Play your mood!');
    });

    context('with at least one selected mood', () => {
      given('moodselectFields', () => ({
        energy: 'calm',
        brightness: 'none',
      }));

      it('calls dispatch', () => {
        const { getByText } = render(<MoodControllerContainer />);

        fireEvent.click(getByText('Play your mood!'));

        expect(dispatch).toBeCalled();
      });
    });

    context('without any selected mood', () => {
      given('moodselectFields', () => ({
        energy: '',
        brightness: '',
      }));

      it("doesn't call any dispatch", () => {
        const { getByText } = render(<MoodControllerContainer />);

        fireEvent.click(getByText('Play your mood!'));

        expect(dispatch).not.toBeCalled();
      });
    });
  });
});
