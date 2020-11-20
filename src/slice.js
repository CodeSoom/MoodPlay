import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    moodselectFields: {
      energy: '',
      brightness: '',
    },
  },
  reducers: {
    setMoodselectFields(state, { payload: { name, value } }) {
      return {
        ...state,
        moodselectFields: {
          ...state.moodselectFields,
          [name]: value,
        },
      };
    },
  },
});

export const {
  setMoodselectFields,
} = actions;

export default reducer;
