import _ from 'lodash';

export function get(key) {
  return (obj) => obj[key];
}

export function getUpNextItems(musicItems, selectedMusic) {
  const selectedMusicIndex = _.findIndex(musicItems, ['id', selectedMusic.id]);

  const UPNEXT_ITEM_COUNT = 3;

  const upNextItemsLength = musicItems.length > UPNEXT_ITEM_COUNT
    ? UPNEXT_ITEM_COUNT
    : musicItems.length - 1;

  const upNextItems = _
    .fill(new Array(upNextItemsLength))
    .map((a, i) => musicItems[(selectedMusicIndex + 1 + i) % musicItems.length]);

  return upNextItems;
}

export function getTime(time) {
  const hours = Math.floor(time / 60 / 60);

  const minutes = Math.floor((time / 60) % 60) >= 10
    ? Math.floor((time / 60) % 60)
    : `0${Math.floor((time / 60) % 60)}`;

  const seconds = Math.floor(time % 60) >= 10
    ? Math.floor(time % 60)
    : `0${Math.floor(time % 60)}`;

  return `${hours}:${minutes}:${seconds}`;
}

export function getProgressTime(duration, progressRatio) {
  return (duration / 100) * progressRatio;
}

export function getPlaylistMusic(myPlaylists, selectedPlaylist) {
  const playlistMusic = myPlaylists
    .find(({ playlistTitle }) => playlistTitle === selectedPlaylist).playlists;
  return playlistMusic;
}
