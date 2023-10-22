import { configureStore } from '@reduxjs/toolkit';
import { todosSlice } from './todos/slice';

// export const store = configureStore({ reducer: todosSlice.reducer });
export const store = configureStore({
  reducer: { todos: todosSlice.reducer },
});
