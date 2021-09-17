import { configureStore } from '@reduxjs/toolkit';
import gameSlice from './gameSlice';

const store = configureStore({
  reducer: gameSlice,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
