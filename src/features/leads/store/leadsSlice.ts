
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  leads: [],
  status: 'idle',
  error: null,
};

const leadsSlice = createSlice({
  name: 'leads',
  initialState,
  reducers: {},
});

export default leadsSlice.reducer;
