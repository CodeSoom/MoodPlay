import React, { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { setSelectedMusic, setNowPlayingMusicItems } from '../redux/slice';

import MyPlaylist from '../components/MyPlaylist';

import { get } from '../utils/utils';

const Wrap = styled.div({
  position: 'fixed',
  left: '234px',
  width: 'calc(100vw - 672px)',
  height: '100vh',
  padding: '80px 80px',
  overflowY: 'scroll',
});

export default function MyPlaylistsContainer() {
  const dispatch = useDispatch();

  const myPlaylists = useSelector(get('myPlaylists'));

  const handleSelectMusic = useCallback((selectedMusic, musicItems) => {
    dispatch(setSelectedMusic(selectedMusic));

    dispatch(setNowPlayingMusicItems(musicItems));
  }, [dispatch]);

  return (
    <Wrap>
      <h1>마이 플레이리스트</h1>
      {myPlaylists.map(({ playlistTitle, playlists }) => (
        <MyPlaylist
          key={playlistTitle}
          playlistTitle={playlistTitle}
          playlists={playlists}
          onClick={handleSelectMusic}
        />
      ))}
    </Wrap>
  );
}
