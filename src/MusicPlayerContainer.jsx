import React, { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setSelectedMusic } from './slice';

import MusicPlayer from './MusicPlayer';

import { get } from './utils';

export default function MusicPlayerContainer() {
  const dispatch = useDispatch();

  const selectedMusic = useSelector(get('selectedMusic'));
  const nowPlayingMusicItems = useSelector(get('nowPlayingMusicItems'));

  const handleSelectMusic = useCallback((music) => {
    dispatch(setSelectedMusic(music));
  }, [dispatch]);

  return (
    <MusicPlayer
      selectedMusic={selectedMusic}
      nowPlayingMusicItems={nowPlayingMusicItems}
      handleSelectMusic={handleSelectMusic}
    />
  );
}
