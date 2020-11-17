import React from 'react';

import styled from '@emotion/styled';

const Controller = styled.div({
  width: '500px',
  height: '500px',
  backgroundColor: 'darkorange',
  borderRadius: '50%',
  cursor: 'pointer',
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
      />
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
    </Controller>
  );
}
