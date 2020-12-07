import React from 'react';

import styled from '@emotion/styled';

const AddPlaylist = styled.form({
  background: '#fff',
  padding: '10px 20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  borderTop: '1px solid #000',
});

const AddPlaylistForm = React.memo(({
  value, onChange, onClick,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <AddPlaylist>
      <label htmlFor="name">이름</label>
      <input
        type="text"
        id="name"
        placeholder="플레이리스트 이름 입력..."
        value={value}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={onClick}
      >
        만들기
      </button>
    </AddPlaylist>
  );
});

export default AddPlaylistForm;
