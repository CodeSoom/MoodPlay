import React, { useEffect, useState } from 'react';

import YouTube from 'react-youtube';

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

  const [music, setMusic] = useState(selectedMusic);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setMusic(selectedMusic);
  }, [selectedMusic]);

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
  } = music;

  const opts = {
    playerVars: {
      start: 0,
      autoplay: 1,
    },
  };

  let player;

  const onReady = (event) => {
    player = event.target;
    setDuration(player.getDuration());

    player.seekTo(0, true);
    player.playVideo();
  };

  const onStateChange = (event) => {
    player = event.target;
    setDuration(player.getDuration());
  };

  const playVideo = () => {
    player.playVideo();
  };

  const pauseVideo = () => {
    player.pauseVideo();
  };

  const stopVideo = () => {
    if (player.getCurrentTime() < 5) {
      player.seekTo(0, true);
      player.pauseVideo();
      return;
    }

    player.seekTo(0, true);
    player.playVideo();
  };

  return (
    <>
      <HideVideo>
        <YouTube
          title="youtube"
          videoId={videoId}
          opts={opts}
          onReady={onReady}
          onStateChange={onStateChange}
        />
      </HideVideo>
      <img src={url} alt={description} />
      <p>{title}</p>
      <small>{`channel - ${channelTitle}`}</small>
      <small>{`duration: ${getTime(duration)}`}</small>
      <Buttons>
        <button type="button" onClick={playVideo}>Play</button>
        <button type="button" onClick={pauseVideo}>Pause</button>
        <button type="button" onClick={stopVideo}>Stop</button>
      </Buttons>
    </>
  );
});

export default MusicControls;
