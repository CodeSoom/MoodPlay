import React from 'react';

import YouTube from 'react-youtube';

import styled from '@emotion/styled';

const HideVideo = styled.div({
  position: 'fixed',
  top: '-5000px',
  border: '1px solid red',
  opacity: 0,
});

const PlayerWrap = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '400px',
  height: '500px',
  border: '3px solid #888',
  borderRadius: '10px',

  background: '#000',
  color: '#fff',

  '& p': {
    marginTop: '50px',
    textAlign: 'center',
  },
  '& small': {
    color: '#999',
  },
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

export default function MusicPlayer({ selectedMusic }) {
  if (!selectedMusic) {
    return null;
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

  const opts = {
    playerVars: {
      start: 0,
      autoplay: 1,
    },
  };

  let player;

  const onReady = (event) => {
    event.target.seekTo(0, true);
    event.target.playVideo();
    player = event.target;
  };

  const onStateChange = (event) => {
    player = event.target;
  };

  const playVideo = () => {
    player.playVideo();
  };

  const pauseVideo = () => {
    player.pauseVideo();
  };

  const stopVideo = () => {
    player.seekTo(0, true);
    player.pauseVideo();
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
      <PlayerWrap>
        <img src={url} alt={description} />
        <p>{title}</p>
        <small>{`channel - ${channelTitle}`}</small>
        <Buttons>
          <button type="button" onClick={playVideo}>Play</button>
          <button type="button" onClick={pauseVideo}>Pause</button>
          <button type="button" onClick={stopVideo}>Stop</button>
        </Buttons>
      </PlayerWrap>
    </>
  );
}
