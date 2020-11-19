import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    moodPointLocation: null,
    moodRatio: {},
    todayMood: [],
  },
  reducers: {
    setMoodPointLocation(state, { payload: moodPointLocation }) {
      return {
        ...state,
        moodPointLocation,
      };
    },

    setTodayMood(state) {
      const moods = {
        calm: '차분한',
        uplifting: '신나는',
        happy: '밝은',
        sad: '어두운',
      };

      const todayMood = Object
        .entries(state.moodRatio)
        .reduce((acc, cur) => {
          if (cur[1]) {
            acc.push([moods[cur[0]], cur[1]]);
          }
          return acc;
        }, [])
        .sort((a, b) => b[1] - a[1]);

      return {
        ...state,
        todayMood,
      };
    },

    setMoodRatio(state, {
      payload: {
        top, left, width, xPosition, yPosition,
      },
    }) {
      const xCenter = left + (width / 2);
      const yCenter = top + (width / 2);

      const calm = xPosition < xCenter
        ? Math.floor(100 - (((xPosition - left) / (width / 2)) * 100))
        : 0;

      const uplifting = xPosition > xCenter
        ? Math.floor(((xPosition - xCenter) / (width / 2)) * 100)
        : 0;

      const happy = yPosition < yCenter
        ? Math.floor(100 - (((yPosition - top) / (width / 2)) * 100))
        : 0;

      const sad = yPosition > yCenter
        ? Math.floor(((yPosition - yCenter) / (width / 2)) * 100)
        : 0;

      return {
        ...state,
        moodRatio: {
          ...state.moodRatio,
          calm,
          uplifting,
          happy,
          sad,
        },
      };
    },
  },
});

export const {
  setMoodPointLocation,
  setMoodRatio,
  setTodayMood,
} = actions;

export default reducer;
