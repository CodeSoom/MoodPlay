import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import MusicCategories from './MusicCategories';

import { CARD_WIDTH } from '../styles/constants';

describe('MusicCategories', () => {
  const handleClick = jest.fn();

  function renderMusicCategories(moodCategories, selectedCategory) {
    return render(
      <MusicCategories
        moodCategories={moodCategories}
        selectedCategory={selectedCategory}
        onClick={handleClick}
      />,
    );
  }

  context('with second tag', () => {
    it('renders categories with second tag title', () => {
      const moodCategories = [
        ['뉴에이지', 'calm', 'happy'],
        ['어쿠스틱', 'calm', 'happy'],
      ];

      const { container } = renderMusicCategories(moodCategories);

      expect(container).toHaveTextContent('뉴에이지');
      expect(container).toHaveTextContent('어쿠스틱');
      expect(container).toHaveTextContent('#차분한');
      expect(container).toHaveTextContent('#밝은');
    });
  });

  context('without second tag', () => {
    it('renders categories without second tag title', () => {
      const moodCategories = [
        ['뉴에이지', 'calm'],
        ['어쿠스틱', 'calm'],
      ];

      const { container } = renderMusicCategories(moodCategories);

      expect(container).toHaveTextContent('뉴에이지');
      expect(container).toHaveTextContent('어쿠스틱');
      expect(container).toHaveTextContent('#차분한');
      expect(container).not.toHaveTextContent('#밝은');
    });
  });

  context('with selected category', () => {
    it('renders selected category with border', () => {
      const moodCategories = [
        ['뉴에이지', 'calm'],
        ['어쿠스틱', 'calm'],
      ];

      const selectedCategory = '뉴에이지';

      const { getByTestId } = renderMusicCategories(moodCategories, selectedCategory);

      expect(getByTestId(selectedCategory)).toHaveStyle({
        border: '3px solid #F89428',
      });
    });
  });

  context('without selected category', () => {
    it('renders selected category without border', () => {
      const moodCategories = [
        ['뉴에이지', 'calm'],
        ['어쿠스틱', 'calm'],
      ];

      const selectedCategory = '';

      const { getByTestId } = renderMusicCategories(moodCategories, selectedCategory);

      expect(getByTestId('뉴에이지')).not.toHaveStyle({
        border: '3px solid #F89428',
      });

      expect(getByTestId('어쿠스틱')).not.toHaveStyle({
        border: '3px solid #F89428',
      });
    });
  });

  context('when select category', () => {
    it('listens click event', () => {
      const moodCategories = [
        ['뉴에이지', 'calm'],
        ['어쿠스틱', 'calm'],
      ];

      const { getByText } = renderMusicCategories(moodCategories);

      fireEvent.click(getByText('뉴에이지'));
      fireEvent.click(getByText('어쿠스틱'));

      expect(handleClick).toBeCalledTimes(2);
    });

    it('moves selected category to first', () => {
      const moodCategories = [
        ['카테고리1', 'calm'],
        ['카테고리2', 'calm'],
        ['카테고리3', 'calm'],
        ['카테고리4', 'calm'],
      ];

      const selectedCategoryIndex = 2;

      const { getByText, getByTestId } = renderMusicCategories(moodCategories);

      expect(getByTestId('cards')).toHaveStyle({
        transform: 'translateX(-0px)',
      });

      fireEvent.click(getByText(moodCategories[selectedCategoryIndex][0]));
      expect(getByTestId('cards')).toHaveStyle({
        transform: `translateX(-${CARD_WIDTH * selectedCategoryIndex}px)`,
      });
    });
  });

  describe('SliderControl', () => {
    const moodCategories = [
      ['카테고리1', 'calm'],
      ['카테고리2', 'calm'],
      ['카테고리3', 'calm'],
      ['카테고리4', 'calm'],
      ['카테고리5', 'calm'],
      ['카테고리6', 'calm'],
      ['카테고리7', 'calm'],
      ['카테고리8', 'calm'],
    ];

    it('caregories move twice as category width', () => {
      const { getByText, getByTestId } = renderMusicCategories(moodCategories);

      fireEvent.click(getByText('Next'));

      expect(getByTestId('cards')).toHaveStyle({
        transform: `translateX(-${CARD_WIDTH * 2}px)`,
      });

      fireEvent.click(getByText('Previous'));

      expect(getByTestId('cards')).toHaveStyle({
        transform: 'translateX(-0px)',
      });
    });

    context('when categories are at the end', () => {
      it("categories don't move when click the next button", () => {
        const { getByText, getByTestId } = renderMusicCategories(moodCategories);

        fireEvent.click(getByText('Next'));

        expect(getByTestId('cards')).toHaveStyle({
          transform: `translateX(-${CARD_WIDTH * 2}px)`,
        });

        fireEvent.click(getByText('Next'));

        expect(getByTestId('cards')).toHaveStyle({
          transform: `translateX(-${CARD_WIDTH * 2}px)`,
        });
      });
    });

    context('when categories are at the first', () => {
      it("categories don't move when click the previous button", () => {
        const { getByText, getByTestId } = renderMusicCategories(moodCategories);

        fireEvent.click(getByText('Previous'));

        expect(getByTestId('cards')).toHaveStyle({
          transform: 'translateX(-0px)',
        });
      });
    });
  });
});
