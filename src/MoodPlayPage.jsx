import React from 'react';

import styled from '@emotion/styled';

import MusicPlayerContainer from './MusicPlayerContainer';
import MusicCategoriesContainer from './MusicCategoriesContainer';
import StoreMusicContainer from './StoreMusicContainer';

const Wrap = styled.div({
  height: '100vh',
  display: 'flex',
  flexDirection: 'row',
});

export default function MoodPlayPage() {
  return (
    <Wrap>
      <MusicCategoriesContainer />
      <MusicPlayerContainer />
      <StoreMusicContainer />
    </Wrap>
  );
}
