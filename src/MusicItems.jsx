import React from 'react';

import styled from '@emotion/styled';

const MusicWrap = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const MusicItem = styled.li({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5px 10px',
  margin: '10px',
  border: '2px solid #f0f0f0',
  borderRadius: '5px',
});

export default function MusicItems({ music }) {
  return (
    <MusicWrap>
      {
        music.map(({
          snippet: {
            title, description, channelTitle, thumbnails,
          },
        }) => ((
          <MusicItem key={title}>
            <img src={thumbnails.default.url} alt={description} />
            <div>
              <p>{title}</p>
              <small>{channelTitle}</small>
            </div>
          </MusicItem>
        )))
      }
    </MusicWrap>
  );
}
