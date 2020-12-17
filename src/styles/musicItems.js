import styled from '@emotion/styled';

import facepaint from 'facepaint';

const mq = facepaint([
  '@media(min-width: 672px)',
]);

const Wrap = styled.div(() => mq({
  marginTop: ['5vh', '8vh'],
  height: ['48vh', '48vh'],
  width: '100%',
}));

const MusicItemsTitle = styled.h3(() => mq({
  fontSize: ['2.3vh', '3vh'],
  fontWeight: '900',
}));

const MusicItemsWrap = styled.ul(() => mq({
  display: 'grid',
  gridTemplateColumns: ['100%', '50% 50%'],
  gridTemplateRows: ['repeat(4, 1fr)', 'repeat(4, 1fr)'],
  marginTop: '1vh',
  width: '100%',
  height: ['inherit', '48vh'],
  overflowY: 'scroll',

  '&::-webkit-scrollbar': {
    width: ['5px', '10px'],
    background: '#000',
    borderRadius: ['5px', '10px'],
  },

  '&::-webkit-scrollbar-thumb': {
    width: ['5px', '10px'],
    background: '#F89428',
    borderRadius: ['5px', '10px'],
  },
}));

const MusicItem = styled.li(() => mq({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  margin: ['1vh 0', '1vh 35px'],
  padding: [0, '5px 10px'],
  width: ['90%', '90%'],
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
