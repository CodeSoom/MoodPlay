import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import styled from '@emotion/styled';

import './assets/css/global.css';

import MoodControllerPage from './MoodControllerPage';
import MoodPlayPage from './MoodPlayPage';
import NavigationBar from './NavigationBar';

const Wrap = styled.div({
  display: 'flex',
  flexDirection: 'row',
});

export default function App() {
  return (
    <Wrap>
      <NavigationBar />
      <Switch>
        <Route exact path="/project-react-2-bbhye1" component={MoodControllerPage} />
        <Route exact path="/project-react-2-bbhye1/moodplay" component={MoodPlayPage} />
      </Switch>
    </Wrap>
  );
}
