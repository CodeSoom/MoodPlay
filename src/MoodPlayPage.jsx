import React from 'react';

import styled from '@emotion/styled';

import MusicPlayerContainer from './MusicPlayerContainer';
import MusicCategoriesContainer from './MusicCategoriesContainer';

const Wrap = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'row',
});

export default function MoodPlayPage() {
  return (
    <Wrap>
      <MusicCategoriesContainer />
      <MusicPlayerContainer />
    </Wrap>
  );
}
