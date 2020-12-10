import React, { useEffect, useState } from 'react';

import YouTube from '@u-wave/react-youtube';

import styled from '@emotion/styled';

import {
  PlayIcon,
  PauseIcon,
  VolumeIcon,
  MuteIcon,
  StoreIcon,
  BeforeSecondsIcon,
  AfterSecondsIcon,
} from '../assets/images';

import { getTime, getProgressTime } from '../utils/utils';

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
  marginRight: '7px',
  width: '48px',
  height: '48px',
  border: '0',
  background: `url(${url}) no-repeat`,
  backgroundSize: '48px',

  '&: focus': {
    outline: 0,
  },
}));

const MusicControls = React.memo(({
  selectedMusic, onStoreMusic,
}) => {
  if (!selectedMusic) {
    return (<p>재생중인 음악이 없습니다!</p>);
  }

  const {
    id: { videoId },
    snippet: {
      channelTitle,
      description,
      title,
      thumbnails: {
        medium: { url },
      },
    },
  } = selectedMusic;

  const [player, setPlayer] = useState();
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    let timeId;

    if (!paused) {
      timeId = setInterval(() => {
        setCurrentTime(player.getCurrentTime());
        setProgress((player.getCurrentTime() / player.getDuration()) * 100);
      }, 1000);
    }

    return () => {
      clearInterval(timeId);
    };
  }, [paused, player]);

  const handlePause = () => {
    setPaused(true);
  };

  const handlePlayerPause = () => {
    setPaused(true);
  };

  const handlePlay = () => {
    setPaused(false);
  };

  const handlePlayerPlay = () => {
    setPaused(false);
  };

  const handleVolume = (event) => {
    setVolume(parseFloat(event.target.value));
  };

  const handleMuted = () => {
    if (muted) {
      setMuted(false);
      return;
    }

    setMuted(true);
  };

  const handleProgess = (event) => {
    setProgress(+event.target.value);

    const progressTime = getProgressTime(duration, progress);

    player.seekTo(progressTime, true);
  };

  const handleBeforeTenSeconds = () => {
    if (player.getCurrentTime() <= 10) {
      setCurrentTime(0);
      player.seekTo(0, true);
      return;
    }

    setCurrentTime(player.getCurrentTime() - 10);
    player.seekTo(player.getCurrentTime() - 10, true);
  };

  const handleAfterTenSeconds = () => {
    setCurrentTime(player.getCurrentTime() + 10);

    player.seekTo(player.getCurrentTime() + 10, true);
  };

  const handleStateChange = (event) => {
    setPlayer(event.target);
    setDuration(player.getDuration());
  };

  const handleReady = (event) => {
    setPlayer(event.target);
    player.seekTo(0, true);
    setDuration(player.getDuration());
  };

  return (
    <MusicControlsWrap>
      <HideVideo>
        <YouTube
          video={videoId}
          width={640}
          height={480}
          autoplay
          controls={false}
          paused={paused}
          volume={volume}
          muted={muted}
          onPause={handlePlayerPause}
          onPlaying={handlePlayerPlay}
          onStateChange={handleStateChange}
          onReady={handleReady}
        />
      </HideVideo>
      <PlayingNow>Playing now</PlayingNow>
      <MusicImage url={url} alt={description} />

      <TimelineWrap>
        <ProgressBar
          type="range"
          value={progress}
          min={0}
          max={100}
          step={0.1}
          onChange={handleProgess}
          onClick={handleProgess}
        />
        <Timeline>{`${getTime(currentTime)} / ${getTime(duration)}`}</Timeline>
      </TimelineWrap>

      <SoundControlWrap>
        <SoundButton
          type="button"
          muted={muted}
          onClick={handleMuted}
        >
          Muted
        </SoundButton>

        <SoundControl
          type="range"
          value={volume}
          min={0}
          max={1}
          step={0.01}
          onChange={handleVolume}
        />
      </SoundControlWrap>
      <InfoBox>
        <TitleBox>
          <Title>{title}</Title>
        </TitleBox>
        <small>{`channel - ${channelTitle}`}</small>
      </InfoBox>

      <Buttons>
        <div>
          <IconButton
            type="button"
            url={BeforeSecondsIcon}
            onClick={handleBeforeTenSeconds}
          >
            before ten seconds
          </IconButton>
          {
            paused
              ? (
                <IconButton
                  type="button"
                  url={PlayIcon}
                  onClick={handlePlay}
                >
                  Play
                </IconButton>
              )
              : (
                <IconButton
                  type="button"
                  url={PauseIcon}
                  onClick={handlePause}
                >
                  Paused
                </IconButton>
              )
          }
          <IconButton
            type="button"
            url={AfterSecondsIcon}
            onClick={handleAfterTenSeconds}
          >
            After ten seconds
          </IconButton>
        </div>
        <IconButton
          type="button"
          url={StoreIcon}
          onClick={onStoreMusic}
        >
          저장
        </IconButton>
      </Buttons>
    </MusicControlsWrap>
  );
});

export default MusicControls;
