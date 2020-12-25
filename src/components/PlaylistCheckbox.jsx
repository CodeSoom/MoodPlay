import React from 'react';

import {
  PlaylistItem,
  InputLabel,
  InputCheckbox,
} from '../styles/storeMusicModal';

const PlaylistCheckbox = React.memo(({
  id, onChange, checkState,
}) => {
  const handleChange = (event) => {
    const { checked } = event.target;
    const playlistTitle = id;

    onChange({ checked, playlistTitle });
  };

  return (
    <PlaylistItem>
      <InputLabel htmlFor={id}>
        <InputCheckbox
          type="checkbox"
          id={id}
          name="playlist"
          value={id}
          onChange={handleChange}
          checked={checkState}
        />
        {id}
      </InputLabel>
    </PlaylistItem>
  );
});

export default PlaylistCheckbox;
