import React, { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setSelectedMusic, setStoreOpenState } from '../redux/slice';

import MusicPlayer from '../components/MusicPlayer';

import { get } from '../utils/utils';

const MusicPlayerContainer = React.memo(() => {
  const dispatch = useDispatch();

  const selectedMusic = useSelector(get('selectedMusic'));
  const nowPlayingMusicItems = useSelector(get('nowPlayingMusicItems'));

  const handleSelectMusic = useCallback((music) => {
    dispatch(setSelectedMusic(music));
  }, [dispatch]);

  const handleStoreOpenState = useCallback(() => {
    dispatch(setStoreOpenState());
  }, [dispatch]);

  return (
    <>
      <MusicPlayer
        selectedMusic={selectedMusic}
        nowPlayingMusicItems={nowPlayingMusicItems}
        handleSelectMusic={handleSelectMusic}
        handleStoreOpenState={handleStoreOpenState}
      />
    </>
  );
});

export default MusicPlayerContainer;
