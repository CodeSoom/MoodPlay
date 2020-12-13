import React, { useState } from 'react';

import styled from '@emotion/styled';

import facepaint from 'facepaint';

import MusicControls from './MusicControls';
import UpNextMusic from './UpNextMusic';

const mq = facepaint([
  '@media(min-width: 672px)',
]);

const PlayerWrap = styled.div(({ musicPlayerState }) => mq({
  position: 'absolute',
  bottom: 0,
  right: '0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: ['3vh', '8.5vh'],
  width: ['100vw', '438px'],
  height: [`${musicPlayerState ? '90vh' : '10vh'}`, '100vh'],
  borderRadius: ['27px 27px 0 0', '0'],
  background: '#1B1A20',
  color: '#fff',
  transition: 'height 1s',
  overflow: 'hidden',
}));

const MusicPlayer = React.memo(({
  selectedMusic,
  nowPlayingMusicItems,
  handleSelectMusic,
  handleStoreOpenState,
}) => {
  const [musicPlayerState, setMusicPlayerState] = useState(false);

  const handleChangeMusicPlayerState = () => {
    setMusicPlayerState(!musicPlayerState);
  };

  return ((
    <PlayerWrap
      musicPlayerState={musicPlayerState}
    >
      <MusicControls
        nowPlayingMusicItems={nowPlayingMusicItems}
        selectedMusic={selectedMusic}
        musicPlayerState={musicPlayerState}
        onClickMusic={handleSelectMusic}
        onClickPlayer={handleChangeMusicPlayerState}
        onStoreMusic={handleStoreOpenState}
      />
      <UpNextMusic
        nowPlayingMusicItems={nowPlayingMusicItems}
        selectedMusic={selectedMusic}
        onClick={handleSelectMusic}
      />
    </PlayerWrap>
  ));
});

export default MusicPlayer;
