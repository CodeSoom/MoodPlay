import React from 'react';

import styled from '@emotion/styled';

import MusicControls from './MusicControls';
import UpNextMusic from './UpNextMusic';

const PlayerWrap = styled.div({
  position: 'fixed',
  right: '0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '438px',
  height: '100vh',
  paddingTop: '8.5vh',
  borderRadius: '0 48px 48px 0',

  background: '#1B1A20',
  color: '#fff',
});

const MusicPlayer = React.memo(({
  selectedMusic,
  nowPlayingMusicItems,
  handleSelectMusic,
  handleStoreOpenState,
}) => ((
  <PlayerWrap>
    <MusicControls
      selectedMusic={selectedMusic}
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
