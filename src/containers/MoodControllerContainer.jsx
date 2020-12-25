import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import facepaint from 'facepaint';

import {
  setMoodselectFields,
  loadMoodCategories,
} from '../redux/slice';

import MoodEnergyForm from '../components/MoodEnergyForm';
import MoodBrightnessForm from '../components/MoodBrightnessForm';

import { get } from '../utils/utils';

import { MoodBackgroundSelected } from '../assets/images';

import { MAIN_FONT_COLOR } from '../styles/constants';

const mq = facepaint([
  '@media(min-width: 672px)',
]);

const MoodSubmit = styled.div(() => mq({
  fontSize: ['3.2vw', '1.4vw'],
  fontWeight: 'bold',
  marginTop: ['2vh', '20px'],
  width: ['31vw', '16vw'],
  height: ['10vw', '5.2vw'],
  border: '0',
  outline: '0',
  background: `url(${MoodBackgroundSelected}) no-repeat`,
  backgroundSize: 'contain',
  color: MAIN_FONT_COLOR,
  '&:active': {
    transform: 'scale(0.98)',
  },

  '& a': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    textDecoration: 'none',
    color: MAIN_FONT_COLOR,
  },
}));

const MoodControllerContainer = React.memo(() => {
  const dispatch = useDispatch();

  const { energy, brightness } = useSelector(get('moodselectFields'));

  function handleChangeMood(event) {
    const { name, value } = event.target;
    dispatch(setMoodselectFields({ name, value }));
  }

  function handleSubmitMood() {
    dispatch(loadMoodCategories());
  }

  return (
    <>
      <MoodEnergyForm
        onChange={handleChangeMood}
        field={energy}
      />
      <MoodBrightnessForm
        onChange={handleChangeMood}
        field={brightness}
      />
      <MoodSubmit
        type="button"
        onClick={handleSubmitMood}
      >
        <Link to="/moodplay">
          MOOD PLAY!
        </Link>
      </MoodSubmit>
    </>
  );
});

export default MoodControllerContainer;
