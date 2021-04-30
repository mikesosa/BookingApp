import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth';
import calendarSelector from './calendar';

const combinedReducer = combineReducers({
  auth: authReducer,
  calendar: calendarSelector,
});

export default combinedReducer;
