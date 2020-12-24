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
  width: ['80%', '80%', '80%', '100%'],
  height: '265px',
  display: ['none', 'none', 'none', 'flex'],
  flexDirection: 'column',
}));

const NextSongs = styled.p(() => mq({
  fontSize: ['1.2em', '1.6em', '1.7em', '1.7em', '1.7em'],
  fontWeight: '800',
  marginBottom: '24px',
}));

const UpNextWrap = styled.ul({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
});

const ListItem = styled.li({
  width: '108px',
  cursor: 'pointer',
  marginRight: '8px',
});

const Thumbnail = styled.div(({ url }) => ({
  background: `url(${url}) no-repeat`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '12px',
  width: '110px',
  height: '110px',
}));

const TitleBox = styled.div({
  marginTop: '7px',
  width: '100%',
  height: '4em',
  overflow: 'hidden',
});

const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #bdbdbd;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height:  '4.2em';
  lineHeight: '1.2em';
  wordBreak: 'break-all';
  whiteSpace: 'nowrap';
  overflow: 'hidden';
  text-overflow: 'ellipsis';
`;

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
                <TitleBox>
                  <Title>{title}</Title>
                </TitleBox>
              </ListItem>
            );
          })
        }
      </UpNextWrap>
    </Wrap>
  );
});

export default UpNextMusic;
