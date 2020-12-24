import React from 'react';

import styled from '@emotion/styled';

import facepaint from 'facepaint';

import MoodControllerContainer from '../containers/MoodControllerContainer';

import { BACKGROUND_COLOR_BLACK, MAIN_FONT_COLOR } from '../styles/constants';

const mq = facepaint([
  '@media(min-width: 672px)',
]);

const Wrap = styled.div(() => mq({
  position: 'fixed',
  left: [0, '176px'],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: ['100vw', 'calc(100vw - 176px)'],
  height: '100vh',
  background: BACKGROUND_COLOR_BLACK,
  color: MAIN_FONT_COLOR,

  '& h1': {
    fontSize: ['4.5vw', '2.2vw'],
    fontWeight: 'bold',
  },
}));

export default function MoodControllerPage() {
  return (
    <Wrap>
      <h1>오늘은 어떤 날인가요?</h1>
      <MoodControllerContainer />
    </Wrap>
  );
}
