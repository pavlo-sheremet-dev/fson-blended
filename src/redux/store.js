import { configureStore } from '@reduxjs/toolkit';
import { todosSlice } from './todosSlice';

export const store = configureStore({
  reducer: {
    [todosSlice.name]: todosSlice.reducer,
  },
});
