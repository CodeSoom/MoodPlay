import React from 'react';

import { render } from '@testing-library/react';

import MusicCategories from './MusicCategories';

describe('MusicCategories', () => {
  context('with second tag', () => {
    it('renders categories with second tag title', () => {
      const moodCategories = [
        ['뉴에이지', 'calm', 'happy'],
        ['어쿠스틱', 'calm', 'happy'],
      ];

      const { container } = render(<MusicCategories moodCategories={moodCategories} />);

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

      const { container } = render(<MusicCategories moodCategories={moodCategories} />);

      expect(container).toHaveTextContent('뉴에이지');
      expect(container).toHaveTextContent('어쿠스틱');
      expect(container).toHaveTextContent('#차분한');
      expect(container).not.toHaveTextContent('#밝은');
    });
  });
});
