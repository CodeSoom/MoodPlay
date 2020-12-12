import React from 'react';

import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import facepaint from 'facepaint';

import NavigationBar from '../components/NavigationBar';

import { get } from '../utils/utils';

import { LogoIcon } from '../assets/images';

import { BACKGROUND_COLOR_DARKGRAY } from '../styles/constants';

const mq = facepaint([
  '@media(min-width: 672px)',
  '@media(min-width: 1000px)',
]);

const Wrap = styled.div(() => mq({
  position: 'fixed',
  bottom: 0,
  display: 'flex',
  flexDirection: ['row', 'column', 'column'],
  alignItems: 'center',
  justifyContent: ['space-between', 'flex-start', 'flex-start'],
  padding: ['1vh 15%', '53px 15px', '53px 15px'],
  width: ['100vw', '120px', '12vw'],
  height: ['10vh', '100vh', '100vh'],
  background: BACKGROUND_COLOR_DARKGRAY,
  color: '#fff',
  zIndex: 3,
}));

const Logo = styled.div(() => mq({
  fontSize: '0',
  marginBottom: [0, '12vh', '12vh'],
  width: ['8vh', '70px', '7vw'],
  height: ['8vh', '70px', '7vw'],
  background: `url(${LogoIcon}) no-repeat`,
  backgroundSize: ['8vh', '70px', '7vw'],
}));

function NavigationBarContainer() {
  const moodCategories = useSelector(get('moodCategories'));

  const path = useLocation().pathname;

  return (
    <Wrap>
      <Logo>Moodplay</Logo>
      <NavigationBar
        moodCategories={moodCategories}
        path={path}
      />
    </Wrap>
  );
}

export default NavigationBarContainer;
