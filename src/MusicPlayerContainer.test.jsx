import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import MusicPlayerContainer from './MusicPlayerContainer';

jest.mock('react-redux');

describe('MusicPlayerContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  context('with selected music and now playing music items', () => {
    useSelector.mockImplementation((selector) => selector({
      selectedMusic: {
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
      },
      nowPlayingMusicItems: [
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
      ],
    }));
  });

  it('renders music player', () => {
    const { container } = render(<MusicPlayerContainer />);

    expect(container).toHaveTextContent('Play');
    expect(container).toHaveTextContent('Pause');
    expect(container).toHaveTextContent('Play');

    expect(container).toHaveTextContent('essential3');
    expect(container).toHaveTextContent('title3');
  });
});
