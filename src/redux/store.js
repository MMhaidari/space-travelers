import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import rockectReducer from './rocket/rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rockectReducer,
  },
});

export default store;
