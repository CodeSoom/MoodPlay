import React from 'react';

import styled from '@emotion/styled';

const Wrap = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '20px',
  padding: '20px 30px',
  margin: '40px 0',
  background: '#f0f0f0',
});

const PlaylistWrap = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '20px',
  padding: '20px 30px',
  margin: '20px 0',
  background: '#f0f0f0',
  overflowY: 'scroll',
});

const PlaylistMusic = styled.li({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'column',
  alignItems: 'center',
  padding: '5px 10px',
  margin: '10px',
  border: '3px solid #fff',
  borderRadius: '5px',
  cursor: 'pointer',
});

export default function MyPlaylist({ playlistTitle, playlists, onClick }) {
  return (
    <Wrap>
      <h2>{playlistTitle}</h2>
      <PlaylistWrap>
        {playlists.map((playlist) => {
          const {
            snippet: {
              title, description, channelTitle, thumbnails,
            },
          } = playlist;

          return ((
            <PlaylistMusic
              key={title}
              onClick={() => onClick(playlist, playlists)}
            >
              <img src={thumbnails.default.url} alt={description} />
              <div>
                <p>{title}</p>
                <small>{channelTitle}</small>
              </div>
            </PlaylistMusic>
          ));
        })}
      </PlaylistWrap>
    </Wrap>
  );
}
