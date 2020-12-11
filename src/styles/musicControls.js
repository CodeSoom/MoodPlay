import styled from '@emotion/styled';

import {
  VolumeIcon,
  MuteIcon,
} from '../assets/images';

const MusicControlsWrap = styled.div({
  width: '342px',
});

const HideVideo = styled.div({
  position: 'fixed',
  top: '-5000px',
  opacity: 0,
});

const PlayingNow = styled.p({
  fontSize: '28px',
  fontWeight: '900',
  marginBottom: '46px',
});

const MusicImage = styled.div(({ url }) => ({
  marginBottom: '16px',
  width: '100%',
  height: '238px',
  borderRadius: '12px',
  background: `url(${url}) no-repeat`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

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
    color-stop(${value}%, #f89428),
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
  marginTop: '33px',
});

const IconButton = styled.button(({ url }) => ({
  fontSize: '0',
  marginRight: '4px',
  width: '48px',
  height: '48px',
  border: '0',
  background: `url(${url}) no-repeat`,
  backgroundSize: '48px',

  '&: focus': {
    outline: 0,
  },
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
};
