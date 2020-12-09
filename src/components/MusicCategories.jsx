import React, { useState } from 'react';

import styled from '@emotion/styled';

import { CARD_WIDTH } from '../styles/constants';

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
  width: `${selectState ? '215px' : '137px'}`,
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
    width: '215px',
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

const MusicCategories = React.memo(({
  moodCategories, selectedCategory, onClick,
}) => {
  const CARDS_WIDTH = CARD_WIDTH * (moodCategories.length + 1);

  const [position, setPosition] = useState(0);

  const tags = {
    calm: '차분한',
    uplifting: '신나는',
    happy: '밝은',
    dark: '어두운',
  };

  const handleClickNextCategories = () => {
    if (position > CARDS_WIDTH - (CARD_WIDTH * 5)) {
      setPosition(position);
      return;
    }

    setPosition(position + (CARD_WIDTH * 2));
  };

  const handleClickPreviousCategories = () => {
    if (position < 2) {
      setPosition(0);
      return;
    }

    setPosition(position - (CARD_WIDTH * 2));
  };

  const handleClickCategory = ({ title, tag1, tag2 }, index) => {
    onClick({ title, tag1, tag2 });
    setPosition(CARD_WIDTH * index);
  };

  return (
    <Slider>
      <Wrap>
        <Cards
          width={CARDS_WIDTH}
          position={position}
          data-testid="cards"
        >
          {
            moodCategories.map(([title, tag1, tag2], index) => (
              <Card
                key={title}
                index={index}
                data-testid={title}
                selectState={selectedCategory === title}
                onClick={() => handleClickCategory({ title, tag1, tag2 }, index)}
              >
                <h3>{title}</h3>
                <p>
                  #
                  {tags[tag1]}
                  {' '}
                  {tag2 ? `#${tags[tag2]}` : ''}
                </p>
              </Card>
            ))
          }
        </Cards>
      </Wrap>

      <SliderControlButton
        type="button"
        onClick={handleClickNextCategories}
        url={CategoriesNextIcon}
        position="right"
      >
        Next
      </SliderControlButton>
      <SliderControlButton
        type="button"
        url={CategoriesPreviousIcon}
        onClick={handleClickPreviousCategories}
        position="left"
      >
        Previous
      </SliderControlButton>
    </Slider>
  );
});

export default MusicCategories;
