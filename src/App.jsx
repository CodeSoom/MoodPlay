import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import './assets/css/global.css';

import MoodControllerPage from './MoodControllerPage';
import MoodPlayPage from './MoodPlayPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={MoodControllerPage} />
      <Route exact path="/moodplay" component={MoodPlayPage} />
    </Switch>
  );
}
