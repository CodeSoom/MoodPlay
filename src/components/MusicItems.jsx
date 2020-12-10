import React from 'react';

import styled from '@emotion/styled';

const Wrap = styled.div({
  marginTop: '8vh',
  height: '58vh',
});

const MusicItemsTitle = styled.h3({
  fontSize: '28px',
  fontWeight: '900',
});

const MusicItemsWrap = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  width: '100%',
  height: '50vh',
  overflow: 'hidden',
});

const MusicItem = styled.li({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  margin: '10px 35px',
  padding: '5px 10px',
  width: '447px',
  height: '10vh',
  borderRadius: '12px',
  background: '#181818',
  cursor: 'pointer',

  '&: hover': {
    transform: 'translateY(-5px)',
    boxShadow: ' 0px 8px 24px rgba(255, 255, 255, 0.2)',
  },

  '&: active': {
    transform: 'translateY(2px)',
    boxShadow: ' 8px 8px 24px rgba(255, 255, 255, 0.2)',
  },
});

const Thumbnail = styled.div(({ url }) => ({
  fontSize: '0',
  width: '9.4vh',
  height: '7vh',
  borderRadius: '12px',
  background: `url(${url}) no-repeat`,
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
}));

const InfoBox = styled.div({
  width: '70%',
});

const TitleWrap = styled.div({
  width: '100%',
  height: '3em',
  overflow: 'hidden',
});

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  height:  '3em';
  lineHeight: '1.2em';
  wordBreak: 'break-all';
  whiteSpace: 'nowrap';
  overflow: 'hidden';
  text-overflow: 'ellipsis';
  `;

const ChannelTitle = styled.small({
  color: '#999',
});

const MusicItems = React.memo(({
  music,
  musicItemsTitle,
  onClick,
}) => ((
  <Wrap>
    <MusicItemsTitle>
      {musicItemsTitle}
    </MusicItemsTitle>

    <MusicItemsWrap>
      {
        music.map((musicItem) => {
          const {
            snippet: {
              title, description, channelTitle, thumbnails,
            },
          } = musicItem;

          return ((
            <MusicItem
              key={title}
              onClick={() => onClick(musicItem, music)}
            >
              <Thumbnail
                url={thumbnails.default.url}
              >
                {description}
              </Thumbnail>
              <InfoBox>
                <TitleWrap>
                  <Title>{title}</Title>
                </TitleWrap>
                <ChannelTitle>{channelTitle}</ChannelTitle>
              </InfoBox>
            </MusicItem>
          ));
        })
      }
    </MusicItemsWrap>
  </Wrap>
)));

export default MusicItems;
