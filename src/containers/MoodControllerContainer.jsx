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

const mq = facepaint([
  '@media(min-width: 672px)',
]);

const MoodSubmitButton = styled.button(() => mq({
  fontSize: ['1.5vw', '1vw'],
  fontWeight: 'bold',
  marginTop: '20px',
  width: ['15vw', '9vw'],
  height: ['6.5vw', '3.8vw'],
  border: '0',
  outline: '0',
  background: `url(${MoodBackgroundSelected}) no-repeat`,
  backgroundSize: 'contain',
  color: '#fff',

  '&:active': {
    transform: 'scale(0.98)',
  },
}));

export default function MoodControllerContainer() {
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
      <Link to="/moodplay">
        <MoodSubmitButton
          type="button"
          onClick={handleSubmitMood}
        >
          Play your mood!
        </MoodSubmitButton>
      </Link>
    </>
  );
}
