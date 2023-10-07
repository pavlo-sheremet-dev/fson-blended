import { configureStore } from '@reduxjs/toolkit';
import { todosSlice } from './todos/todos.slice';

export const store = configureStore({ reducer: { todos: todosSlice.reducer } });
