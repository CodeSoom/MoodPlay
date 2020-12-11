import React from 'react';

import { Link } from 'react-router-dom';

import _ from 'lodash';

import styled from '@emotion/styled';

import {
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

import { BACKGROUND_COLOR_GRAY } from '../styles/constants';

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
  fontsize: '16px',
  fontWeight: 'bold',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '40px',
});

const Icon = styled.div(({
  url, hover, active, activeState,
}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '6px',
  width: '48px',
  height: '48px',
  borderRadius: '10px',
  background: `url(${activeState ? active : url}) no-repeat`,
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

function NavigationBar({ moodCategories, path }) {
  const menu = _.isEmpty(moodCategories)
    ? [{
      title: '무드선택',
      link: '/',
      icon: MoodControllerIcon,
      iconHover: MoodControllerIconHover,
      iconActive: MoodControllerIconActive,
    },
    {
      title: '마이플레이',
      link: '/myplay',
      icon: MyPlayIcon,
      iconHover: MyPlayIconHover,
      iconActive: MyPlayIconActive,
    }]
    : [{
      title: '무드선택',
      link: '/',
      icon: MoodControllerIcon,
      iconHover: MoodControllerIconHover,
      iconActive: MoodControllerIconActive,
    },
    {
      title: '홈',
      link: '/moodplay',
      icon: HomeIcon,
      iconHover: HomeIconHover,
      iconActive: HomeIconActive,
    },
    {
      title: '마이플레이',
      link: '/myplay',
      icon: MyPlayIcon,
      iconHover: MyPlayIconHover,
      iconActive: MyPlayIconActive,
    }];

  return (
    <IconItems>
      {
        menu.map(({
          title, link, icon, iconHover, iconActive,
        }) => ((
          <IconItem
            key={title}
          >
            <Link to={link}>
              <Icon
                activeState={link === path}
                url={icon}
                hover={iconHover}
                active={iconActive}
              />
            </Link>
            {title}
          </IconItem>
        )))
      }
    </IconItems>
  );
}

export default NavigationBar;
