import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setMoodPointLocation,
  setMoodRatio,
  setTodayMood,
} from './slice';

import MoodController from './MoodController';

export default function MoodControllerContainer() {
  const dispatch = useDispatch();

  const { moodPointLocation, todayMood } = useSelector((state) => ({
    moodPointLocation: state.moodPointLocation,
    todayMood: state.todayMood,
  }));

  const handleClickController = (event) => {
    const { clientX, clientY } = event;
    const { offsetLeft, offsetTop, offsetWidth } = event.target;

    dispatch(setMoodRatio({
      top: offsetTop,
      left: offsetLeft,
      width: offsetWidth,
      xPosition: clientX,
      yPosition: clientY,
    }));

    dispatch(setMoodPointLocation({ x: clientX, y: clientY }));
  };

  const handSubmitMood = () => {
    dispatch(setTodayMood());
  };

  return (
    <>
      <button
        type="button"
        onClick={handSubmitMood}
      >
        Play your mood
      </button>
      {todayMood.length
        ? (
          <p>
            오늘의 기분은
            { todayMood.map((a) => ` ${a[0] + a[1]}% `)}
            입니다!
          </p>
        )
        : null}
      <MoodController
        onClick={handleClickController}
        moodPointLocation={moodPointLocation}
      />
    </>
  );
}
