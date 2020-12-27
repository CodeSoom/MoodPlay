import React, { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import facepaint from 'facepaint';

import MusicItems from '../components/MusicItems';
import SearchBar from '../components/SearchBar';
import Recommendation from '../components/Recommendation';

import { get } from '../utils/utils';

import { BACKGROUND_COLOR_BLACK, MAIN_FONT_COLOR } from '../styles/constants';

import {
  setSearchTextInput,
  setSelectedMusic,
  setNowPlayingMusicItems,
  loadSearchMusic,
} from '../redux/slice';

const mq = facepaint([
  '@media(min-width: 1025px)',
  '@media(min-width: 1550px)',
]);

const Wrap = styled.div(() => mq({
  position: 'fixed',
  top: 0,
  left: [0, '176px', '176px'],
  padding: ['13vh 10vw', '150px  82px  0 82px', '150px  82px  0 82px'],
  width: ['100vw', 'calc(100vw - 602px)', 'calc(100vw - 602px)'],
  height: '100vh',
  background: BACKGROUND_COLOR_BLACK,
  color: MAIN_FONT_COLOR,
}));

const SearchMusicTitle = styled.h1(() => mq({
  fontSize: ['2.3vh', '28px', '28px'],
  fontWeight: '900',
  textAlign: 'center',
}));

const SearchMusicContainer = React.memo(() => {
  const dispatch = useDispatch();

  const searchTextInput = useSelector(get('searchTextInput'));
  const searchMusic = useSelector(get('searchMusic'));

  const handleChangeInput = (text) => {
    dispatch(setSearchTextInput(text));
  };

  const handleSearchMusic = () => {
    dispatch(loadSearchMusic());
  };

  const handleSelectMusic = useCallback((selectedMusic, musicItems) => {
    dispatch(setSelectedMusic(selectedMusic));

    dispatch(setNowPlayingMusicItems(musicItems));
  }, [dispatch]);

  return (
    <Wrap>
      <SearchMusicTitle>
        원하는 플레이리스트가 없다면 더 찾아볼까요?
      </SearchMusicTitle>
      <SearchBar
        searchTextInput={searchTextInput}
        onChange={handleChangeInput}
        onClick={handleSearchMusic}
      />
      {
        searchMusic.length
          ? (
            <MusicItems
              music={searchMusic}
              musicItemsTitle=""
              onClick={handleSelectMusic}
            />
          )
          : (
            <Recommendation />
          )
      }
    </Wrap>
  );
});

export default SearchMusicContainer;
