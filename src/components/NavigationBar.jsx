import React from 'react';

import { Link } from 'react-router-dom';

import _ from 'lodash';

import styled from '@emotion/styled';

import facepaint from 'facepaint';

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

import { BACKGROUND_COLOR_BLACK, BACKGROUND_COLOR_GRAY } from '../styles/constants';

const mq = facepaint([
  '@media(min-width: 672px)',
  '@media(min-width: 1000px)',
]);

const IconItems = styled.ul(() => mq({
  display: 'flex',
  flexDirection: ['row', 'column', 'column'],
  justifyContent: 'center',
  alignItems: 'center',
  padding: ['0', '25px 25px', '25px 25px'],
  width: ['initial', '80%', '7vw'],
  height: ['100%', 'initial', 'initial'],
  borderRadius: '48px',
  background: [BACKGROUND_COLOR_BLACK, BACKGROUND_COLOR_GRAY],
}));

const IconItem = styled.li(() => mq({
  fontSize: ['0', '0.5vw', '0.9vw'],
  fontWeight: 'bold',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: ['0', '20px 0', '20px 0'],
}));

const Icon = styled.div(({
  url, hover, active, activeState,
}) => mq({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: [0, '6px', '6px'],
  marginLeft: ['5px', 0, 0],
  width: ['5.5vh', '48px', '48px'],
  height: ['5.5vh', '48px', '48px'],
  borderRadius: '10px',
  background: `url(${activeState ? active : url}) no-repeat`,
  backgroundSize: ['5.5vh', '48px', '48px'],

  '&: hover': {
    background: `url(${`${hover}`}) no-repeat`,
    backgroundSize: ['5.5vh', '48px', '48px'],
  },

  '&: active': {
    background: `url(${`${active}`}) no-repeat`,
    backgroundSize: ['5.5vh', '48px', '48px'],
  },
}));

const NavigationBar = React.memo(({ moodCategories, path }) => {
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
});

export default NavigationBar;
