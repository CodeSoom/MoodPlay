import React from 'react';

import styled from '@emotion/styled';

import { useSelector, useDispatch } from 'react-redux';

import {
  loadMusic,
  setSelectedCategory,
  setSelectedMusic,
} from './slice';

import MusicCategories from './MusicCategories';
import MusicItems from './MusicItems';
import MusicPlayer from './MusicPlayer';

import { get } from './utils';

const Wrap = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
});

export default function MusicCategoriesContainer() {
  const dispatch = useDispatch();

  const moodCategories = useSelector(get('moodCategories'));
  const selectedCategory = useSelector(get('selectedCategory'));
  const selectedCategoryMusic = useSelector(get(selectedCategory));
  const selectedMusic = useSelector(get('selectedMusic'));

  const handleClickCategories = ({ title, tag1, tag2 }) => {
    dispatch(setSelectedCategory(title));

    dispatch(loadMusic({ title, tag: tag1 }));

    if (tag2) {
      dispatch(loadMusic({ title, tag: tag2 }));
    }
  };

  const handleSelectMusic = (music) => {
    dispatch(setSelectedMusic(music));
  };

  return (
    <Wrap>
      <h2>기분에 어울리는 장르들이에요!</h2>
      <MusicCategories
        moodCategories={moodCategories}
        onClick={handleClickCategories}
      />
      {
        selectedCategoryMusic
          ? (<MusicItems music={selectedCategoryMusic} onClick={handleSelectMusic} />)
          : (<p>카테고리를 선택해주세요</p>)
      }
      <MusicPlayer selectedMusic={selectedMusic} />
    </Wrap>
  );
}
