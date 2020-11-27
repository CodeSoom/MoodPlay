import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import MusicItems from './MusicItems';

describe('MusicItems', () => {
  const handleClick = jest.fn();

  const music = [
    {
      id: {
        videoId: 'xxx',
      },
      snippet: {
        channelTitle: 'essential1',
        description: 'description1',
        title: 'title1',
        thumbnails: {
          default: {
            height: 90,
            url: 'https://aaa.com/default.jpg',
            width: 120,
          },
        },
      },
    },
    {
      id: {
        videoId: 'xxx',
      },
      snippet: {
        channelTitle: 'essential2',
        description: 'description2',
        title: 'title2',
        thumbnails: {
          default: {
            height: 90,
            url: 'https://bbb.com/default.jpg',
            width: 120,
          },
        },
      },
    },
  ];

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
        channelTitle, title, description, thumbnails,
      },
    }) => {
      expect(container).toHaveTextContent(channelTitle);
      expect(container).toHaveTextContent(title);
      expect(getByAltText(description)).toHaveAttribute('src', thumbnails.default.url);
    });
  });

  it('listens onClick event', () => {
    const { getByText } = renderMusicItems();

    fireEvent.click(getByText('essential1'));

    expect(handleClick).toBeCalled();
  });
});
