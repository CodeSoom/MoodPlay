import React, { useCallback } from 'react';

import styled from '@emotion/styled';

import { useSelector, useDispatch } from 'react-redux';

import {
  loadMusic,
  setSelectedCategory,
  setSelectedMusic,
  setNowPlayingMusicItems,
} from './slice';

import MusicCategories from './MusicCategories';
import MusicItems from './MusicItems';

import { get } from './utils';

const Wrap = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const MusicCategoriesContainer = React.memo(() => {
  const dispatch = useDispatch();

  const moodCategories = useSelector(get('moodCategories'));
  const selectedCategory = useSelector(get('selectedCategory'));
  const selectedCategoryMusic = useSelector(get(selectedCategory));

  const handleClickCategories = useCallback(({ title, tag1, tag2 }) => {
    dispatch(setSelectedCategory(title));

    dispatch(loadMusic({ title, tag: tag1 }));

    if (tag2) {
      dispatch(loadMusic({ title, tag: tag2 }));
    }
  }, [dispatch]);

  const handleSelectMusic = useCallback((selectedMusic, musicItems) => {
    dispatch(setSelectedMusic(selectedMusic));

    dispatch(setNowPlayingMusicItems(musicItems));
  }, [dispatch]);

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
    </Wrap>
  );
});

export default MusicCategoriesContainer;
