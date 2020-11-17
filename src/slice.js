import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    clientLocation: null,
  },
  reducers: {
    setClientLocation(state, { payload: clientLocation }) {
      return {
        ...state,
        clientLocation,
      };
    },
  },
});

export const { setClientLocation } = actions;

export default reducer;
