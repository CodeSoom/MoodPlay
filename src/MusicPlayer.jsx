import React from 'react';

import styled from '@emotion/styled';

import MusicControls from './MusicControls';
import UpNextMusic from './UpNextMusic';

const PlayerWrap = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '400px',
  height: '100vh',
  border: '3px solid #888',
  borderRadius: '10px',

  background: '#000',
  color: '#fff',

  '& p': {
    marginTop: '50px',
    textAlign: 'center',
  },

  '& small': {
    color: '#999',
  },
});

const MusicPlayer = React.memo(({
  selectedMusic,
  nowPlayingMusicItems,
  handleSelectMusic,
}) => {
  if (!selectedMusic) {
    return null;
  }

  return (
    <PlayerWrap>
      <MusicControls selectedMusic={selectedMusic} />
      <UpNextMusic
        nowPlayingMusicItems={nowPlayingMusicItems}
        selectedMusic={selectedMusic}
        onClick={handleSelectMusic}
      />
    </PlayerWrap>
  );
});

export default MusicPlayer;
