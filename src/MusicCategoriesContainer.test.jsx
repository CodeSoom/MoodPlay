import React from 'react';

import { fireEvent, render } from '@testing-library/react';

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
        ['어쿠스틱', 'calm'],
      ],
    }));
  });

  it('renders music categories', () => {
    const { container } = render(<MusicCategoriesContainer />);

    expect(container).toHaveTextContent('기분에 어울리는 장르들이에요!');

    expect(container).toHaveTextContent('뉴에이지');
    expect(container).toHaveTextContent('어쿠스틱');
    expect(container).toHaveTextContent('#차분한');
    expect(container).toHaveTextContent('#밝은');
  });

  context('when click category with one tag', () => {
    it('calls dispatch twice', () => {
      const { getByText } = render(<MusicCategoriesContainer />);

      fireEvent.click(getByText('어쿠스틱'));

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('when click category with two tags', () => {
    it('calls dispatch three times', () => {
      const { getByText } = render(<MusicCategoriesContainer />);

      fireEvent.click(getByText('뉴에이지'));

      expect(dispatch).toBeCalledTimes(3);
    });
  });

  context('with selected category music', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        moodCategories: [],
        selectedCategory: '로파이',
        로파이: [{
          snippet: {
            channelTitle: 'channelTitle1',
            description: 'description1',
            title: 'title1',
            thumbnails: {},
          },
        }],
      }));
    });

    it('renders selected category music', () => {
      const { container } = render(<MusicCategoriesContainer />);

      expect(container).toHaveTextContent('title1');
      expect(container).toHaveTextContent('channelTitle1');
    });
  });

  context('without selected category music', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        moodCategories: [],
      }));
    });

    it('renders empty message', () => {
      const { container } = render(<MusicCategoriesContainer />);

      expect(container).toHaveTextContent('카테고리를 선택해주세요');
    });
  });
});
