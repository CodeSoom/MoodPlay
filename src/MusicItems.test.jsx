import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import MusicItems from './MusicItems';

import MUSICITEMS from '../fixtures/musicItems';

describe('MusicItems', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  const music = MUSICITEMS;

  function renderMusicItems() {
    return render(
      <MusicItems
        music={music}
        onClick={handleClick}
      />,
    );
  }

  it('renders music items', () => {
    const { container, getByAltText } = renderMusicItems();

    music.forEach(({
      snippet: {
        title, channelTitle, description, thumbnails,
      },
    }) => {
      expect(container).toHaveTextContent(title);
      expect(container).toHaveTextContent(channelTitle);
      expect(getByAltText(description)).toHaveAttribute('src', thumbnails.default.url);
    });
  });

  it('listens onClick event', () => {
    const { getByText, getByAltText } = renderMusicItems();

    music.forEach((selectedMusic) => {
      const { snippet: { title, channelTitle, description } } = selectedMusic;

      fireEvent.click(getByText(title));
      fireEvent.click(getByText(channelTitle));
      fireEvent.click(getByAltText(description));

      expect(handleClick).toBeCalledWith(selectedMusic, music);
    });
  });
});
