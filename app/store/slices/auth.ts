import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {
    userToken: null,
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.userToken = payload;
    },
  },
  extraReducers: {},
});

export default slice.reducer;

// Auth selector
export const authSelector = (state: any) => state.auth;

// Expose reducers
const { setToken } = slice.actions;

// Set token
export const setUserToken = (payload: any) => (dispatch: any) => {
  dispatch(setToken(payload));
};
