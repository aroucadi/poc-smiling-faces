
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appointments: [],
  status: 'idle',
  error: null,
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {},
});

export default appointmentsSlice.reducer;
