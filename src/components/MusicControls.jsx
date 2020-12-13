import React, { useEffect, useState } from 'react';

import _ from 'lodash';

import YouTube from '@u-wave/react-youtube';

import {
  PlayIcon,
  PauseIcon,
  StoreIcon,
  BeforeSecondsIcon,
  AfterSecondsIcon,
  PreviousMusicIcon,
  NextMusicIcon,
  EmptyMusicImage,
} from '../assets/images';

import {
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
} from '../styles/musicControls';

import {
  getTime,
  getProgressTime,
} from '../utils/utils';

const MusicControls = React.memo(({
  nowPlayingMusicItems,
  selectedMusic,
  musicPlayerState,
  onClickMusic,
  onClickPlayer,
  onStoreMusic,
}) => {
  const handleClickPlayer = (event) => {
    if (event.currentTarget === event.target) {
      onClickPlayer();
    }
  };

  if (_.isNull(selectedMusic)) {
    return (
      <MusicControlsWrap>
        <MobileCloseButton
          type="button"
          onClick={onClickPlayer}
        >
          Close
        </MobileCloseButton>
        <PlayingNow>Playing now</PlayingNow>
        <MusicImage url={EmptyMusicImage} />

        <TimelineWrap>
          <ProgressBar
            type="range"
            value={0}
            onChange={() => { }}
          />
          <Timeline>0:00:00</Timeline>
        </TimelineWrap>

        <SoundControlWrap>
          <SoundButton
            type="button"
          >
            Muted
          </SoundButton>

          <SoundControl
            type="range"
            value="0"
            onChange={() => { }}
          />
        </SoundControlWrap>
        <InfoBox>
          <TitleBox>
            <Title>재생중인 음악이 없습니다.</Title>
          </TitleBox>
        </InfoBox>

        <Buttons>
          <div>
            <IconButton
              type="button"
              url={BeforeSecondsIcon}
            >
              Before ten seconds
            </IconButton>
            <IconButton
              type="button"
              url={PreviousMusicIcon}
            >
              Previous music
            </IconButton>
            <IconButton
              type="button"
              url={PlayIcon}
            >
              Play
            </IconButton>
            <IconButton
              type="button"
              url={NextMusicIcon}
            >
              Next music
            </IconButton>
            <IconButton
              type="button"
              url={AfterSecondsIcon}
            >
              After ten seconds
            </IconButton>
          </div>
          <IconButton
            type="button"
            url={StoreIcon}
          >
            저장
          </IconButton>
        </Buttons>
        <MobileWrap
          musicPlayerState={musicPlayerState}
          onClick={handleClickPlayer}
        >
          <p>재생중인 음악이 없습니다.</p>
          <div>
            <IconButton
              type="button"
              url={PreviousMusicIcon}
            >
              Previous music
            </IconButton>
            <IconButton
              type="button"
              url={PlayIcon}
            >
              Play
            </IconButton>
            <IconButton
              type="button"
              url={NextMusicIcon}
            >
              Next music
            </IconButton>
          </div>
        </MobileWrap>
      </MusicControlsWrap>
    );
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

  const handleSelectPreviousMusic = () => {
    const selectedMusicIndex = _.findIndex(nowPlayingMusicItems, ['id', selectedMusic.id]);

    if (selectedMusicIndex === 0) {
      onClickMusic(nowPlayingMusicItems[nowPlayingMusicItems.length - 1]);
      return;
    }

    onClickMusic(nowPlayingMusicItems[selectedMusicIndex - 1]);
  };

  const handleSelectNextMusic = () => {
    const selectedMusicIndex = _.findIndex(nowPlayingMusicItems, ['id', selectedMusic.id]);

    if (selectedMusicIndex === nowPlayingMusicItems.length - 1) {
      onClickMusic(nowPlayingMusicItems[0]);
      return;
    }

    onClickMusic(nowPlayingMusicItems[selectedMusicIndex + 1]);
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
      <MobileCloseButton
        type="button"
        onClick={onClickPlayer}
      >
        Close
      </MobileCloseButton>
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
            Before ten seconds
          </IconButton>
          <IconButton
            type="button"
            url={PreviousMusicIcon}
            onClick={handleSelectPreviousMusic}
          >
            Previous music
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
            url={NextMusicIcon}
            onClick={handleSelectNextMusic}
          >
            Next music
          </IconButton>
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

      <MobileWrap
        musicPlayerState={musicPlayerState}
        onClick={handleClickPlayer}
      >
        <MobileTitle>
          <Title
            onClick={handleClickPlayer}
          >
            {title}
          </Title>
        </MobileTitle>
        <div>
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
            url={NextMusicIcon}
            onClick={handleSelectNextMusic}
          >
            Next music
          </IconButton>
        </div>
      </MobileWrap>
    </MusicControlsWrap>
  );
});

export default MusicControls;
