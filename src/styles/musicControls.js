import styled from '@emotion/styled';

import facepaint from 'facepaint';

import {
  VolumeIcon,
  MuteIcon,
  PlayerCloseIcon,
} from '../assets/images';

import { POINT_COLOR } from './constants';

const mq = facepaint([
  '@media(min-width: 350px)',
  '@media(min-width: 400px)',
  '@media(min-width: 438px)',
  '@media(min-width: 672px)',
]);

const MusicControlsWrap = styled.div(() => mq({
  width: ['70%', '70%', '70%', '342px', '342px'],
}));

const HideVideo = styled.div({
  position: 'fixed',
  top: '-5000px',
  opacity: 0,
});

const PlayingNow = styled.p(() => mq({
  fontSize: ['1.2em', '1.6em', '2em', '2em', '2em'],
  fontWeight: '900',
  marginBottom: '1em',
}));

const MusicImage = styled.div(({ url }) => (() => mq({
  marginBottom: '16px',
  width: '100%',
  height: ['150px', '190px', '200px', '238px', '238px'],
  borderRadius: '12px',
  background: `url(${url}) no-repeat`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})));

const TimelineWrap = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const ProgressBar = styled.input(({ value }) => `
  display: block;
  width: 100%;
  height: 7px;
  border-radius: 7px;

  background-image: -webkit-gradient(linear,
    left top, 
    right top, 
    color-stop(${value}%, ${POINT_COLOR}),
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
  marginTop: '5px',
});

const SoundControlWrap = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
});

const SoundControl = styled.input(({ value }) => `
  display: block;
  width: '149px';
  height: 7px;
  border-radius: 7px;

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
  marginRight: '5px',
  width: '14px',
  height: '10px',
  border: '0',
  background: `url(${muted ? MuteIcon : VolumeIcon}) no-repeat`,
  backgroundSize: '14px',

  '&: focus': {
    outline: 0,
  },
}));

const InfoBox = styled.div({
  marginTop: '35px',
  width: '100%',

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
  TimelineWrap,
  ProgressBar,
  Timeline,
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
