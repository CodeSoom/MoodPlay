import React from 'react';

import styled from '@emotion/styled';

import {
  getSelectedMusicIndex,
  getUpNextItems,
} from './utils';

const UpNextWrap = styled.ul({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  '& p': {
    fontSize: '0.6em',
    textAlign: 'center',
    marginTop: '5px',
  },
});

const ListItem = styled.li({
  margin: '0 7px',
  cursor: 'pointer',
});

const UpNextMusic = React.memo(({
  nowPlayingMusicItems,
  selectedMusic,
  onClick,
}) => {
  const selectedMusicIndex = getSelectedMusicIndex(nowPlayingMusicItems, selectedMusic);
  const upNextItems = getUpNextItems(nowPlayingMusicItems, selectedMusicIndex);

  return (
    <>
      <p>UpNext</p>
      <UpNextWrap>
        {
          upNextItems.map((music) => {
            const { snippet: { title, description, thumbnails } } = music;

            return (
              <ListItem
                key={title}
                onClick={() => onClick(music)}
              >
                <img src={thumbnails.default.url} alt={description} />
                <p>{title}</p>
              </ListItem>
            );
          })
        }
      </UpNextWrap>
    </>
  );
});

export default UpNextMusic;
