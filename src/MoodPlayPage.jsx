import React from 'react';

import styled from '@emotion/styled';

import MusicPlayerContainer from './MusicPlayerContainer';
import MusicCategoriesContainer from './MusicCategoriesContainer';

const Wrap = styled.div({
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
