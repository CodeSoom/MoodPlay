import React from 'react';

import { render } from '@testing-library/react';

import MusicPlayer from './MusicPlayer';

describe('MusicPlayer', () => {
  context('with selected music and now playing music items', () => {
    const selectedMusic = {
      id: {
        videoId: 'xxx3',
      },
      snippet: {
        channelTitle: 'essential3',
        description: 'description3',
        title: 'title3',
        thumbnails: {
          medium: {
            url: 'https://bbb.com/default.jpg',
          },
          default: {
            height: 90,
            url: 'https://bbb.com/default.jpg',
            width: 120,
          },
        },
      },
    };

    const nowPlayingMusicItems = [
      {
        id: {
          videoId: 'xxx1',
        },
        snippet: {
          channelTitle: 'essential1',
          description: 'description1',
          title: 'title1',
          thumbnails: {
            default: {
              height: 90,
              url: 'https://bbb.com/default.jpg',
              width: 120,
            },
          },
        },
      },
      {
        id: {
          videoId: 'xxx2',
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
      {
        id: {
          videoId: 'xxx3',
        },
        snippet: {
          channelTitle: 'essential3',
          description: 'description3',
          title: 'title3',
          thumbnails: {
            default: {
              height: 90,
              url: 'https://bbb.com/default.jpg',
              width: 120,
            },
          },
        },
      },
      {
        id: {
          videoId: 'xxx4',
        },
        snippet: {
          channelTitle: 'essential4',
          description: 'description4',
          title: 'title4',
          thumbnails: {
            default: {
              height: 90,
              url: 'https://bbb.com/default.jpg',
              width: 120,
            },
          },
        },
      },
      {
        id: {
          videoId: 'xxx5',
        },
        snippet: {
          channelTitle: 'essential5',
          description: 'description5',
          title: 'title5',
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

    it('renders music controls', () => {
      const { container } = render(<MusicPlayer
        selectedMusic={selectedMusic}
        nowPlayingMusicItems={nowPlayingMusicItems}
      />);

      expect(container).toHaveTextContent('Play');
      expect(container).toHaveTextContent('Pause');
      expect(container).toHaveTextContent('Play');

      expect(container).toHaveTextContent('essential3');
      expect(container).toHaveTextContent('title3');
    });

    it('renders up next music items', () => {
      const { container } = render(<MusicPlayer
        selectedMusic={selectedMusic}
        nowPlayingMusicItems={nowPlayingMusicItems}
      />);

      expect(container).toHaveTextContent('title4');
      expect(container).toHaveTextContent('title5');
      expect(container).toHaveTextContent('title1');
    });
  });

  context('without selected music and now playing music items', () => {
    const selectedMusic = null;
    const nowPlayingMusicItems = [];

    it('renders nothing', () => {
      const { container } = render(<MusicPlayer
        selectedMusic={selectedMusic}
        nowPlayingMusicItems={nowPlayingMusicItems}
      />);

      expect(container).not.toHaveTextContent('Play');
      expect(container).not.toHaveTextContent('Pause');
      expect(container).not.toHaveTextContent('Play');

      expect(container).not.toHaveTextContent('essential3');
      expect(container).not.toHaveTextContent('title3');

      expect(container).not.toHaveTextContent('title4');
      expect(container).not.toHaveTextContent('title5');
      expect(container).not.toHaveTextContent('title1');
    });
  });
});
