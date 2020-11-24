import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import {
  setMoodselectFields,
  loadMoodCategories,
} from './slice';

import MoodEnergyForm from './MoodEnergyForm';
import MoodBrightnessForm from './MoodBrightnessForm';

export default function MoodControllerContainer() {
  const dispatch = useDispatch();

  const { moodselectFields } = useSelector((state) => ({
    moodselectFields: state.moodselectFields,
  }));

  function handleChangeMood(event) {
    const { name, value } = event.target;

    dispatch(setMoodselectFields({ name, value }));
  }

  function handleSubmitMood() {
    const { energy, brightness } = moodselectFields;

    if (!energy || !brightness) {
      return;
    }

    dispatch(loadMoodCategories());
  }

  return (
    <>
      <MoodEnergyForm
        onChange={handleChangeMood}
      />
      <MoodBrightnessForm
        onChange={handleChangeMood}
      />
      <button type="button" onClick={handleSubmitMood}>
        <Link to="/project-react-2-bbhye1/moodplay">
          Play your mood!
        </Link>
      </button>
    </>
  );
}
