import React from 'react';

import styled from '@emotion/styled';

import facepaint from 'facepaint';

import MoodControllerContainer from '../containers/MoodControllerContainer';

import { BACKGROUND_COLOR_BLACK } from '../styles/constants';

const mq = facepaint([
  '@media(min-width: 672px)',
  '@media(min-width: 1000px)',
]);

const Wrap = styled.div(() => mq({
  position: 'fixed',
  left: [0, '120px', '12vw'],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: ['100%', 'calc(100% - 120px)', 'calc(100% - 12vw)'],
  height: '100vh',
  background: BACKGROUND_COLOR_BLACK,
  color: '#fff',

  '& h1': {
    fontSize: ['4.5vw', '2.2vw', '2.2vw'],
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
