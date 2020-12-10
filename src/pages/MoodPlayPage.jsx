import React from 'react';

import styled from '@emotion/styled';

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
      <StoreMusicContainer />
    </Wrap>
  );
}
