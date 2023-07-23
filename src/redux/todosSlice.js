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
    editTodos: (state, action) => {
      //prevTodos.map(todo => (todo.id === editedTodo.id ? editedTodo : todo))
      state.todos = state.todos.map(todo =>
        todo.id === action.payload.id ? action.payload : todo
      );
      state.selectedTodo = null;
    },
    clearSelected: state => {
      state.selectedTodo = null;
    },
  },
});

export const { addTodo, deleteTodo, findTodo, editTodos, clearSelected } =
  todosSlice.actions;
