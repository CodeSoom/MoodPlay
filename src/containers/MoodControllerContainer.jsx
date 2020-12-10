import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import {
  setMoodselectFields,
  loadMoodCategories,
} from '../redux/slice';

import MoodEnergyForm from '../components/MoodEnergyForm';
import MoodBrightnessForm from '../components/MoodBrightnessForm';

import { get } from '../utils/utils';

import { MoodBackgroundSelected } from '../assets/images';

const MoodSubmitButton = styled.button({
  fontSize: '16px',
  fontWeight: 'bold',
  marginTop: '20px',
  width: '16vh',
  height: '7.5vh',
  border: '0',
  outline: '0',
  background: `url(${MoodBackgroundSelected}) no-repeat`,
  backgroundSize: 'contain',
  color: '#fff',

  '&:active': {
    transform: 'scale(0.98)',
  },
});

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
