import React from 'react';

import styled from '@emotion/styled';

const Controller = styled.div({
  position: 'relative',
  width: '500px',
  height: '500px',
  backgroundColor: 'darkorange',
  borderRadius: '50%',
  cursor: 'pointer',
  marginTop: '50px',
  '& p': {
    position: 'absolute',
    margin: 0,
    padding: 0,
  },
  '& p.happy': {
    top: '-2em',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  '& p.sad': {
    bottom: '-2em',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  '& p.calm': {
    left: '-4em',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  '& p.uplifting': {
    right: '-4em',
    top: '50%',
    transform: 'translateY(-50%)',
  },
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

export default function MoodController({ onClick, clientLocation }) {
  if (!clientLocation) {
    return (
      <Controller
        onClick={onClick}
        data-testid="controller"
      >
        <p className="happy">밝은</p>
        <p className="sad">어두운</p>
        <p className="calm">차분한</p>
        <p className="uplifting">신나는</p>
      </Controller>
    );
  }

  const { x, y } = clientLocation;

  return (
    <Controller
      onClick={onClick}
      data-testid="controller"
    >
      <Pointer
        x={x}
        y={y}
        data-testid="pointer"
      />
      <p className="happy">밝은</p>
      <p className="sad">어두운</p>
      <p className="calm">차분한</p>
      <p className="uplifting">신나는</p>
    </Controller>
  );
}
