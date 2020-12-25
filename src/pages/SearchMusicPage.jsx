import React from 'react';

import styled from '@emotion/styled';

import SearchMusicContainer from '../containers/SearchMusicContainer';
import StoreMusicContainer from '../containers/StoreMusicContainer';

const Wrap = styled.div({
  position: 'fixed',
  top: 0,
  left: [0, '176px'],
  height: '100vh',
});

export default function SearchMusicPage() {
  return (
    <Wrap>
      <SearchMusicContainer />
      <StoreMusicContainer />
    </Wrap>
  );
}
