import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodo(state, action) {
      state.items = [...state.items, action.payload];

      // state.items.push(action.payload);
      // return {
      //   ...state,
      //   items: [...state.items, action.payload],
      // };
    },
    deleteTodo(state, action) {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
