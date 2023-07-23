import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  selectedTodo: null,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    findTodo: (state, action) => {
      state.selectedTodo = state.todos.find(todo => todo.id === action.payload);
    },
  },
});

export const { addTodo, deleteTodo, findTodo } = todosSlice.actions;
