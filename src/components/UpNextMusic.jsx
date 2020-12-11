import React from 'react';

import styled from '@emotion/styled';

import _ from 'lodash';

import { getUpNextItems } from '../utils/utils';

const Wrap = styled.ul({
  width: '354px',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '3.7vh',
  paddingTop: '5vh',
  borderTop: '1px solid #474747',
});

const NextSongs = styled.p({
  fontSize: '28px',
  fontWeight: '900',
  marginBottom: '47px',
});

const UpNextWrap = styled.ul({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  '& p': {
    fontSize: '0.6em',
    textAlign: 'center',
  },
});

const ListItem = styled.li({
  width: '110px',
  cursor: 'pointer',
  marginRight: '9.5px',
});

const Thumbnail = styled.div(({ url }) => ({
  background: `url(${url}) no-repeat`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '12px',
  width: '110px',
  height: '110px',
}));

const Title = styled.p({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const UpNextMusic = React.memo(({
  nowPlayingMusicItems,
  selectedMusic,
  onClick,
}) => {
  const upNextItems = _.isNull(selectedMusic)
    ? []
    : getUpNextItems(nowPlayingMusicItems, selectedMusic);

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
                <Title>{title}</Title>
              </ListItem>
            );
          })
        }
      </UpNextWrap>
    </Wrap>
  );
});

export default UpNextMusic;
