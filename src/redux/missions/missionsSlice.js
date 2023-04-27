import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  isLoading: false,
  error: false,
  status: 'idle',
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
  reducers: {
    joinMission: (state, { payload }) => {
      const id = payload;
      const joinedMissions = state.missions.map((mission) => {
        if (mission.missionId !== id) return mission;
        return { ...mission, reserved: true };
      });
      return { ...state, missions: joinedMissions };
    },
    leaveMission: (state, { payload }) => {
      const id = payload;
      const leftMissions = state.missions.map((mission) => {
        if (mission.missionId !== id) return mission;
        return { ...mission, reserved: false };
      });
      return { ...state, missions: leftMissions };
    },
  },
  extraReducers: {
    [getMissions.fulfilled]: (state, { payload }) => {
      const missions = [];
      payload.forEach((mission) => missions.push({
        missionId: mission.mission_id,
        missionName: mission.mission_name,
        description: mission.description,
        reserved: false,
      }));
      return {
        ...state,
        missions,
        isLoading: false,
        error: false,
        status: 'fullfiled',
      };
    },
    [getMissions.pending]: (state) => ({
      ...state,
      isLoading: true,
      status: 'pending',
    }),
    [getMissions.rejected]: (state) => ({
      ...state,
      isLoading: false,
      error: true,
      status: 'rejected',
    }),
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
