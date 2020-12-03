import React from 'react';

import styled from '@emotion/styled';

import MusicPlayerContainer from './MusicPlayerContainer';
import MyPlaylistsContainer from './MyPlaylistsContainer';

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
    </Wrap>
  );
}
