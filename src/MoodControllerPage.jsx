import React from 'react';

import styled from '@emotion/styled';

import MoodControllerContainer from './MoodControllerContainer';

const Wrap = styled.div({
  position: 'fixed',
  top: '0',
  left: '100px',
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export default function MoodControllerPage() {
  return (
    <Wrap>
      <h1>오늘은 어떤 날인가요?</h1>
      <MoodControllerContainer />
    </Wrap>
  );
}
