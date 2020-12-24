import styled from '@emotion/styled';

import facepaint from 'facepaint';

import {
  VolumeIcon,
  MuteIcon,
  PlayerCloseIcon,
} from '../assets/images';

const mq = facepaint([
  '@media(min-width: 350px)',
  '@media(min-width: 400px)',
  '@media(min-width: 438px)',
  '@media(min-width: 672px)',
]);

const MusicControlsWrap = styled.div(() => mq({
  width: ['100%', '100%', '100%', '100%', '100%'],
}));

const HideVideo = styled.div({
  position: 'fixed',
  top: '-5000px',
  opacity: 0,
});

const PlayingNow = styled.p(() => mq({
  fontSize: ['1.2em', '1.6em', '1.7em', '1.7em', '1.7em'],
  fontWeight: '800',
  marginBottom: '24px',
}));

const MusicImage = styled.div(({ url }) => (() => mq({
  width: '100%',
  height: ['150px', '190px', '200px', '261px', '261px'],
  borderRadius: '12px',
  background: `url(${url}) no-repeat`,
  backgroundSize: '135%',
  backgroundPosition: 'center',
})));

const ProgressBar = styled.input(({ value }) => `
  display: block;
  width: 100%;
  height: 7px;
  border-radius: 7px;
  cursor: pointer;

  background-image: -webkit-gradient(linear,
    left top, 
    right top, 
    color-stop(${value}%, #F89428),
    color-stop(${value}%, #29292f));

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: 15px;
    width: 15px;
    background: #fff;
    border-radius: 100%;
  }

  &::-moz-range-thumb {
    appearance: none;
    height: 15px;
    width: 15px;
    background: #fff;
    border-radius: 100%;
    border: 0;
  }

  &::-ms-thumb {
    appearance: none;
    height: 15px;
    width: 15px;
    background: #fff;
    border-radius: 100%;
    border: 0;
  }
  `);

const Timeline = styled.p({
  fontSize: '13px',
});

const SoundControlAndTimelineWrap = styled.div(() => mq({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '17px',
  width: '100%',
}));

const SoundControlWrap = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const SoundControl = styled.input(({ value }) => `
  display: block;
  width: '149px';
  height: 7px;
  border-radius: 7px;
  cursor: pointer;

  background-image: -webkit-gradient(linear,
    left top, 
    right top, 
    color-stop(${value * 100}%, #dbdbdb),
    color-stop(${value * 100}%, #29292f));

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: 7px;
    width: 7px;
    background: #dbdbdb;
    border-radius: 100%;
  }

    &::-moz-range-thumb {
      appearance: none;
      height: 7px;
      width: 7px;
      background: #dbdbdb;
      border-radius: 100%;
      border: 0;
    }
  
    &::-ms-thumb {
      appearance: none;
      height: 7px;
      width: 7px;
      background: #dbdbdb;
      border-radius: 100%;
      border: 0;
  }
  `);

const SoundButton = styled.button(({ muted }) => ({
  fontSize: '0',
  marginRight: '6px',
  width: '40px',
  height: '40px',
  border: '0',
  background: `url(${muted ? MuteIcon : VolumeIcon}) no-repeat`,
  backgroundSize: '17px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  cursor: 'pointer',

  '&: focus': {
    outline: 0,
  },
}));

const InfoBox = styled.div({
  margin: '8px 0',
  width: '100%',
  height: '4.5em',
  overflow: 'hidden',

  '& small': {
    color: '#999',
  },
});

const TitleBox = styled.div({
  width: '100%',
  height: '3em',
  overflow: 'hidden',
});

const Title = styled.p`
  font-size: 17px;
  font-weight: bold;
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

const Buttons = styled.div({
  display: 'flex',
  flexDirection: 'rows',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: [0, 0, 0, 0, '33px', '33px'],
});

const IconButton = styled.button(({ url }) => mq({
  fontSize: '0',
  marginRight: '4px',
  width: ['28px', '35px', '40px', '48px', '48px'],
  height: ['28px', '35px', '40px', '48px', '48px'],
  border: '0',
  background: `url(${url}) no-repeat`,
  backgroundSize: ['28px', '35px', '40px', '48px', '48px'],
  cursor: 'pointer',

  '&: focus': {
    outline: 0,
  },
}));

const MobileWrap = styled.div(({ musicPlayerState }) => mq({
  position: 'absolute',
  top: [
    `${musicPlayerState ? '-100vh' : '0'}`,
    `${musicPlayerState ? '-100vh' : '0'}`,
    `${musicPlayerState ? '-100vh' : '0'}`,
    `${musicPlayerState ? '-100vh' : '0'}`,
    '-100vh',
  ],
  left: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 3vh',
  width: '100%',
  height: '10vh',
  borderRadius: [
    '27px 27px 0 0',
    '27px 27px 0 0',
    '27px 27px 0 0',
    '27px 27px 0 0',
    '0'],
  background: '#1B1A20',

  '& p': {
    fontSize: '1.6vw',
  },
}));

const MobileTitle = styled.div({
  width: '68%',
  height: '2em',
  overflow: 'hidden',
});

const MobileCloseButton = styled.button(() => mq({
  fontSize: 0,
  float: 'right',
  display: ['block', 'block', 'block', 'block', 'none'],
  width: '7.5vw',
  height: '7.5vw',
  border: 0,
  outline: 0,
  background: `url(${PlayerCloseIcon}) no-repeat`,
  backgroundSize: 'contain',
}));

export {
  MusicControlsWrap,
  HideVideo,
  PlayingNow,
  MusicImage,
  ProgressBar,
  Timeline,
  SoundControlAndTimelineWrap,
  SoundControlWrap,
  SoundControl,
  SoundButton,
  InfoBox,
  TitleBox,
  Title,
  Buttons,
  IconButton,
  MobileWrap,
  MobileTitle,
  MobileCloseButton,
};
