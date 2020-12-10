export function get(key) {
  return (obj) => obj[key];
}

export function getSelectedMusicIndex(musicItems, selectedMusic) {
  const selectedMusicIndex = musicItems
    .findIndex((musicItem) => musicItem.id.videoId === selectedMusic.id.videoId);

  return selectedMusicIndex;
}

export function getUpNextItems(musicItems, selectedMusicIndex) {
  const UPNEXT_ITEM_COUNT = 3;

  const newArray = musicItems.length > UPNEXT_ITEM_COUNT
    ? new Array(UPNEXT_ITEM_COUNT) : new Array(musicItems.length - 1);

  const upNextItems = newArray
    .fill('')
    .map((a, i) => musicItems[
      selectedMusicIndex + 1 + i < musicItems.length
        ? selectedMusicIndex + 1 + i
        : -(musicItems.length - (selectedMusicIndex + 1 + i))
    ]);

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
