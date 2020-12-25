import React from 'react';

import { AddPlaylistFormWrap } from '../styles/storeMusicModal';

const AddPlaylistForm = React.memo(({
  value, onChange, onClick,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <AddPlaylistFormWrap>
      <input
        type="text"
        id="name"
        placeholder="새 플레이리스트 이름"
        value={value}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={onClick}
      >
        Save
      </button>
    </AddPlaylistFormWrap>
  );
});

export default AddPlaylistForm;
