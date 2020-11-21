import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setMoodselectFields,
  loadMoodCategories,
} from './slice';

import MoodEnergyForm from './MoodEnergyForm';
import MoodBrightnessForm from './MoodBrightnessForm';

export default function MoodControllerContainer() {
  const dispatch = useDispatch();

  const {
    moodselectFields,
    moodCategories,
  } = useSelector((state) => ({
    moodselectFields: state.moodselectFields,
    moodCategories: state.moodCategories,
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
        Play your mood!
      </button>
      <ul>
        {
          moodCategories.length
            ? moodCategories
              .map((item) => (<li>{`${item[0]} - ${item[1]} ${item[2] || ''}`}</li>))
            : null
        }
      </ul>
    </>
  );
}
