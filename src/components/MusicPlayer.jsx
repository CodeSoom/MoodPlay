import React from 'react';

import styled from '@emotion/styled';

import facepaint from 'facepaint';

import MusicControls from './MusicControls';
import UpNextMusic from './UpNextMusic';

const mq = facepaint([
  '@media(min-width: 672px)',
]);

const PlayerWrap = styled.div(() => mq({
  position: 'fixed',
  right: '0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: ['100vw', '438px'],
  height: '100vh',
  paddingTop: '8.5vh',

  background: '#1B1A20',
  color: '#fff',
}));

const MusicPlayer = React.memo(({
  selectedMusic,
  nowPlayingMusicItems,
  handleSelectMusic,
  handleStoreOpenState,
}) => ((
  <PlayerWrap>
    <MusicControls
      nowPlayingMusicItems={nowPlayingMusicItems}
      selectedMusic={selectedMusic}
      onClick={handleSelectMusic}
      onStoreMusic={handleStoreOpenState}
    />
    <UpNextMusic
      nowPlayingMusicItems={nowPlayingMusicItems}
      selectedMusic={selectedMusic}
      onClick={handleSelectMusic}
    />
  </PlayerWrap>
)));

export default MusicPlayer;
