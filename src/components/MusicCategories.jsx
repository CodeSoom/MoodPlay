import React, { useState, useRef } from 'react';

import {
  Slider,
  Wrap,
  Cards,
  Card,
  SliderControlButton,
} from '../styles/slider';

import { CATEGORIES_CARD_WIDTH } from '../styles/constants';

import {
  CategoriesNextIcon,
  CategoriesPreviousIcon,
} from '../assets/images';

const MusicCategories = React.memo(({
  moodCategories, selectedCategory, onClick,
}) => {
  const CARDS_WIDTH = CATEGORIES_CARD_WIDTH * (moodCategories.length + 1);
  const sliderRef = useRef();
  const cardsRef = useRef();

  const [position, setPosition] = useState(0);

  const tags = {
    calm: '차분한',
    uplifting: '신나는',
    happy: '밝은',
    dark: '어두운',
  };

  const handleClickNextCategories = () => {
    if (position > cardsRef.current.offsetWidth - sliderRef.current.offsetWidth) {
      setPosition(position);
      return;
    }

    setPosition(position + (CATEGORIES_CARD_WIDTH * 2));
  };

  const handleClickPreviousCategories = () => {
    if (position < 2) {
      setPosition(0);
      return;
    }

    setPosition(position - (CATEGORIES_CARD_WIDTH * 2));
  };

  const handleClickCategory = ({ title, tag1, tag2 }, index) => {
    onClick({ title, tag1, tag2 });
    setPosition(CATEGORIES_CARD_WIDTH * index);
  };

  return (
    <Slider
      ref={sliderRef}
    >
      <Wrap>
        <Cards
          ref={cardsRef}
          width={CARDS_WIDTH}
          position={position}
          data-testid="cards"
        >
          {
            moodCategories.map(([title, tag1, tag2], index) => (
              <Card
                key={title}
                index={index}
                width={CATEGORIES_CARD_WIDTH}
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
