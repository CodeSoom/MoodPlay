import React, { useState } from 'react';

import {
  Slider,
  Wrap,
  Cards,
  Card,
  SliderControlButton,
} from '../styles/slider';

import { PLAYLIST_CARD_WIDTH } from '../styles/constants';

import {
  CategoriesNextIcon,
  CategoriesPreviousIcon,
} from '../assets/images';

export default function PlaylistTitles({
  myPlaylists, selectedPlaylist, onClick,
}) {
  const [position, setPosition] = useState(0);

  const CARDS_WIDTH = PLAYLIST_CARD_WIDTH * (myPlaylists.length + 1);

  const handleClickPlaylistTitle = (playlistTitle, index) => {
    onClick((playlistTitle));
    setPosition((PLAYLIST_CARD_WIDTH + 4) * index);
  };

  const handleClickNext = () => {
    if (position > CARDS_WIDTH - (PLAYLIST_CARD_WIDTH * 6)) {
      setPosition(position);
      return;
    }

    setPosition(position + (PLAYLIST_CARD_WIDTH * 2));
  };

  const handleClickPrevious = () => {
    if (position < 2) {
      setPosition(0);
      return;
    }

    setPosition(position - (PLAYLIST_CARD_WIDTH * 2));
  };

  return (
    <Slider>
      <Wrap>
        <Cards
          width={CARDS_WIDTH}
          position={position}
          data-testid="cards"
        >
          {myPlaylists.map(({ playlistTitle }, index) => (
            <Card
              key={playlistTitle}
              data-testid={playlistTitle}
              width={PLAYLIST_CARD_WIDTH}
              selectState={selectedPlaylist === playlistTitle}
              onClick={() => handleClickPlaylistTitle(playlistTitle, index)}
            >
              <h3>{playlistTitle}</h3>
            </Card>
          ))}
        </Cards>
      </Wrap>

      <SliderControlButton
        type="button"
        onClick={handleClickNext}
        url={CategoriesNextIcon}
        position="right"
      >
        Next
      </SliderControlButton>
      <SliderControlButton
        type="button"
        url={CategoriesPreviousIcon}
        onClick={handleClickPrevious}
        position="left"
      >
        Previous
      </SliderControlButton>
    </Slider>
  );
}
