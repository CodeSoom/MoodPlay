import React, { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import facepaint from 'facepaint';

import {
  loadMusic,
  setSelectedCategory,
  setSelectedMusic,
  setNowPlayingMusicItems,
} from '../redux/slice';

import MusicCategories from '../components/MusicCategories';
import MusicItems from '../components/MusicItems';

import { get } from '../utils/utils';

const mq = facepaint([
  '@media(min-width: 672px)',
]);

const Wrap = styled.div(() => mq({
  position: 'fixed',
  top: 0,
  left: [0, '12vw'],
  display: 'flex',
  flexDirection: 'column',
  padding: ['13vh 10vw', '68px 95px'],
  width: ['100vw', 'calc(88vw - 438px)'],
  height: '100vh',
  background: '#0f0f0f',
  color: '#fff',
}));

const MusicCategoriesTitle = styled.h2(() => mq({
  fontSize: ['2.3vh', '3vh'],
  fontWeight: '900',
}));

const MusicCategoriesContainer = React.memo(() => {
  const dispatch = useDispatch();

  const moodCategories = useSelector(get('moodCategories'));
  const selectedCategory = useSelector(get('selectedCategory'));
  const selectedCategoryMusic = useSelector(get(selectedCategory));

  const handleClickCategories = useCallback(({ title, tag1, tag2 }) => {
    dispatch(setSelectedCategory(title));

    dispatch(loadMusic({ title, tag1, tag2 }));
  }, [dispatch]);

  const handleSelectMusic = useCallback((selectedMusic, musicItems) => {
    dispatch(setSelectedMusic(selectedMusic));

    dispatch(setNowPlayingMusicItems(musicItems));
  }, [dispatch]);

  return (
    <Wrap>
      <MusicCategoriesTitle>
        기분에 어울리는 장르들이에요!
      </MusicCategoriesTitle>
      <MusicCategories
        moodCategories={moodCategories}
        selectedCategory={selectedCategory}
        onClick={handleClickCategories}
      />
      {
        selectedCategoryMusic
          ? (
            <MusicItems
              music={selectedCategoryMusic}
              musicItemsTitle={selectedCategory}
              onClick={handleSelectMusic}
            />
          )

          : (<p>카테고리를 선택해주세요</p>)
      }
    </Wrap>
  );
});

export default MusicCategoriesContainer;
