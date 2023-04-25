import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = `https://api.spacexdata.com/v3/missions`;

export const getMissions = createAsyncThunk("mission/getMissions", async () => {
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/missions");
    if (!response) throw new Error(`Enable to get mission's data`);
    const { data } = response;
    return data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  mission: [],
  isLoading: false,
  error: {
    status: false,
    message: "",
  },
};

const missionSlice = createSlice({
  name: "mission",
  initialState,
  extraReducers: {
    [getMissions.fulfilled]: (state, { payload }) => {
      console.log(payload);
      return { ...state, isLoading: false };
    },
    [getMissions.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getMissions.rejected]: (state, { payload }) => {
      console.log(payload);
    },
  },
});

export default missionSlice.reducer;
