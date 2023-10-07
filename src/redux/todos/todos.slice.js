import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodo: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'todos',
  version: 1,
  storage,
};

export const persistedTodoReducer = persistReducer(
  persistConfig,
  todosSlice.reducer
);

export const { addTodo, deleteTodo } = todosSlice.actions;
