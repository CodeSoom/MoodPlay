import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import MusicCategoriesContainer from './MusicCategoriesContainer';

jest.mock('react-redux');

describe('MusicCategoriesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      moodCategories: [
        ['뉴에이지', 'calm', 'happy'],
        ['어쿠스틱', 'calm', 'happy'],
      ],
    }));
  });

  it('renders MusicCategoriesContainer', () => {
    const { container } = render(<MusicCategoriesContainer />);

    expect(container).toHaveTextContent('기분에 어울리는 장르들이에요!');

    expect(container).toHaveTextContent('뉴에이지');
    expect(container).toHaveTextContent('어쿠스틱');
    expect(container).toHaveTextContent('#차분한');
    expect(container).toHaveTextContent('#밝은');
  });
});
