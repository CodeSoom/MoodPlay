import React from 'react';

import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import MusicCategories from './MusicCategories';

const Wrap = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
});

export default function MusicCategoriesContainer() {
  const { moodCategories } = useSelector((state) => ({
    moodCategories: state.moodCategories,
  }));

  return (
    <Wrap>
      <h2>기분에 어울리는 장르들이에요!</h2>
      <MusicCategories moodCategories={moodCategories} />
    </Wrap>
  );
}
