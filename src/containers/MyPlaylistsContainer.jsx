import React, { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import facepaint from 'facepaint';

import {
  setSelectedMusic,
  setNowPlayingMusicItems,
  setSelectedPlaylist,
} from '../redux/slice';

import PlaylistTitles from '../components/PlaylistTitles';
import MusicItems from '../components/MusicItems';

import { get, getPlaylistMusic } from '../utils/utils';

import { BACKGROUND_COLOR_BLACK } from '../styles/constants';

const mq = facepaint([
  '@media(min-width: 672px)',
]);

const Wrap = styled.div(() => mq({
  position: 'fixed',
  top: 0,
  left: [0, '12vw'],
  itemsAligns: 'center',
  width: ['100vw', 'calc(88vw - 438px)'],
  height: ['90vh', '100vh'],
  padding: ['13vh 10vw', '68px 95px'],
  background: BACKGROUND_COLOR_BLACK,
  color: '#fff',
}));

const MyPlaylistTitle = styled.h1(() => mq({
  fontSize: ['2.3vh', '3vh'],
  fontWeight: '900',
}));

export default function MyPlaylistsContainer() {
  const dispatch = useDispatch();

  const myPlaylists = useSelector(get('myPlaylists'));
  const selectedPlaylist = useSelector(get('selectedPlaylist'));

  const playlistMusic = getPlaylistMusic(myPlaylists, selectedPlaylist);

  const handleSelectPlaylist = useCallback((playlistTitle) => {
    dispatch(setSelectedPlaylist(playlistTitle));
  });

  const handleSelectMusic = useCallback((selectedMusic, musicItems) => {
    dispatch(setSelectedMusic(selectedMusic));

    dispatch(setNowPlayingMusicItems(musicItems));
  }, [dispatch]);

  return (
    <Wrap>
      <MyPlaylistTitle>마이 플레이리스트</MyPlaylistTitle>
      <PlaylistTitles
        myPlaylists={myPlaylists}
        selectedPlaylist={selectedPlaylist}
        onClick={handleSelectPlaylist}
      />
      <MusicItems
        music={playlistMusic}
        musicItemsTitle={selectedPlaylist}
        onClick={handleSelectMusic}
      />
    </Wrap>
  );
}
