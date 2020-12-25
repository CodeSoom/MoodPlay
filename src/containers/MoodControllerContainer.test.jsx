import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

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

  function renderMoodControllerContainer() {
    return render(
      <MemoryRouter>
        <MoodControllerContainer />
      </MemoryRouter>,
    );
  }

  describe('mood select field', () => {
    it('renders mood select fields', () => {
      const { container } = renderMoodControllerContainer();

      expect(container).toHaveTextContent('차분하고 싶으세요 아니면 신나고 싶으세요?');
      expect(container).toHaveTextContent('밝은 느낌이 좋으세요? 아니면 어두운 느낌이 좋으세요?');
    });

    context('when select mood', () => {
      it('calls dispatch', () => {
        const { getByLabelText } = renderMoodControllerContainer();

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
      const { container } = renderMoodControllerContainer();
      expect(container).toHaveTextContent('MOOD PLAY!');
    });

    it('calls dispatch', () => {
      const { getByText } = renderMoodControllerContainer();

      fireEvent.click(getByText('MOOD PLAY!'));

      expect(dispatch).toBeCalled();
    });
  });
});
