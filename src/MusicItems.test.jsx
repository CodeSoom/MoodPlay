import React from 'react';

import { render } from '@testing-library/react';

import MusicItems from './MusicItems';

test('MusicItems', () => {
  const music = [
    {
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

  const { container, getByAltText } = render(<MusicItems music={music} />);

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
