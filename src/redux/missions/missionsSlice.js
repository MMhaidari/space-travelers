import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  isLoading: false,
  error: false,
};

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    try {
      const response = await axios.get(missionsUrl);
      if (!response) throw new Error("Enable to get mission's data");
      const { data } = response;
      return data;
    } catch (error) {
      return error.message;
    }
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: {
    [getMissions.fulfilled]: (state, { payload }) => {
      const missions = [];
      payload.forEach((mission) => missions.push({
        missionId: mission.mission_id,
        missionName: mission.mission_name,
        description: mission.description,
      }));
      return {
        ...state,
        missions,
        isLoading: false,
        error: false,
      };
    },
    [getMissions.pending]: (state) => ({ ...state, isLoading: true }),
    [getMissions.rejected]: (state) => ({
      ...state,
      isLoading: false,
      error: true,
    }),
  },
});

export default missionsSlice.reducer;
