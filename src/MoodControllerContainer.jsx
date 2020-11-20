import React from 'react';

import { useDispatch } from 'react-redux';

import { setMoodselectFields } from './slice';

import MoodEnergyForm from './MoodEnergyForm';
import MoodBrightnessForm from './MoodBrightnessForm';

export default function MoodControllerContainer() {
  const dispatch = useDispatch();

  function handleChangeMood(event) {
    const { name, value } = event.target;

    dispatch(setMoodselectFields({ name, value }));
  }

  return (
    <>
      <MoodEnergyForm
        onChange={handleChangeMood}
      />
      <MoodBrightnessForm
        onChange={handleChangeMood}
      />
    </>
  );
}
