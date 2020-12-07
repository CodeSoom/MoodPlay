import React from 'react';

import styled from '@emotion/styled';

import MusicPlayerContainer from '../containers/MusicPlayerContainer';
import MusicCategoriesContainer from '../containers/MusicCategoriesContainer';
import StoreMusicContainer from '../containers/StoreMusicContainer';

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
