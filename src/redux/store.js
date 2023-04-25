import { configureStore } from '@reduxjs/toolkit';
import rockectReducer from './rocket/rocketSlice';

export const store = configureStore({
  reducer: {
    rockets: rockectReducer,
  },
});

export default configureStore;
