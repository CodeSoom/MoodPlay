import React from 'react';

import styled from '@emotion/styled';

import MoodControllerContainer from '../containers/MoodControllerContainer';

const Wrap = styled.div({
  position: 'fixed',
  left: '234px',
  width: 'calc(100% - 234px)',
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