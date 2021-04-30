import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'calendar',
  initialState: {
    availableDates: null,
  },
  reducers: {
    setAvailableDates: (state, { payload }) => {
      state.availableDates = payload;
    },
  },
  extraReducers: {},
});

export default slice.reducer;

// calendar selector
export const calendarSelector = (state: any) => state.calendar;

// Expose reducers
const { setAvailableDates } = slice.actions;

// Set available dates
export const setCalendarAvailableDates = (payload: any) => (dispatch: any) => {
  dispatch(setAvailableDates(payload));
};
