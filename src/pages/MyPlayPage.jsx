import React from 'react';

import styled from '@emotion/styled';

import MyPlaylistsContainer from '../containers/MyPlaylistsContainer';
import StoreMusicContainer from '../containers/StoreMusicContainer';

const Wrap = styled.div({
  height: '100vh',
});

export default function MyPlayPage() {
  return (
    <Wrap>
      <MyPlaylistsContainer />
      <StoreMusicContainer />
    </Wrap>
  );
}
