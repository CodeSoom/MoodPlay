export function get(key) {
  return (obj) => obj[key];
}

export function getSelectedMusicIndex(musicItems, selectedMusic) {
  const selectedMusicIndex = musicItems
    .findIndex((musicItem) => musicItem.id.videoId === selectedMusic.id.videoId);

  return selectedMusicIndex;
}

export function getUpNextItems(musicItems, selectedMusicIndex) {
  const upNextItems = new Array(3)
    .fill('')
    .map((a, i) => musicItems[
      selectedMusicIndex + 1 + i < musicItems.length
        ? selectedMusicIndex + 1 + i
        : -(musicItems.length - (selectedMusicIndex + 1 + i))
    ]);

  return upNextItems;
}
