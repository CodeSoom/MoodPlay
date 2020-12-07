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
import NavigationBar from './components/NavigationBar';

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
