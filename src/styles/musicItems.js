import styled from '@emotion/styled';

import facepaint from 'facepaint';

const mq = facepaint([
  '@media(min-width: 672px)',
]);

const Wrap = styled.div(() => mq({
  marginTop: ['5vh', '8vh'],
  height: ['53vh', '58vh'],
  width: '100%',
  overflow: 'hidden',
}));

const MusicItemsTitle = styled.h3(() => mq({
  fontSize: ['2.3vh', '3vh'],
  fontWeight: '900',
}));

const MusicItemsWrap = styled.ul(() => mq({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexWrap: ['no-wrap', 'wrap'],
  width: '100%',
  height: ['initial', '58vh'],
  overflow: 'hidden',
}));

const MusicItem = styled.li(() => mq({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  margin: ['1vh 0', '10px 35px'],
  padding: [0, '5px 10px'],
  width: ['90%', '43%'],
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
}));

const Thumbnail = styled.div(({ url }) => mq({
  fontSize: '0',
  width: ['20%', '5.7vw'],
  height: '7vh',
  borderRadius: '12px',
  background: `url(${url}) no-repeat`,
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
}));

const InfoBox = styled.div(() => mq({
  width: ['70%', '13.5vw'],
}));

const TitleWrap = styled.div({
  width: '100%',
  height: '5vh',
  overflow: 'hidden',
});

const Title = styled.p`
  font-size: 1.6vh;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  height: '4vh';
  lineHeight: '1.6vh';
  wordBreak: 'break-all';
  whiteSpace: 'nowrap';
  overflow: 'hidden';
  text-overflow: 'ellipsis';
  `;

const ChannelTitle = styled.small({
  fontSize: '1.2vh',
  color: '#999',
});

export {
  Wrap,
  MusicItemsTitle,
  MusicItemsWrap,
  MusicItem,
  Thumbnail,
  InfoBox,
  TitleWrap,
  Title,
  ChannelTitle,
};
