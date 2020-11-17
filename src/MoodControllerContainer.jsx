import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setClientLocation } from './slice';

import MoodController from './MoodController';

export default function MoodControllerContainer() {
  const disptach = useDispatch();

  const { clientLocation } = useSelector((state) => ({
    clientLocation: state.clientLocation,
  }));

  const handleClickController = (event) => {
    const { clientX, clientY } = event;

    disptach(setClientLocation({ x: clientX, y: clientY }));
  };

  return (
    <>
      <button type="submit">Play your mood</button>
      <MoodController
        onClick={handleClickController}
        clientLocation={clientLocation}
      />
    </>
  );
}
