import React, { useEffect, useState } from 'react';

import YouTube from '@u-wave/react-youtube';

import styled from '@emotion/styled';

import {
  PlayIcon,
  PauseIcon,
  VolumeIcon,
  MuteIcon,
  StoreIcon,
} from './assets/images';

import { getTime, getProgressTime } from './utils';

const HideVideo = styled.div({
  position: 'fixed',
  top: '-5000px',
  border: '1px solid red',
  opacity: 0,
});

const Buttons = styled.div({
  display: 'flex',
  flexDirection: 'rows',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '30px',
});

const SoundControlWrap = styled.div({
  display: 'flex',
  flexDirection: 'rows',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '5px',
});

const PlayButton = styled.button({
  background: `url(${PlayIcon}) no-repeat`,
  backgroundSize: '50px',
  width: '50px',
  height: '50px',
  border: '0',
  color: 'transparent',
});

const PauseButton = styled.button({
  background: `url(${PauseIcon}) no-repeat`,
  backgroundSize: '50px',
  width: '50px',
  height: '50px',
  border: '0',
  color: 'transparent',
});

const SoundButton = styled.button(({ muted }) => ({
  background: `url(${muted ? MuteIcon : VolumeIcon}) no-repeat`,
  backgroundSize: '15px',
  width: '15px',
  height: '15px',
  border: '0',
  fontSize: '0',
  marginRight: '5px',
}));

const StoreButton = styled.button({
  background: `url(${StoreIcon}) no-repeat`,
  backgroundSize: '48px',
  width: '48px',
  height: '48px',
  border: '0',
  fontSize: '0',

  '&: focus': {
    outline: 0,
  },
});

const ProgressBar = styled.input(({ value }) => ({
  width: '300px',
  height: '6px',
  backgroundImage: `-webkit-gradient(linear,
    left top, 
    right top, 
    color-stop(${value}%, red),
    color-stop(${value}%, #f0f0f0))`,

  '&: focus': {
    outline: '0',
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
    <>
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

      <img src={url} alt={description} />
      <p>{title}</p>
      <small>{`channel - ${channelTitle}`}</small>
      <p>{`${getTime(currentTime)} / ${getTime(duration)}`}</p>

      <ProgressBar
        type="range"
        value={progress}
        min={0}
        max={100}
        step={0.1}
        onChange={handleProgess}
        onClick={handleProgess}
      />

      <SoundControlWrap>
        <SoundButton
          type="button"
          muted={muted}
          onClick={handleMuted}
        >
          Muted
        </SoundButton>
        <input
          type="range"
          value={volume}
          min={0}
          max={1}
          step={0.01}
          onChange={handleVolume}
        />
      </SoundControlWrap>
      <StoreButton type="button" onClick={onStoreMusic}>저장</StoreButton>

      <Buttons>
        {
          paused
            ? (
              <PlayButton
                type="button"
                onClick={handlePlay}
              >
                Play
              </PlayButton>
            )
            : (
              <PauseButton
                type="button"
                onClick={handlePause}
              >
                Paused
              </PauseButton>
            )
        }
      </Buttons>
    </>
  );
});

export default MusicControls;
