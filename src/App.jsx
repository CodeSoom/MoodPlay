import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import './assets/css/global.css';

import { loadItem } from './sevices/storage';

import { setMyPlaylists } from './slice';

import MoodControllerPage from './MoodControllerPage';
import MoodPlayPage from './MoodPlayPage';
import MyPlayPage from './MyPlayPage';
import NavigationBar from './NavigationBar';

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
      <NavigationBar />
      <Switch>
        <Route exact path="/project-react-2-bbhye1" component={MoodControllerPage} />
        <Route exact path="/project-react-2-bbhye1/moodplay" component={MoodPlayPage} />
        <Route exact path="/project-react-2-bbhye1/myplay" component={MyPlayPage} />
      </Switch>
    </Wrap>
  );
}
