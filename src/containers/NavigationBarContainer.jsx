import React from 'react';

import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import NavigationBar from '../components/NavigationBar';

import { get } from '../utils/utils';

import { LogoIcon } from '../assets/images';

import { BACKGROUND_COLOR_DARKGRAY } from '../styles/constants';

function NavigationBarContainer() {
  const moodCategories = useSelector(get('moodCategories'));

  const Wrap = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '53px 15px',
    width: '234px',
    height: '100vh',
    borderRadius: '48px 0 0 48px',
    background: BACKGROUND_COLOR_DARKGRAY,
    color: '#fff',
  });

  const Logo = styled.div({
    fontSize: '0',
    marginBottom: '12vh',
    width: '128px',
    height: '128px',
    background: `url(${LogoIcon}) no-repeat`,
    backgroundSize: '128px',
  });

  return (
    <Wrap>
      <Logo>Moodplay</Logo>
      <NavigationBar
        moodCategories={moodCategories}
      />
    </Wrap>
  );
}

export default NavigationBarContainer;
