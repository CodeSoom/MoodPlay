import React from 'react';

import styled from '@emotion/styled';

const Controller = styled.input({
  width: '500px',
  height: '500px',
  backgroundColor: 'darkorange',
  borderRadius: '50%',
  cursor: 'pointer',
  marginTop: '50px',
  outline: 0,
  color: 'transparent',
});

const Pointer = styled.div(({ x, y }) => ({
  position: 'fixed',
  top: `${y - 15}px`,
  left: `${x - 15}px`,
  width: '30px',
  height: '30px',
  backgroundColor: '#000',
  borderRadius: '50%',
}));

const Happy = styled.p({
  position: 'absolute',
  top: '-2em',
  left: '50%',
  transform: 'translateX(-50%)',
});

const Sad = styled.p({
  position: 'absolute',
  bottom: '-2em',
  left: '50%',
  transform: 'translateX(-50%)',
});

const Calm = styled.p({
  position: 'absolute',
  left: '-4em',
  top: '50%',
  transform: 'translateY(-50%)',
});

const Uplifting = styled.p({
  position: 'absolute',
  right: '-4em',
  top: '50%',
  transform: 'translateY(-50%)',
});

export default function MoodController({ onClick, clientLocation }) {
  if (!clientLocation) {
    return (
      <>
        <Controller type="button" value="controller" onClick={onClick} />
        <Happy>밝은</Happy>
        <Sad>어두운</Sad>
        <Calm>차분한</Calm>
        <Uplifting>신나는</Uplifting>
      </>
    );
  }

  const { x, y } = clientLocation;

  return (
    <>
      <Controller type="button" value="controller" onClick={onClick} />
      <Pointer
        x={x}
        y={y}
        data-testid="pointer"
      />
      <Happy>밝은</Happy>
      <Sad>어두운</Sad>
      <Calm>차분한</Calm>
      <Uplifting>신나는</Uplifting>
    </>
  );
}
