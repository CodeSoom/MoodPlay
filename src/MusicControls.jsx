import React, { useState } from 'react';

import YouTube from '@u-wave/react-youtube';

import styled from '@emotion/styled';

import { getTime } from './utils';

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

  '& button': {
    border: '0',
    borderRadius: '7px',
    padding: '10px 20px',
    margin: '0 10px',
    background: '#f0f0f0',
  },
});

const MusicControls = React.memo(({ selectedMusic }) => {
  if (!selectedMusic) {
    return (
      <>
        <p>재생중인 음악이 없습니다!</p>
      </>
    );
  }

  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(false);
  const [player, setPlayer] = useState();

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
          onPause={handlePlayerPause}
          onPlaying={handlePlayerPlay}
          onStateChange={handleStateChange}
          onReady={handleReady}
        />
      </HideVideo>

      <img src={url} alt={description} />
      <p>{title}</p>
      <small>{`channel - ${channelTitle}`}</small>
      <small>{`duration: ${getTime(duration)}`}</small>

      <Buttons>
        <button type="button" onClick={handlePlay}>Play</button>
        <button type="button" onClick={handlePause}>Paused</button>
      </Buttons>
    </>
  );
});

export default MusicControls;
