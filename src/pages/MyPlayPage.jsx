import React from 'react';

import styled from '@emotion/styled';

import MusicPlayerContainer from '../containers/MusicPlayerContainer';
import MyPlaylistsContainer from '../containers/MyPlaylistsContainer';
import StoreMusicContainer from '../containers/StoreMusicContainer';

const Wrap = styled.div({
  height: '100vh',
  display: 'flex',
  flexDirection: 'row',
});

export default function MyPlayPage() {
  return (
    <Wrap>
      <MyPlaylistsContainer />
      <MusicPlayerContainer />
      <StoreMusicContainer />
    </Wrap>
  );
}
