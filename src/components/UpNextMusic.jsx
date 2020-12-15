import React from 'react';

import styled from '@emotion/styled';

import facepaint from 'facepaint';

import _ from 'lodash';

import { getUpNextItems } from '../utils/mysicPlayer/musicPlayer';

const mq = facepaint([
  '@media(min-width: 350px)',
  '@media(min-width: 400px)',
  '@media(min-width: 438px)',
]);

const Wrap = styled.ul(() => mq({
  width: ['80%', '80%', '80%', '342px'],
  display: ['none', 'none', 'none', 'flex'],
  flexDirection: 'column',
  marginTop: '3.7vh',
  paddingTop: '5vh',
  borderTop: '1px solid #474747',
}));

const NextSongs = styled.p(() => mq({
  fontSize: ['1.2em', '1.6em', '2em', '2em'],
  fontWeight: '900',
  marginBottom: '1em',
}));

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
