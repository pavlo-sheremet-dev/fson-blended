import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodo: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { addTodo } = todosSlice.actions;
