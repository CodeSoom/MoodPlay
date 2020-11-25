import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import MusicCategories from './MusicCategories';

describe('MusicCategories', () => {
  const handleClick = jest.fn();

  function renderMusicCategories(moodCategories) {
    return render(
      <MusicCategories
        moodCategories={moodCategories}
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
});
