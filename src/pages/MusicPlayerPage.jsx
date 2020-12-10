import React from 'react';

import styled from '@emotion/styled';

import MusicPlayerContainer from '../containers/MusicPlayerContainer';

const Wrap = styled.div({
  height: '100vh',
  display: 'flex',
  flexDirection: 'row',
});

export default function MusicPlayerPage() {
  return (
    <Wrap>
      <MusicPlayerContainer />
    </Wrap>
  );
}
