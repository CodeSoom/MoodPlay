import React from 'react';

import styled from '@emotion/styled';

import facepaint from 'facepaint';

import { SearchMusicIcon } from '../assets/images';

const mq = facepaint([
  '@media(min-width: 1025px)',
  '@media(min-width: 1550px)',
]);

const SerchBarWrap = styled.div(() => mq({
  display: 'flex',
  flexDrection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '14px auto',
  padding: ['0 1vw', '0 1vw', '0 50px'],
  width: ['80%', '90%', '580px'],
  height: ['9vh', '9vh', '66px'],
  background: '#29292F',
  borderRadius: '48px',
}));

const SearchInput = styled.input(() => mq({
  fontSize: ['2vh', '18px', '18px'],
  width: ['63%', '80%', '430px'],
  height: ['7vh', '5vh', '50px'],
  border: '0',
  outline: '0',
  background: 'transparent',
  color: '#fff',
}));

const SearchButton = styled.button(() => mq({
  fontSize: '0',
  width: ['7vh', '48px', '48px'],
  height: ['7vh', '48px', '48px'],
  border: '0',
  outline: '0',
  color: '#fff',
  background: `url(${SearchMusicIcon}) no-repeat`,
  backgroundSize: ['7vh', '48px', '48px'],
  cursor: 'pointer',
}));

const SearchBar = React.memo(({
  searchTextInput, onChange, onClick,
}) => {
  const handleChange = (event) => {
    const text = event.target.value;

    onChange(text);
  };

  return (
    <SerchBarWrap>
      <SearchInput
        type="text"
        value={searchTextInput}
        placeholder="검색어를 입력해주세요"
        onChange={handleChange}
      />
      <SearchButton
        type="button"
        onClick={onClick}
      >
        검색
      </SearchButton>
    </SerchBarWrap>
  );
});

export default SearchBar;
