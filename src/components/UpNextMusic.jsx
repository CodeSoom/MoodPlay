import React from 'react';

import styled from '@emotion/styled';

import {
  getSelectedMusicIndex,
  getUpNextItems,
} from '../utils/utils';

const Wrap = styled.ul({
  width: '354px',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '3vh',
});

const NextSongs = styled.p({
  fontSize: '32px',
  fontWeight: '900',
});

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
  width: '111px',
  height: '145px',
  margin: '15px 7px',
  cursor: 'pointer',
});

const Thumbnail = styled.div(({ url }) => ({
  background: `url(${url}) no-repeat`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '30px',
  width: '111px',
  height: '111px',
}));

const UpNextMusic = React.memo(({
  nowPlayingMusicItems,
  selectedMusic,
  onClick,
}) => {
  if (!selectedMusic || !nowPlayingMusicItems) {
    return null;
  }

  const selectedMusicIndex = getSelectedMusicIndex(nowPlayingMusicItems, selectedMusic);
  const upNextItems = getUpNextItems(nowPlayingMusicItems, selectedMusicIndex);

  return (
    <Wrap>
      <NextSongs>Next songs</NextSongs>
      <UpNextWrap>
        {
          upNextItems.map((music) => {
            const { snippet: { title, description, thumbnails } } = music;

            return (
              <ListItem
                key={title}
                onClick={() => onClick(music)}
              >
                <Thumbnail url={thumbnails.default.url} alt={description} />
                <p>{title}</p>
              </ListItem>
            );
          })
        }
      </UpNextWrap>
    </Wrap>
  );
});

export default UpNextMusic;
