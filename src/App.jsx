import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import './assets/css/global.css';

import { loadItem } from './sevices/storage';

import { setMyPlaylists } from './redux/slice';

import MoodControllerPage from './pages/MoodControllerPage';
import MoodPlayPage from './pages/MoodPlayPage';
import MyPlayPage from './pages/MyPlayPage';
import MusicPlayerPage from './pages/MusicPlayerPage';
import NavigationBarContainer from './containers/NavigationBarContainer';

const Wrap = styled.div({
  display: 'flex',
  flexDirection: 'row',
});

export default function App() {
  const dispatch = useDispatch();

  const myPlaylists = loadItem('moodPlay');

  if (myPlaylists) {
    dispatch(setMyPlaylists(myPlaylists));
  }

  return (
    <Wrap>
      <NavigationBarContainer />

      <Switch>
        <Route exact path="/" component={MoodControllerPage} />
        <Route exact path="/moodplay" component={MoodPlayPage} />
        <Route exact path="/myplay" component={MyPlayPage} />
      </Switch>

      <Switch>
        <Route exact path={['/moodplay', '/myplay']} component={MusicPlayerPage} />
      </Switch>
    </Wrap>
  );
}
