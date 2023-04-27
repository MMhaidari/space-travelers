import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  status: 'idle',
  erorrr: null,
};

export const fetchRockets = createAsyncThunk(
  'rocket/fectchRockectsData',
  async () => {
    try {
      const request = await fetch(apiUrl);
      const data = await request.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchRockets.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        rockets: action.payload,
      }));
  },
});

export const { reserveRocket, cancelReservation } = rocketSlice.actions;
export default rocketSlice.reducer;
