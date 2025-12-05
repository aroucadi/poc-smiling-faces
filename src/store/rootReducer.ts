
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/store/authSlice';
import postsReducer from '../features/posts/store/postsSlice';
import profileReducer from '../features/profile/store/profileSlice';
import leadsReducer from '../features/leads/store/leadsSlice';
import appointmentsReducer from '../features/appointments/store/appointmentsSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  profile: profileReducer,
  leads: leadsReducer,
  appointments: appointmentsReducer,
});
