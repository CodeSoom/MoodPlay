import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import {
  LogoIcon,
  HomeIcon,
  MoodControllerIcon,
  MyPlayIcon,
  HomeIconHover,
  MoodControllerIconHover,
  MyPlayIconHover,
  HomeIconActive,
  MoodControllerIconActive,
  MyPlayIconActive,
} from '../assets/images';

import {
  BACKGROUND_COLOR_DARKGRAY,
  BACKGROUND_COLOR_GRAY,
} from '../styles/constants';

const Wrap = styled.div({
  fontsize: '16px',
  fontWeight: 'bold',
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
  marginBottom: '12vh',
  width: '128px',
  height: '128px',
  background: `url(${LogoIcon}) no-repeat`,
  backgroundSize: '128px',
});

const IconItems = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '40px',
  width: '128px',
  borderRadius: '48px',
  background: BACKGROUND_COLOR_GRAY,
});

const IconItem = styled.li({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '40px',
});

const Icon = styled.div(({ url, hover, active }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '6px',
  width: '48px',
  height: '48px',
  borderRadius: '10px',
  background: `url(${url}) no-repeat`,
  backgroundSize: '48px',

  '&: hover': {
    background: `url(${`${hover}`}) no-repeat`,
    backgroundSize: '48px',
  },

  '&: active': {
    background: `url(${`${active}`}) no-repeat`,
    backgroundSize: '48px',
  },
}));

function NavigationBar() {
  return (
    <Wrap>
      <Logo />
      <IconItems>
        <IconItem>
          <Link to="/">
            <Icon
              url={MoodControllerIcon}
              hover={MoodControllerIconHover}
              active={MoodControllerIconActive}
            />
          </Link>
          무드선택
        </IconItem>

        <IconItem>
          <Link to="/moodplay">
            <Icon
              url={HomeIcon}
              hover={HomeIconHover}
              active={HomeIconActive}
            />
          </Link>
          홈
        </IconItem>

        <IconItem>
          <Link to="/myplay">
            <Icon
              url={MyPlayIcon}
              hover={MyPlayIconHover}
              active={MyPlayIconActive}
            />
          </Link>
          마이플레이
        </IconItem>
      </IconItems>
    </Wrap>
  );
}

export default NavigationBar;
