import React, { useState } from 'react';

import styled from '@emotion/styled';

import { PLAYLIST_CARD_WIDTH } from '../styles/constants';

import {
  CategoriesNextIcon,
  CategoriesPreviousIcon,
} from '../assets/images';

const Slider = styled.div({
  position: 'relative',
  marginTop: '30px',
  width: '98%',
  height: '20vh',
});

const Wrap = styled.div({
  position: 'relative',
  height: '20vh',
  overflowX: 'hidden',
});

const Cards = styled.ul(({ width, position }) => ({
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'flex',
  flexDirection: 'rows',
  width: `${width}px`,
  height: '20vh',
  transform: `translateX(-${position}px)`,
  transition: 'transform 0.5s ease',
}));

const Card = styled.li(({ selectState }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '0 4px',
  padding: '5vh 17px',
  width: `${selectState ? '255px' : '215px'}`,
  height: '20vh',
  border: `${selectState ? '3px solid #F89428' : 'none'}`,
  background: '#181818',
  borderRadius: '32px',
  cursor: 'pointer',

  '& h3': {
    fontSize: '20px',
    fontWeight: 400,
  },

  '& p': {
    color: '#bdbdbd',
    fontsize: '18px',
  },

  '&: hover': {
    width: '255px',
  },
}));

const SliderControlButton = styled.button(({ url, position }) => ({
  fontSize: '0',
  position: 'absolute',
  top: '50%',
  [position]: '-38px',
  width: '76px',
  height: '76px',
  border: '0',
  background: `url(${url}) no-repeat`,
  backgroundSize: '76px',
  transform: 'translateY(-50%)',

  '&: focus': {
    outline: 0,
  },

  '&: hover': {
    transform: 'translateY(-50%) scale(1.05)',
  },

  '&: active': {
    transform: 'translateY(-50%) scale(1.05)',
  },
}));

export default function PlaylistTitles({ myPlaylists, selectedPlaylist, onClick }) {
  const CARDS_WIDTH = PLAYLIST_CARD_WIDTH * (myPlaylists.length + 1);

  const [position, setPosition] = useState(0);

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
