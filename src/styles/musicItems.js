import styled from '@emotion/styled';

import facepaint from 'facepaint';

import { MusicSelectIcon } from '../assets/images';

const mq = facepaint([
  '@media(min-width: 672px)',
]);

const Wrap = styled.div(() => mq({
  marginTop: ['5vh', '8vh'],
  height: ['48vh', '52vh'],
  width: '100%',
}));

const MusicItemsTitle = styled.h3(() => mq({
  fontSize: ['2.3vh', '3vh'],
  fontWeight: '900',
}));

const MusicItemsWrap = styled.ul(() => mq({
  display: 'grid',
  gridTemplateColumns: ['100%', '50% 50%'],
  gridTemplateRows: ['repeat(5, 1fr)', 'repeat(5, 1fr)'],
  marginTop: '1vh',
  paddigBottom: '3vh',
  width: '100%',
  height: ['inherit', '52vh'],
  overflowY: 'scroll',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

const MusicItem = styled.li(() => mq({
  position: 'relative',
  margin: ['0.5vh 0', '1vh 0'],
  width: ['98%', '98%'],
  height: '10vh',
  borderRadius: '24px',
  background: '#181818',
  cursor: 'pointer',

  '&: active': {
    transform: 'translateY(2px)',
  },
}));

const MusicItemHover = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',

  '&: hover': {
    border: '3px solid #F89428',
    borderRadius: '24px',

    '& >div': {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '42px',
      height: '42px',
      backgroundColor: '#F89428',
      backgroundImage: `url(${MusicSelectIcon})`,
      backgroundPosition: '9px 9px',
      backgroundSize: '24px ',
      backgroundRepeat: 'no-repeat',
      borderRadius: '0 24px 0 20px',
    },
  },
});

const MusicItemContents = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1vh',
  width: '100%',
  height: '100%',
});

const Thumbnail = styled.div(({ url }) => mq({
  fontSize: '0',
  width: ['30%', '25%'],
  height: '8vh',
  borderRadius: '20px',
  background: `url(${url}) no-repeat`,
  backgroundSize: '160% 160%',
  backgroundPosition: 'center',
}));

const InfoBox = styled.div(() => mq({
  width: ['67%', '72%'],
  height: '83%',
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
  MusicItemHover,
  MusicItemContents,
  Thumbnail,
  InfoBox,
  TitleWrap,
  Title,
  ChannelTitle,
};
