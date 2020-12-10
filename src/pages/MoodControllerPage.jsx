import React from 'react';

import styled from '@emotion/styled';

import MoodControllerContainer from '../containers/MoodControllerContainer';

import { BACKGROUND_COLOR_BLACK } from '../styles/constants';

const Wrap = styled.div({
  position: 'fixed',
  left: '234px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'calc(100% - 234px)',
  height: '100vh',
  borderRadius: '0 48px 48px 0',
  background: BACKGROUND_COLOR_BLACK,
  color: '#fff',
});

export default function MoodControllerPage() {
  return (
    <Wrap>
      <h1>오늘은 어떤 날인가요?</h1>
      <MoodControllerContainer />
    </Wrap>
  );
}
