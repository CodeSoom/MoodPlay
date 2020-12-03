import React from 'react';

import { render } from '@testing-library/react';

import MusicPlayer from './MusicPlayer';

import MUSICITEMS from '../fixtures/musicItems';
import SELECTEDMUSIC from '../fixtures/selectedMusic';

describe('MusicPlayer', () => {
  context('with selected music and now playing music items', () => {
    const nowPlayingMusicItems = MUSICITEMS;

    const selectedMusic = MUSICITEMS[2];

    it('renders music controls', () => {
      const { container } = render(<MusicPlayer
        selectedMusic={selectedMusic}
        nowPlayingMusicItems={nowPlayingMusicItems}
      />);


      expect(container).toHaveTextContent(SELECTEDMUSIC.snippet.title);
      expect(container).toHaveTextContent(SELECTEDMUSIC.snippet.channelTitle);
    });

    it('renders up next music items', () => {
      const { container } = render(<MusicPlayer
        selectedMusic={selectedMusic}
        nowPlayingMusicItems={nowPlayingMusicItems}
      />);

      expect(container).toHaveTextContent(MUSICITEMS[3].snippet.title);
      expect(container).toHaveTextContent(MUSICITEMS[4].snippet.title);
      expect(container).toHaveTextContent(MUSICITEMS[0].snippet.title);
    });
  });

  context('without selected music and now playing music items', () => {
    const selectedMusic = null;
    const nowPlayingMusicItems = [];

    it('renders empty message', () => {
      const { container } = render(<MusicPlayer
        selectedMusic={selectedMusic}
        nowPlayingMusicItems={nowPlayingMusicItems}
      />);

      expect(container).toHaveTextContent('재생중인 음악이 없습니다!');
    });
  });
});
