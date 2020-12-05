import React from 'react';

import styled from '@emotion/styled';

const PlaylistItem = styled.div({
  background: '#fff',
  padding: '10px 20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const InputLabel = styled.label({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const InputCheckbox = styled.input({
  width: '20px',
  height: '20px',
  border: '1px solid #000',
  marginRight: '10px',

  '&: checked': {
    background: 'darkorange',
  },
});

export default function PlaylistCheckbox({ id }) {
  return (
    <PlaylistItem>
      <InputLabel htmlFor={id}>
        <InputCheckbox
          type="checkbox"
          id={id}
          name="playlist"
          value={id}
        />
        {id}
      </InputLabel>
    </PlaylistItem>
  );
}
