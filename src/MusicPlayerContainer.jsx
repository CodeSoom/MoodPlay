import React from 'react';

import { useSelector } from 'react-redux';

import MusicPlayer from './MusicPlayer';

import { get } from './utils';

export default function MusicPlayerContainer() {
  const selectedMusic = useSelector(get('selectedMusic'));
  const nowPlayingMusicItems = useSelector(get('nowPlayingMusicItems'));

  return (
    <MusicPlayer
      selectedMusic={selectedMusic}
      nowPlayingMusicItems={nowPlayingMusicItems}
    />
  );
}
